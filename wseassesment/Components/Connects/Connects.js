import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import {globalStyles, variables} from "../../globalStyles"
import en_us from "../../lang/en-us.json"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import {connects} from "./config"

export default class Connects extends Component {
    render() {
        return (
            <View style={{overflow:"hidden"}}>
                <View style={[globalStyles.secondary_H_alignment, styles.header]}>
                    <View style={styles.heading}>
                    <Text style={styles.headingTxt}>{en_us.cconnects.yourconnects}</Text>
                    </View>

                    <View style={styles.dropdownView}>
                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={styles.dropdown}>
                            <Text style={styles.sortby}>{en_us.cconnects.sortby}</Text>
                            <Text style={styles.recent}>{en_us.cconnects.recent}</Text>
                            <Icon name={"md-chevron-down"} size={18}/>
                        </TouchableOpacity>
                    </View>
                   
                </View>

                <View style={{marginBottom: 10}}>
                    {connects.map((e,i) => <View key={i} style={[globalStyles.row,styles.connectLists, globalStyles.secondary_H_alignment]}>

                        <View style={[]}>
                            <Image source={e.uri} style={styles.img}/>
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.name}>{e.name}</Text>
                            <Text style={styles.profession}>{e.profession}</Text>
                        </View>

                        <View style={styles.mr10}>
                            <TouchableOpacity>
                                <Icon name={"md-chatbubble-ellipses"} size={25} color={variables.secondaryTxt}/>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Icon name={"md-ellipsis-vertical-outline"} size={25} color={variables.secondaryTxt}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>)}
                </View>
            </View>
        )
    }
}
