import React, { Component } from 'react'
import { Text, View, DrawerLayoutAndroid, TouchableOpacity, Image, ScrollView } from 'react-native'
import { styles } from "../Drawer/styles"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { variables, globalStyles } from "../../globalStyles"
import UpperNav from '../UpperNav/UpperNav'
import LowerNav from '../LowerNav/LowerNav'
import userImg from "../../assets/User-2_2x.png"
import en_us from "../../lang/en-us.json"

import { drawerContent } from "./config"

export default class Drawer extends Component {


    render() {

        const navigationView = (<ScrollView contentContainerStyle={{ backgroundColor: variables.primary, height: variables.height }}>

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
                    return (<View style={{}}>
                        <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i}>
                            <Icon name={e.icon} size={25} color={variables.snow} />
                            <Text style={styles.upperBlockTxt}>{e.title.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>)
                })}
            </View>

           

            <View style={[styles.contentListAlign, styles.lowerBlock]}>
                {drawerContent.lowerBlock.map((e, i) => {
                    return (<View style={{}}>
                        <TouchableOpacity style={[styles.drawerContent, globalStyles.row]} key={i}>
                            <Icon name={e.icon} size={25} color={variables.snow} />
                            <Text style={styles.upperBlockTxt}>{e.title}</Text>
                        </TouchableOpacity>
                    </View>)
                })}
            </View>

            <View style={styles.logout}>
                <TouchableOpacity>
                    <Text style={styles.logoutTxt}>{en_us.drawer.logout}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>)
        return (

            <DrawerLayoutAndroid drawerWidth={variables.width / 1.33}
                ref={'DRAWER_REF'}
                drawerPosition={'left'}
                renderNavigationView={() => navigationView}
            >
                <ScrollView contentContainerStyle={globalStyles.container}>
                    <UpperNav pressed={() => this.refs['DRAWER_REF'].openDrawer()} />
                </ScrollView>

                <View style={styles.lowerNav}>
                    <LowerNav />
                </View>



            </DrawerLayoutAndroid>

        )
    }
}
