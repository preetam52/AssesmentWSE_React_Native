import { StyleSheet } from "react-native";
import {variables} from "../../../globalStyles"



export const styles = StyleSheet.create({

 container: {
     backgroundColor: "#1D525E",
     height: variables.height
 },

 header: {
     flexDirection: "row"
 },

 arrow: {
     flex: 1,
     marginLeft:17,
     marginTop: 17
 },

 search: {
     flex: 1,
     justifyContent:"flex-end",
     alignItems:"flex-end",
     marginRight:17,
     marginTop: 17
 },

 btn: {
     width: 30
 },

 peopleContainer: {
     alignItems: "center",
     justifyContent: "center",
     marginTop: 15,
     height: variables.height / 1.11
 },

 heading: {
     color: variables.primaryTxt,
     fontSize: 18
 },
 
 description: {
     color: variables.active
 },

 scrollContainer: {
     paddingVertical: 15
 }
    

})