import { StyleSheet } from "react-native";
import {variables} from "../../globalStyles"



export const styles = StyleSheet.create({

 header: {
     marginTop: 20,
     marginBottom: 20,
     flexDirection: "row",
     alignItems: "center"
 },

 heading: {
     
     
 },

 headingTxt: {
     color: variables.primary,
     fontSize: 14,
     fontWeight: "bold"
 },

 dropdownView: {
     flex:1
 },

 dropdown: {
     flexDirection: "row",
     alignSelf: "flex-end",
     backgroundColor: "white",
     borderRadius: 4,
     elevation: 4,
     padding: 3,
     alignItems:"center",
     justifyContent: "center"
 },

 sortby: {
     color: "#90949C",
     marginRight: 5
 },

 recent: {
     color: variables.primary,
     marginRight: 8
 },

 connectLists: {
     backgroundColor: "white",
     elevation: 5,
     padding: 10, flex: 1,
     marginVertical: 5,
     borderRadius: 8,
     alignItems: "center"
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

 details: {
     marginLeft: 10,
     flex:1,
 },

 mr10:{
    marginRight:10
 }
    

})