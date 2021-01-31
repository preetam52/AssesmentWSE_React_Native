import { StyleSheet, Dimensions } from 'react-native';
import {variables, globalStyles} from "../../globalStyles"

export const styles = StyleSheet.create({

    lowerNavContainer: {
        flexDirection: 'row', 
        backgroundColor: variables.primary, 
        width: variables.width,
    },

    btnView: {
        flex: 1
    },

    activeBtn: {
        borderTopColor: variables.active,
        borderTopWidth: 5
    },
    inactiveBtn: {

    },

    btnTouch: {
        flex: 1, 
        //backgroundColor: "red",
        paddingHorizontal: 6,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 15
    },

    lowerTxt: {
        fontSize: 13,
        textAlign: "center",
        color: variables.secondaryTxt
    }


})