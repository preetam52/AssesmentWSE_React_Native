import React, { Component } from 'react'
import { Text, View, DrawerLayoutAndroid, TouchableOpacity, Image, ScrollView, Modal } from 'react-native'
import { styles } from "../Drawer/styles"

import { variables, globalStyles } from "../../globalStyles"
import UpperNav from '../UpperNav/UpperNav'
import LowerNav from '../LowerNav/LowerNav'



import DrawerContainer from './DrawerContainer/DrawerContainer'
import LeftDrawer from './LeftDrawer/LeftDrawer'
import PeopleModal from '../People/PeopleModal/PeopleModal'

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 3,
            isOpen: false
        }
        this.drawer = React.createRef()
    }

    

    activeNav = (idx) => {
        this.setState({
            activeNav: idx
        })
    }

    drawerHandle = (type) => {
        this.setState({
            drawerType: type
        }, () => {
            this.drawer.current.openDrawer()
        })
    }


    render() {

        const leftNavigationView = (<ScrollView  contentContainerStyle={{ backgroundColor: variables.primary, height: variables.height }}>

            <LeftDrawer />


        </ScrollView>)

        const rightNavigationView = (<ScrollView contentContainerStyle={{ backgroundColor: variables.primary, height: variables.height }}>

            <LeftDrawer />


        </ScrollView>)
        return (
            <>

            <DrawerLayoutAndroid drawerWidth={variables.width / 1.33}
                ref={this.drawer}
                drawerPosition={this.state.drawerType}
                renderNavigationView={() => leftNavigationView }
            >
                <>
                <View >
                   

                    <DrawerContainer drawerHandle={(e) => this.drawerHandle(e)} openModal={() => this.setState({isOpen: true})} activeNav={this.state.activeNav} />

                </View>

                <View style={styles.lowerNav}>
                    <LowerNav activeNav={(idx) => this.activeNav(idx)} />
                </View>

               
</>

            </DrawerLayoutAndroid>

            <PeopleModal isOpen={this.state.isOpen} closeModal={() => this.setState({isOpen: false})}/>


            </>

        )
    }
}
