import React, { Component } from 'react'
import { Text, View, Modal, TouchableOpacity, ScrollView } from 'react-native'
import {styles} from "./styles"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { globalStyles, variables } from '../../../globalStyles'
import en_us from "../../../lang/en-us.json"
import {people} from "../../SuggestPeople/config"
import People from '../People'


export default class PeopleModal extends Component {
    render() {

        let row = [];
        let col = [];

        for (let i = 0; i < people.length; i++) {
            col.push(<People key={i} data={people[i]}/>)

            if(i % 2 !== 0) {
                row.push(<View style={globalStyles.row}>{col}</View>);
                col = [];
            }
            
        }

        return (
            <View>
                <Modal animationType="slide"

                    visible={this.props.isOpen}
                    onRequestClose={() => {
                        this.props.closeModal();
                    }}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.arrow}>
                                <TouchableOpacity style={styles.btn} onPress={() => this.props.closeModal()}>
                                <Icon name={"arrow-back"} size={30} color={variables.inactive}/>
                                </TouchableOpacity>
                                
                            </View>

                            <View style={styles.search}>
                                <TouchableOpacity style={styles.btn}>
                                <Icon name={"search-outline"} size={30} color={variables.inactive}/>
                                </TouchableOpacity>
                               
                            </View>

                        </View>

                        <View style={styles.peopleContainer}>
                            <Text style={styles.heading}>{en_us.suggetions.youmayknow}</Text>

                            <Text style={styles.description}>{en_us.suggetions.description}</Text>

                            <ScrollView nestedScrollEnabled contentContainerStyle={styles.scrollContainer}>
                                {row}
                            </ScrollView>
                        </View>

                    </View>

                </Modal>
            </View>
        )
    }
}
