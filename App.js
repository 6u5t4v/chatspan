import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import { Header, Message } from "./src/components";

const users = [
  {
    id: "u1",
    me: true,
    name: "Vadim",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  },
  {
    id: "u2",
    me: false,
    name: "Elon Musk",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
  },
];

const messages = [
  {
    id: "1",
    content: "Hello world! This is a long message that needs to be truncated",
    createdAt: "2020-10-03T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "2",
    content: "I am Elon Musk",
    createdAt: "2020-10-03T15:40:00.000Z",
    user: users[1],
  },
  {
    id: "3",
    content: "Omg you are so cool, jk I am cooler",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "4",
    content: "Ohahahaha get trolled biiitch",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[1],
  },
  {
    id: "5",
    content: "i very very long message written by the other member of this conversation that needs to be truncated",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[1],
  },
  {
    id: "6",
    content: "goofy aah mf bruh moment lmao xD xD xD a very very very long funny message that needs to be truncated",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "7",
    content: "short",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
];



// type MessageProps = {
//   message: {
//     id: string;
//     content: string;
//     createdAt: string;
//     user: UserProps;
//   };
// };

// const Message = ({ message }) => {
//   const content = message.content;

//   return (
//     <View style={message.user.me ? styles.messageFromMeContainer : styles.messageFromOtherContainer}>
//       <Image source={{ uri: message.user.imageUri }} style={styles.image} />
//       <Text style={[{ flex: 1, color: 'white', marginHorizontal: 5 },
//       content.length < 50 ? { alignSelf: 'center' } : { alignSelf: 'flex-start' },
//       message.user.me ? { textAlign: 'right' } : {}]}>{content}</Text>
//     </View>
//   );
// };

export default function App() {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header conversation={users[1]} />

      <FlatList
        style={{ marginHorizontal: 10 }}
        data={messages}
        renderItem={(item) => {
          const prevItem = messages[item.index - 1];

          if (prevItem && prevItem.user.id === item.item.user.id) {
            return (
              <>
                <View style={{ marginTop: 2 }} />
                <Message message={item.item} />
              </>
            )
          } else {
            return (
              <>
                <View style={{ marginTop: 10 }} />
                <Message message={item.item} />
              </>)
          }
        }}
        keyExtractor={item => item.id} />

      <View style={styles.bottomContainer}>
        {/* Button that opens camera roll */}
        <Pressable
          style={styles.buttonContainer}
          onPress={() => alert("Open camera roll")}
        >
          <FontAwesome name="camera" size={18} color="#25292e" />
        </Pressable>
        {/* TextInput with a bottom to select an emoji */}
        <View style={styles.messageInput}>
          <TextInput
            autoFocus
            maxLength={250}
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Send a message"
          />

          <Pressable onPress={() => alert("Open emoji picker")}>
            <MaterialIcons name="emoji-emotions" size={24} />
          </Pressable>
        </View>

        {/* Send bottom */}
        <Pressable
          style={styles.buttonContainer}
          onPress={() => alert("Send message")}
        >
          <Ionicons name="send" size={24} color="black" />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "100%",
  },
  messageFromOtherContainer: {
    flexDirection: "row",
    backgroundColor: "#8c8b8b",
    borderRadius: 10,
    padding: 10,
  },
  messageFromMeContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    backgroundColor: "#4287f5",
    borderRadius: 10,
    padding: 10,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 15,
    backgroundColor: "#bdbebf",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: "#f2f4f5",
    position: "absolute",
    bottom: 0,
  },
  input: {
    height: 40,
    width: "100%",
    marginRight: 12,
    flex: 1,
    color: "#f2f4f5"
  },
});
