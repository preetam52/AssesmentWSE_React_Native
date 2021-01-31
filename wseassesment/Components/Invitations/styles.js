import { StyleSheet } from "react-native";
import { variables, globalStyles } from "../../globalStyles"



export const styles = StyleSheet.create({

    container: {
        backgroundColor: variables.sky
    },

    alignment: {
        marginHorizontal: variables.secondary_align,

    },

    header: {
        marginBottom: 5
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        color: variables.primary,
        paddingTop: 20

    },

    btnView: {
        paddingVertical: 10,
    },
    btn: {
        borderRadius: 50,
        //paddingHorizontal: 10,
        elevation: 5,
        backgroundColor: variables.sky,
        width: 64,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    details: {
        color: variables.secondaryTxt
    },

    data: {
        color: variables.primary,
        fontWeight: "bold"
    },

    profile: {
        backgroundColor: "white",
        elevation: 5,
        // padding: 20,
        // flex: 1,
        height: 88,
        width: 280,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    img: {
        height: 45,
        width: 45,
        resizeMode: "contain"
    },

    name: {
        color: variables.primary,
        fontWeight: "bold",
        fontSize: 14
    },

    profession: {
        color: "#AABCC3",
        fontSize: 12
    },

    profileBtn: {
        padding: 5,
        borderRadius: 4
    },

    accept: {
        backgroundColor: variables.active
    },

    acceptTxt: {
        color: "white"
    },

    ignoreTxt: {
        color: "#AABCC3"
    }


})