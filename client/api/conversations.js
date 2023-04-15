import axios from "axios";

const url = `${process.env.DEVELOPEMENT_SERVER}/api/v1/conversations`;

export const fetchConversations = (id) => axios.get(`${url}/${id}`);
export const createConversation = (id, conversation) => axios.post(`${url}/${id}`, conversation);
