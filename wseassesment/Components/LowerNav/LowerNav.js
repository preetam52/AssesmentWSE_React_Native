import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { variables, globalStyles } from "../../globalStyles"
import { buttons } from "./config"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { styles } from './styles'


export default class LowerNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: 3,
        }
    }

    navBtnPressed = (idx) => {
        this.setState({
            isActive: idx
        },() => this.props.activeNav(this.state.isActive))
    }

    render() {
        return (
            <View>
                <View style={styles.lowerNavContainer}>
                    {buttons.map((e, i) =>
                        <View style={[styles.btnView, this.state.isActive === i ? styles.activeBtn : styles.inactiveBtn]} key={i}>

                            <TouchableOpacity onPress={() => this.navBtnPressed(i)} style={styles.btnTouch}>

                                <Icon name={this.state.isActive === i ? e.icon.active : e.icon.inactive} size={25} color={this.state.isActive === i ? e.color.active : e.color.inactive} />

                                <Text style={styles.lowerTxt}>{e.title}</Text>

                            </TouchableOpacity>

                        </View>
                    )}
                </View>
            </View>
        )
    }
}
