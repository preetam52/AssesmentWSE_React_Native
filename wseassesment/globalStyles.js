import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const variables = {
   
    height: height, //763
    width: width,
    primary: "#00394D",
    secondary: "#154A59",
    snow: "#D4DDE0",
    primary_align: 10,
    secondaryTxt: "#698F8A",

    secondaryFont: 10

}

export const globalStyles = StyleSheet.create({

    container: {

        height: variables.height,
        position: "relative",
        //backgroundColor: "yellow"
    },

    row: {
        flexDirection: "row"
    },

})