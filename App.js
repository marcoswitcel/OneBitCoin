import React from "react";
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

function url(qtdDay) {
  const date = new Date; // inicia com a data de hoje
  const endDate = formatDate(date); // a data final da consulta é hoje
  date.setDate(date.getDate() - qtdDay); // seta a data do objeto `Date` como send igual a hoje - `qtdDay`.
  const startDate = formatDate(date); // Gera a data de inicio
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

export default function App() {
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
