import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {navButtons} from "./config"
import {globalStyles, variables} from "../../globalStyles"
import {styles} from "./styles"

export default class ConnectNav extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive: 0
        }
    }
    render() {

        return (
            <View style={[globalStyles.row, styles.navbar]}>
                {navButtons.map((e,i) => <View key={i} style={[styles.nav, this.state.isActive === i && styles.activeNav]}>
                    <Text style={[]}>{e.title}</Text></View>)}
            </View>
        )
    }
}
