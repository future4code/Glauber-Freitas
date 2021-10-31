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
import PostForm from './PostForm';

const PostsListPage = () => {
    const {setPost} = useContext(MyContext)
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts?page=1&size=20`)
    console.log("posts", posts)
    
    const onClickPost = (id, post) => {
        goToPostDetailPage(history, id)
        setPost(post)
    }

    const postsList = posts.map((post) => {
        return(
            <PostCard key={post.id}
                post={post}
                onClick={() => onClickPost(post.id, post)}
            />
        )
    })

    return ( 
        <ScreenContainer>
            <LogoImage src={logo2}/>
            <PostForm/>
            {postsList}
        </ScreenContainer>
    );
}

export default PostsListPage;