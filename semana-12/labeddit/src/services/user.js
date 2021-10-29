import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToPostsListPage } from "../routes/coordinator";

export const login = (body, clear, history, setLogButtonText) => {
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToPostsListPage(history)
            setLogButtonText("Logout")
            console.log(res)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setLogButtonText) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToPostsListPage(history)
            setLogButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}