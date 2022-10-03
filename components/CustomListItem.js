import { Text, View, StyleSheet } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";


const CustomListItem = ({ id, chatName, enterChat }) => {

    

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar 
               rounded
               source={{
                uri:
                  "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
               }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Information
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
} 

export default CustomListItem;

const styles = StyleSheet.create({});

