import { StyleSheet } from "react-native";
import {variables} from "../../globalStyles"



export const styles = StyleSheet.create({

 container: {
     backgroundColor: "#1D525E"
 },

 header: {
     paddingVertical: 20,
     flexDirection: "row", 
 },

 headingBlock: {
    flex:1
 },

 heading: {
     color: variables.primaryTxt,
     fontSize: 14
 },

 description: {
     color: variables.secondaryTxt,
     fontSize: 12
 },

 img: {
     width: 170,
     height: 153,
     resizeMode:"contain"
 },

 btnBlock: {
    justifyContent: "flex-end",
    
 },

 btn: {
    backgroundColor: "#1D525E",
    elevation: 26,
    padding: 8,
    borderRadius: 50
 },

 btnTxt: {
     color: variables.primaryTxt
 }

})