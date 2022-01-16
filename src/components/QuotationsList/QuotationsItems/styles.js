import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    contextLeft: {
        width: "36%",
        alignItems: "flex-start",
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end",
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center",
    },
    logBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: "white",
        fontWeight: "bold",
    },
    price: {
        fontSize: 19,
        color: "white",
        fontWeight: "bold",
    },

});