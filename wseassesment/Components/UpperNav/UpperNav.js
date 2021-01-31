import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { styles } from "./styles"
import userImg from "../../assets/User-2.png"
import notification from "../../assets/noun_notification_1863770.png"
import en_us from "../../lang/en-us.json"
import { variables } from '../../globalStyles'
import Svg,{Path} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/dist/Ionicons'


export default class UpperNav extends Component {
    render() {
        return (
            
            <View style={styles.upperNav}>

                <TouchableOpacity style={styles.userBtn} activeOpacity={0.7}
                    onPress={() => this.props.leftDrawer("left")}>

                    <Image style={styles.userBtn} source={userImg} />
                </TouchableOpacity>

                <View style={styles.searchBar}>
                    <TextInput style={styles.searchInp} placeholder={en_us.upper_nav.placeholder} placeholderTextColor={variables.secondaryTxt} />
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Image source={notification}/>
                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Icon name={"md-calendar-outline"} size={20} color={variables.secondaryTxt}/>
                   
                </TouchableOpacity>
            </View>
        )
    }
}
