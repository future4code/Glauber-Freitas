import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    
    const header = {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }

    useEffect(() =>{
        getPost()
    },[url])
    
    const getPost = () => {
        axios
            .get(url, header)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert("ocorreu um erro, tente novamente")
            })
    }
    return [data, getPost];
}
export default useRequestData;