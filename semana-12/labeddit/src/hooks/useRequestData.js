import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    useEffect(() => {
        axios
            .get(url, {
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) => {
                console.log("data",res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log("ocorreu um erro, tente novamente", err)
            })
    }, [url])
    return (data);
}
export default useRequestData;