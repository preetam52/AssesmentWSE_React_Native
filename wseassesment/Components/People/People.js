import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { globalStyles, variables } from '../../globalStyles';
import {styles} from "./styles"

export default class People extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : props.data
        }
    }

    btnPressed = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.img} source={this.state.data.uri}/>
                <Text style={styles.name}>{this.state.data.name}</Text>
                <Text style={styles.followers}>{this.state.data.followers} followers</Text>

                <TouchableOpacity activeOpacity={variables.touch_opacity} style={[styles.btn, this.state.isActive ? styles.active : styles.inactive]} onPress={() => this.btnPressed()}>
                    {this.state.isActive && <Icon name={"md-checkmark-circle"} size={15} color={"white"}/>}
                    <Text style={styles.btnTxt}>CONNECT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
