import { Component } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./cardStyle";
class Card extends Component<{name: string, text: string,id:string}> {
    render() {
        return (
        <View style={styles.card_container}>
            <Text style={styles.card_title}> {this.props.name}</Text>
            <Text style={styles.card_text}>{this.props.text}</Text>
            <TouchableOpacity  style={styles.card_button} onPress={()=>{
                Alert.alert(`${this.props.id} likedr`)
            }}>
                <Text  style={styles.card_button_text}>I LIKED</Text>
            </TouchableOpacity>
        </View>
        );
    }
}



export default Card;