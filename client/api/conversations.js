import axios from "axios";

const url = "http://localhost:8080/api/v1/conversations";

export const fetchConversations = (id) => axios.get(`${url}/${id}`);
export const createConversation = (id, conversation) => axios.post(`${url}/${id}`, conversation);
