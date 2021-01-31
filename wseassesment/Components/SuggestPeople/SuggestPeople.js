import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import en_us from "../../lang/en-us.json"
import { globalStyles, variables } from "../../globalStyles"
import { people } from "./config"
import People from '../People/People'
import youmayknowImg from "../../assets/YouMayKnow_IMG.png"


export default class SuggestPeople extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={[globalStyles.secondary_H_alignment, styles.header]}>
                    <View style={styles.headingBlock}>
                        <Text style={styles.heading}>{en_us.suggetions.youmayknow}</Text>

                        <Text style={styles.description}>{en_us.suggetions.description}</Text>
                    </View>

                    <View style={styles.btnBlock}>
                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={styles.btn} onPress={() => this.props.openModal()}>
                            <Text style={styles.btnTxt}>{en_us.suggetions.showall}</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView nestedScrollEnabled horizontal>

                    <Image style={styles.img} source={youmayknowImg} />

                    {people.filter((e,i) => i <= 5).map((e, i) => <People key={i} data={e} />)}
                </ScrollView>

            </View>
        )
    }
}
