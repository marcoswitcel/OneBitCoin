import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles.js";

// @ts-expect-error O js check não reconhece esse tipo de importação
const source = require("../../../img/bitcoinred.png");

/**
 * @param {object} param0 
 * @param {string} param0.data
 * @param {number} param0.valor
 */
export const QuotationsItems = ({ data, valor }) => (
    <View style={styles.mainContent}>
        <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
                <Image style={styles.logBitcoin} source={source}/>
                <Text style={styles.dayCotation}>{data}</Text>
            </View>
        </View>
        <View style={styles.contextRight}>
            <Text style={styles.price}>$ {valor.toFixed(2)}</Text>
        </View>
    </View>
)

export default QuotationsItems;