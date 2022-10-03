import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/themed";
import { db, auth } from "../firebase";
import { AntDesign, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";


const Home = ({navigation}) => {

   const [ chats, setChats ] = useState([]);
   
   const signOutUser = () => {
      auth.signOut().then(() => {
         navigation.replace("Login");
      });
   };

   useEffect(() => {
      const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
         setChats(
            snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
         })))
      )
      );
      return unsubscribe;
   }, [])


   useLayoutEffect(() => {
        navigation.setOptions({
         title: "Freelancer",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black" },
         headerTintColor: "black",
         headerLeft: () => ( 
         <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
            </TouchableOpacity>
         </View>
         ),
         headerRight: () => (
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
                marginRight: 20,
            }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign color="black" name="camerao" size={24} />
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={() => navigation.navigate("AddChat")} 
                        activeOpacity={0.5}
                >
                    <AntDesign color="black" name="edit" size={24} />
                </TouchableOpacity>
            </View>
         ),
        });
   }, [navigation]);

   const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
          id,
          chatName,
        });
   };

   return (
       <SafeAreaView>
          <ScrollView style={styles.container}>
            {chats.map(({id, data: { chatName }}) => (
                  <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
            ))}
          </ScrollView>
       </SafeAreaView>
   );
};

export default Home;

const styles = StyleSheet.create({
   container: {
      height: "100%",
   },
});


