import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Picker,
} from "react-native";


export default function dashboardUI({
    visible, 
    onChange,
    data,
}) {
    const [item, showDate] = useState(data)

    return (
        <FlatList
          data={item}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.entry}</Text>
            </View>
          )}
        />
      );
}
  
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      padding: 20,
      marginBottom: 10,
      backgroundColor: '#f8f8f8',
      borderRadius: 5,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 16,
    },
    text: {
      fontSize: 18,
    },
  });
  