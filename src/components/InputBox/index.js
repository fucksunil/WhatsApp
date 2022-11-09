import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import {createMessage, updateChatRoom} from '../../graphql/mutations'


const InputBox = ({chatroom}) => {
    // console.log(chatroomID)
    
    const [text, setText] = useState('');

    const onSend = async () => {
        console.warn('Sending a new message : ', text)

        const authUser = await Auth.currentAuthenticatedUser();

        const newMessage = {
            chatroomID: chatroom.id,
            text,
            userID: authUser.attributes.sub,
        }

        const newMessageData = await API.graphql(graphqlOperation(
            createMessage, {input: newMessage}
        ))

        setText('')

        //set the new message as LastMessage of the ChatRoom
        await API.graphql(
            graphqlOperation(updateChatRoom, {
              input: {
                _version: chatroom._version,
                chatRoomLastMessageId: newMessageData.data.createMessage.id,
                id: chatroom.id,
              },
            })
          );
    }
    
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
        {/* {Icon} */}
        <AntDesign name='plus' size={24} color="royalblue" />

        {/* Text Input */}
        <TextInput value={text} onChangeText={setText} style={styles.input} placeholder='type your message...' />

        {/* Icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name="send" size={24} color="white" />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor:'lightgray',
        borderWidth: StyleSheet.hairlineWidth,

    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 30,
        overflow: 'hidden'
    }
});

export default InputBox