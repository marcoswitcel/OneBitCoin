import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";


export const CurrentPrice = () => (
    <View style={styles.headerPrice}>
        <Text style={styles.currentPrice}>$ 5433.11</Text>
        <Text style={styles.textPrice}>Última cotação: $ 5433.11</Text>
    </View>
)

export default CurrentPrice;