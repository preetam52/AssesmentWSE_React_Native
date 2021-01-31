import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Animated, Image } from 'react-native'
import { styles } from './styles'
import en_us from "../../lang/en-us.json"
import { globalStyles, variables } from "../../globalStyles"
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { invitations } from "./config"
import inviteImg from "../../assets/Invitation_Img.png"


export default class Invitations extends Component {

    constructor(props) {
        super(props);
        // console.log('dropdown props', props)
        this.state = {
            animHeight: new Animated.Value(0),
            anime: new Animated.Value(30),
            spinValue: new Animated.Value(0),
            popAnime: new Animated.Value(1),
            active: false,
        };

    }


    activate = () => {

        this.setState({
            active: !this.state.active,
            // txt: ''
        }, () => {

            return Animated.parallel([

                Animated.timing(
                    this.state.anime,
                    {
                        toValue: this.state.active ? 0 : 30,
                        duration: 200,
                        useNativeDriver: false

                    }),

                Animated.timing(
                    this.state.animHeight,
                    {
                        toValue: this.state.active ? variables.height / 1.2 : 0,
                        duration: 400,
                        useNativeDriver: false

                    }),
                    
                Animated.timing(this.state.popAnime, {
                    toValue: this.state.active ? 0.6 : 1,
                    duration: 300,
                    useNativeDriver: true
                }),

                // Animated.timing(
                //     this.state.spinValue,
                //     {
                //         toValue: this.state.active ? 1 : 0,
                //         duration: 400,
                //         useNativeDriver: true
                //     })

            ]).start();


        })
    }


    render() {

        let row = [];
        let col = [];

        for (let i = 0; i < invitations.length; i++) {
            const ele = invitations[i];
            col.push(<View key={i} style={styles.profile}>
                <Image style={[styles.img, globalStyles.primary_H_alignment]} source={ele.uri} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{ele.name}</Text>
                    <Text style={styles.profession}>{ele.followers} followers</Text>
                    <Text style={styles.profession}>{ele.address}</Text>
                    <Text style={styles.profession}>{ele.profession}</Text>
                </View>

                <View style={[globalStyles.primary_H_alignment]}>
                    <TouchableOpacity style={[styles.profileBtn, styles.accept]}>
                        <Text style={styles.acceptTxt}>Accept</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.profileBtn]}>
                        <Text style={styles.ignoreTxt}>Ignore</Text>
                    </TouchableOpacity>
                </View>

            </View>)

            if ((i + 1) % 3 === 0) {
                row.push(<View>{col}</View>)
                col = []
            }

        }
        return (
            <View style={styles.container}>
                <View style={[styles.header, globalStyles.secondary_H_alignment]}>
                    <Text style={styles.heading}>{en_us.invitations.invitations.toUpperCase()}</Text>
                </View>

               
                    <Animated.View style={[globalStyles.row, globalStyles.secondary_H_alignment, {maxHeight: this.state.anime}]}>
                        <Text style={styles.details}>
                            {en_us.invitations.youhave}
                        </Text>
                        <Text style={styles.data}> 22 </Text>
                        <Text style={styles.data}>{en_us.invitations.invitations}</Text>
                    </Animated.View>

                    <Animated.View style={[globalStyles.secondary_H_alignment,{maxHeight:this.state.anime}]}>
                        <Text style={styles.details}>{en_us.invitations.check}</Text>
                    </Animated.View>

                

                <View>
                    <Animated.View style={{ maxHeight: this.state.animHeight }}>
                        <ScrollView horizontal >
                            <View style={[globalStyles.row, globalStyles.secondary_H_alignment]}>
                                {row}
                            </View>

                        </ScrollView>
                    </Animated.View>
                </View>


                <View style={globalStyles.row}>
                    <View style={styles.btnView}>

                        <TouchableOpacity activeOpacity={variables.touch_opacity} style={[styles.btn, globalStyles.secondary_H_alignment]} onPress={() => this.activate()}>
                            <Text style={styles.data}>{this.state.active ? en_us.invitations.hide : en_us.invitations.show}</Text>

                            <Icon name={"md-chevron-down"} size={18} />
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Animated.Image source={inviteImg} style={[{
                            transform: [{ scale: this.state.popAnime }]

                        }
                        ]} />
                    </View>
                </View>
            </View>
        )
    }
}
