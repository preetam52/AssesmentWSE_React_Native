import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { drawerContent } from "./config"
import userImg from "../../../assets/User-2_2x.png"
import en_us from "../../../lang/en-us.json"
import {styles} from "./styles"
import {globalStyles, variables} from "../../../globalStyles"
import Icon from 'react-native-vector-icons/dist/Ionicons'

export default class LeftDrawer extends Component {
    render() {
        return (
            <>
                 <View style={[styles.profileAlign]}>
                <View style={[globalStyles.row, styles.profile]}>
                    <Image style={styles.userImg} source={userImg} />
                    <View>
                        <Text style={styles.usernameTxt}>{en_us.drawer.user_name}</Text>
                        <TouchableOpacity>
                        <Text style={styles.viewProfileTxt}>{en_us.drawer.view_profile}</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>


            </View>

            <View style={styles.contentListAlign}>
                {drawerContent.upperBlock.map((e, i) => {
                    return (<View key={i} style={{}}>
                        <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i}>
                            <Icon name={e.icon} size={25} color={variables.snow} />
                            <Text style={styles.upperBlockTxt}>{e.title.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>)
                })}
            </View>

           

            <View style={[styles.contentListAlign, styles.lowerBlock]}>
                {drawerContent.lowerBlock.map((e, i) => {
                    return (<View key={i} style={{}}>
                        <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i}>
                            <Icon name={e.icon} size={25} color={variables.snow} />
                            <Text style={styles.upperBlockTxt}>{e.title}</Text>
                        </TouchableOpacity>
                    </View>)
                })}
            </View>

            <View style={styles.logout}>
                <TouchableOpacity style={styles.logoutAlign}>
                    <Icon name={"md-power-outline"} color={variables.snow} size={15}/>
                    <Text style={styles.logoutTxt}>{en_us.drawer.logout}</Text>
                </TouchableOpacity>
            </View>
            </>
        )
    }
}
