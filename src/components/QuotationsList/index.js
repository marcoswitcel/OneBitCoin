import React, { Fragment } from "react";
import { TouchableOpacity, ScrollView, Text, View, FlatList } from "react-native";
import QuotationsItems from "./QuotationsItems/index.js";
import styles from "./styles.js";

/**
 * @param {object} param0 
 * @param {(number: number) => void} param0.filterDay
 * @param {any[]} param0.listTransaction
 */
export const QuotationsList = ({ filterDay, listTransaction }) => (
   <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => filterDay(7)}
            >
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => filterDay(15)}
            >
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => filterDay(30)}
            >
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => filterDay(90)}
            >
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => filterDay(180)}
            >
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
            <FlatList
                data={listTransaction}
                renderItem={({ item }) => (
                    <QuotationsItems valor={item.valor} data={item.data} />
                )}
            />
        </ScrollView>
   </Fragment>
)

export default QuotationsList;