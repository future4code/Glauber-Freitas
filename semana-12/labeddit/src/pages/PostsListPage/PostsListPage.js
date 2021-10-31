import React, { useContext } from 'react';
import { LogoImage, ScreenContainer } from '../LoginPage/style';
import logo2 from "../../assets/Logo2.png"
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router';
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls";
import PostCard from '../../components/PostCard/PostCard';
import { goToPostDetailPage } from '../../routes/coordinator';
import MyContext from '../../contexts/myContext';

const PostsListPage = () => {
    const {userName, setUserName, bodyPost, setBodyPost} = useContext(MyContext)
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log("posts", posts)
    
    const onClickPost = (id, userName, body) => {
        goToPostDetailPage(history, id)
        setUserName(userName)
        setBodyPost(body)
    }

    const postsList = posts.map((post) => {
        return(
            <PostCard key={post.id}
                post={post}
                onClick={() => onClickPost(post.id, post.username, post.body)}
            />
        )
    })

    return ( 
        <ScreenContainer>
            <LogoImage src={logo2}/>
            {postsList}
        </ScreenContainer>
    );
}

export default PostsListPage;