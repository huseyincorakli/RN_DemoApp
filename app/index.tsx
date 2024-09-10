import { useState } from "react";
import { Button, Text, View ,StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./card";

export default function Index() {
  const obj = [
    {name: "Eddard Stark", text: "Winter is coming", id: "aa"},
    {name: "Arya Stark", text: "I'm a girl", id: "xx"},
    {name: "Daenerys Targaryen", text: "I'm the dragon", id: "cc"},
    {name: "Tyrion Lannister", text: "I'm a dwarf", id: "dd"},
    {name: "Cersei Lannister", text: "I'm a queen", id: "ee"},
  ]
  return (
    <SafeAreaView style={styles.container}>
     {obj.map((item)=>{
      return(
        <View>
          <Card name={item.name} text={item.text} id={item.id} key={item.id}/>
        </View>
      )
     })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});