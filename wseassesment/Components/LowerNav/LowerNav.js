import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {variables, globalStyles} from "../../globalStyles"
import {buttons} from "./config"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { styles } from './styles'


export default class LowerNav extends Component {
    render() {
        return (
            <View>
            <View style={styles.lowerNavContainer}>
                {buttons.map((e,i) => 
                    <View style={styles.btnView} key={i}>
                        <TouchableOpacity style= {styles.btnTouch}>
                        <Icon name={e.icon} size={25} color={variables.secondaryTxt}/>
                        <Text style={styles.lowerTxt}>{e.title}</Text>
                        </TouchableOpacity>
                       
                    </View>
                )}
            </View>
            </View>
        )
    }
}
