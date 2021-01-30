import { StyleSheet } from "react-native";
import { variables } from "../../globalStyles"



export const styles = StyleSheet.create({

    upperNav: {
        backgroundColor: variables.primary,
        height: 45,
        //paddingHorizontal: variables.primary_align,
        marginHorizontal: variables.primary_align,
        marginVertical: variables.primary_align,
        borderRadius: 8,
        //alignItems: "center",
        justifyContent: "center"
    },

    userBtn: {
        height: 25,
        width: 25,
        marginLeft: 5,
        resizeMode: "contain",
        //backgroundColor:"yellow"
    },

    lowerNav: {
        position: "absolute",
        bottom: 0
    },

        upperBlockTxt: {
            color: variables.snow,
            fontSize: 14,
            marginLeft: 15
        },

        contentListAlign: {
            paddingHorizontal: variables.width / 7.66, //47
            //alignItems: "center",
            justifyContent: "center",
            flex:2
        },

        profileAlign: {
            paddingHorizontal: variables.width / 7.66, //47
            //alignItems: "center",
            justifyContent: "flex-end",
            flex: 1
        },

        drawerContent: {
            //borderWidth:1,
            paddingVertical:8,
            alignItems: "center"
        },

        userImg: {
            height: 60,
            width: 60,
            resizeMode: "contain",
            marginRight: 15
        },

        profile: {
            alignItems: "center"
        },

        usernameTxt: {
            color: "white",
            fontSize: 20
        },

        viewProfileTxt: {
            color: "#DADD21"
        },

        lowerBlock: {
            backgroundColor: variables.secondary
        },

        logout: {
            //justifyContent: "flex-end",
            alignItems:"flex-end",
            paddingHorizontal: 20
        },

        logoutTxt: {
            color: "white"
        }




})