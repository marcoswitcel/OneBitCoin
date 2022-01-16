import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles.js";

// @ts-expect-error O js check não reconhece esse tipo de importação
const source = require("../../../img/bitcoinred.png");

export const QuotationsItems = () => (
    <View style={styles.mainContent}>
        <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
                <Image style={styles.logBitcoin} source={source}/>
                <Text style={styles.dayCotation}>15/01/2022</Text>
            </View>
        </View>
        <View style={styles.contextRight}>
            <Text style={styles.price}>$ 5331.11</Text>
        </View>
    </View>
)

export default QuotationsItems;