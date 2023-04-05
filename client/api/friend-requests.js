import axios from "axios";

const url = "http://localhost:8080/api/v1/friend-requests";

export const fetchFriendRequests = (id) => axios.get(`${url}/${id}`);
export const sendFriendRequest = (id, friendId) => axios.post(`${url}/${id}`, { friendId });
export const acceptFriendRequest = (id, friendId) => axios.post(`${url}/${id}/accept`, { friendId });
export const declineFriendRequest = (id, friendId) => axios.post(`${url}/${id}/decline`, { friendId });