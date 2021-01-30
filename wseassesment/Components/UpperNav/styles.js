import { StyleSheet } from "react-native";
import {variables} from "../../globalStyles"



export const styles = StyleSheet.create({

   upperNav: {
       backgroundColor: variables.primary,
       height: 45,
       //paddingHorizontal: variables.primary_align,
       marginHorizontal: variables.primary_align,
       marginVertical: variables.primary_align,
       borderRadius: 8,
       alignItems: "center",
       //justifyContent:"center",
       flexDirection: "row"
   },

   userBtn: {
       height: 25,
       width:25,
       marginLeft: 5,
       marginRight: 15,
       resizeMode: "contain",
       //backgroundColor:"yellow"
   },

   searchBar: {
    //backgroundColor: "yellow",
    width: 190,
    flex:3
   },

   searchInp: {
       color: variables.secondaryTxt,
       paddingLeft: 8,
       paddingRight: 16
   },

   btn: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       height: "100%",
       //backgroundColor: variables.secondary
   }
    

})