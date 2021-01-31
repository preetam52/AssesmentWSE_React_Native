import { StyleSheet } from "react-native";
import {variables, globalStyles} from "../../globalStyles"



export const styles = StyleSheet.create({

    container: {
        backgroundColor: variables.sky
    },

    card: {
        height: 120,
        width: 140,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    img: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },

    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding:8,
        backgroundColor: "green",
        borderRadius: 4,
        marginTop:7
    },

    btnTxt: {
        fontSize: 10,
        color: "white",
        marginLeft: 5
    },

    inactive: {
        backgroundColor: variables.active
    },

    active: {
        backgroundColor: variables.inactive
    },

    name: {
        color: variables.primary,
        fontWeight: "bold"
    },

    followers: {
        color: variables.secondaryTxt,
        fontSize: 12
    }

  

 

})