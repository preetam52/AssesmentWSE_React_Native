import { StyleSheet } from "react-native";
import { variables, globalStyles } from "../../globalStyles"



export const styles = StyleSheet.create({

    navbar: {
        backgroundColor:"white",
        elevation: 5,
        //borderBottomColor:variables.primary,
        //borderBottomWidth: 1,
        zIndex:10
        
    },
   nav: {
       padding:10,
       flex: 1,
       alignItems:"center",
       justifyContent:"center"
   },

   activeNav: {
    borderBottomWidth:4,
    borderBottomColor:variables.primary,
   },

   activeTxt: {

   }


})