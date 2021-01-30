import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { globalStyles, variables } from "../../globalStyles"
import {styles} from "./styles"
import Drawer from "../../Components/Drawer/Drawer"
import LowerNav from '../../Components/LowerNav/LowerNav'

export default class Main extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Drawer />
              
              
            </View>
        )
    }
}
