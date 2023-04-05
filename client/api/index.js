import { fetchUsers, fetchUser, createUser, updateUser } from "./users";
import { fetchFriends, addFriend, removeFriend } from "./friends";
import { fetchFriendRequests, sendFriendRequest, acceptFriendRequest, declineFriendRequest } from "./friend-requests";
import { fetchConversations, createConversation } from "./conversations";

export default {
    fetchUsers,
    fetchUser,
    createUser,
    updateUser,

    fetchFriends,
    addFriend,
    removeFriend,

    fetchFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,

    fetchConversations,
    createConversation,
};