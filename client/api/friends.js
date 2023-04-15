import axios from 'axios';

const url = `${process.env.DEVELOPEMENT_SERVER}/api/v1/friends`;

export const fetchFriends = (id) => axios.get(`${url}/${id}`);
export const addFriend = (id, friendId) => axios.post(`${url}/${id}`, { friendId });
export const removeFriend = (id, friendId) => axios.delete(`${url}/${id}`, { data: { friendId } });