import { useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";


const AddChat = ({ navigation }) => {
    const [ input, setInput ] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add A New Proposal",
            headerBackTitle: "Offers",
        });
    }, [navigation]);

    const createChat = async () => {
        await db
        .collection('chats').add({
            chatName: input,
        }).then(() => {
            navigation.goBack();
        }).catch(error => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input 
                 placeholder="The Title"
                 value={input}
                 onChangeText={text => setInput(text)}
                 onSubmitEditing={createChat}
                 leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black"/>
                 }
            />
            <Button onPress={createChat} title="Create new Offer"/>
        </View>
    );
};

export default AddChat;

const styles = StyleSheet.create({
    container: {
       backgroundColor: "white",
       padding: 30,
       height: "100%",
    },
});


