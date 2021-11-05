import axios from "axios";
import {BASE_URL} from "../constants/urls"


const header = {
    headers:{
        Authorization: localStorage.getItem("token")
    }
}

export const addPost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            alert(res.data)
            clear()
            setIsLoading(false)
            
        })
        .catch((err) => {
            console.log("erro", err)
            alert(err.data)
            setIsLoading(false)
        })
}

export const addComment = (id, body, clear, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/posts/${id}/comments`, body, header)
        .then((res) => {
            alert(res.data)
            clear()
            setIsLoading(false)
        })
        .catch((err) => {
            console.log("erro", err)
            alert(err.data)
            setIsLoading(false)
        })
}

export const postVote = (id, body) => {
    axios
        .put(`${BASE_URL}/posts/${id}/votes`, body, header)
        .then((res) => {
            alert("Voto confirmado!")
        })
        .catch((err) => {
            console.log(err)
            alert(err.data)
        })
}

export const commentVote = (id, body) => {
    axios
        .put(`${BASE_URL}/comments/${id}/votes`, body, header)
        .then((res) => {
            alert("Voto confirmado!")
        })
        .catch((err) => {
            console.log(err)
            alert(err.data)
        })
}
