import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToPostsListPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            goToPostsListPage(history)
        }
    },[history])
}

export default useUnprotectedPage;