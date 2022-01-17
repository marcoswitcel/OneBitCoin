import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";

/**
 * @param {object} param0 
 * @param {number} param0.lastCotation
 */
export const CurrentPrice = ({ lastCotation }) => (
    <View style={styles.headerPrice}>
        <Text style={styles.currentPrice}>$ {lastCotation.toFixed(2)}</Text>
        <Text style={styles.textPrice}>Última cotação</Text>
    </View>
)

export default CurrentPrice;