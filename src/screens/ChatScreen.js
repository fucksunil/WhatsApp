<<<<<<< HEAD
import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import bg from "../../assets/images/BG.png";
import Message from '../components/Message';
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox';

const ChatScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={styles.list}
                    inverted
                />
                <InputBox />

            </ImageBackground>
        </KeyboardAvoidingView>
=======
import { Text, View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import bg from "../../assets/images/BG.png";
import Message from '../components/Message';
import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
                data={messages}
                renderItem={({item})=> <Message message={item} />}
                style={styles.list} 
                inverted/>
        </ImageBackground>
>>>>>>> 3d5e5fd84a3fcfa4b005602ad03be81d6d0a83f7
    )

}

const styles = StyleSheet.create({
    bg: {
<<<<<<< HEAD
        flex: 1
=======
        flex:1
>>>>>>> 3d5e5fd84a3fcfa4b005602ad03be81d6d0a83f7
    },
    list: {
        padding: 10,
    }
})
export default ChatScreen;