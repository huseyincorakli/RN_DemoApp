import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card_container:{
        backgroundColor: "white",
        margin: 10,
        borderWidth:1,
        borderColor:"gray",
        borderRadius: 10,
      },
      card_title:{
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        marginBottom: 3,
      },
      card_text:{
        fontSize: 18,
        margin: 10,
        marginTop: 3,
    
      },
     
      card_button:{
        backgroundColor: "#03adfc",
        alignItems: "center",
        padding: 10,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 9,
      },
      card_button_text:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      }
});