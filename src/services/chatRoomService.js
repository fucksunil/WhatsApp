import {API, graphqlOperation, Auth} from 'aws-amplify'

export const getCommonChatRoomWithUser = async (userID) => {

    const authUser = await Auth.currentAuthenticatedUser();

    // get all chat romm of user1
    const response = await API.graphql(
        graphqlOperation(listChatRooms, {id: authUser.attributes.sub})
        );

        const chatRooms = response.data?.getUser?.ChatRooms?.items || [];

        // console.log(chatRooms[0].chatRoom.users.items[0]);
        const chatRoom = chatRooms.find((chatRoomItem)=>{
          return (
            chatRoomItem.chatRoom.users.items.length === 2 &&
            chatRoomItem.chatRoom.users.items.some(
              (userItem) => userItem.user.id === userID
            )
          );
        });
       return chatRoom;

    // get all chat romms of user2

    // remove chat romms with more than 2 users

    // get the common chqt romms
}

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users{
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;