import axios from "axios";
import {BASE_URL} from "../constants/urls"
import useRequestData from '../hooks/useRequestData';

export const addPost = (body, clear) => {
    axios
        .post(`${BASE_URL}/posts`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            alert(res.data.message)
            clear()
            
        })
        .catch((err) => {
            console.log("erro", err)
            alert(err.data.message)
        })
}

export const addComment = (id, body, clear) => {
    axios
        .post(`${BASE_URL}/posts/${id}/comments`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            alert(res.data.message)
            clear()
           
        })
        .catch((err) => {
            console.log("erro", err)
            // alert(err.data.message)
        })
}
