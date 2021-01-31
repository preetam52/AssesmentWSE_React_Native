import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Connects from '../../Connects/Connects'
import Invitations from '../../Invitations/Invitations'
import SuggestPeople from '../../SuggestPeople/SuggestPeople'
import UpperNav from '../../UpperNav/UpperNav'
import {variables, globalStyles} from "../../../globalStyles"
import { styles } from './styles'
import ConnectNav from '../../ConnectNav/ConnectNav'

export default class DrawerContainer extends Component {
    render() {
        return (
            <>
               
                
                    <ScrollView stickyHeaderIndices={[1]} style={styles.scrollContainer}>
                         <UpperNav leftDrawer={(e) => this.props.drawerHandle(e)} />
                        
                         <ConnectNav/>
                        <Invitations/>
                        <SuggestPeople openModal={this.props.openModal}/>

                        <Connects/>
                        
                       
                    </ScrollView>

                
                
            </>
        )
    }
}
