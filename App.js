import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationsList from "./src/components/QuotationsList";
import QuotationsItems from "./src/components/QuotationsList/QuotationsItems";

/**
 * Faz com que números
 * @param {number} number 
 * @param {number} [length]
 * @returns {string}
 */
function addZero(number, length = 2) {
  return String(number).padStart(length, "0");
}

/**
 * 
 * @param {Date} date 
 * @returns {string}
 */
function formatDate(date) {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}

/**
 * Retorna a url da api com as datas de início e fim da consulta configuradas
 * usando o valor da variável `qtdDay`
 * 
 * @param {number} qtdDay 
 * @returns {string}
 */
function url(qtdDay) {
  const date = new Date; // inicia com a data de hoje
  const endDate = formatDate(date); // a data final da consulta é hoje
  date.setDate(date.getDate() - qtdDay); // seta a data do objeto `Date` como send igual a hoje - `qtdDay`.
  const startDate = formatDate(date); // Gera a data de inicio
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

/**
 * 
 * @param {string} url 
 * @returns {Promise<{data: string, valor: number}[]>}
 */
async function getListCoins(url) {
  const response = await fetch(url);
  const json = await response.json();
  const bpi = json.bpi;

  return Object.keys(bpi)
    .map(key => ({
      data: key.split("-").reverse().join("/"),
      valor: bpi[key],
    }))
    .reverse();
}

/**
 * 
 * @param {string} url 
 * @returns {Promise<number[]>}
 */
async function getPriceCoinsGraphic(url) {
  const response = await fetch(url);
  const json = await response.json();
  const bpi = json.bpi;

  return Object.keys(bpi)
    .map(key => bpi[key]);
}

export default function App() {
  const [ coinstList, setCoinstList ] = useState([]);
  const [ coinsGraphictList, setCoinsGraphictList ] = useState([ 0 ]);
  const [ days, setDays ] = useState(30);
  const [ updateData, setUpdateData ] = useState(true);

  /**
   * @param {number} number 
   * @returns {void}
   */
  const updateDay = (number) => {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then(setCoinstList);
    // @TODO chamada duplicada, os dados já existem na outra chamda
    getPriceCoinsGraphic(url(days)).then(setCoinsGraphictList);
    // @TODO Checar se esse useEffect está realizando chamadas excessivas
    if (updateData) {
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="light-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationsItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
