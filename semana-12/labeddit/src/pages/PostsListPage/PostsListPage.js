import React from 'react';
import { LogoImage, ScreenContainer } from '../LoginPage/style';
import logo2 from "../../assets/Logo2.png"
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router';
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls";
import PostCard from '../../components/PostCard/PostCard';
import { goToPostDetailPage } from '../../routes/coordinator';

const PostsListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
    const onClickPost = (id) => {
        goToPostDetailPage(history, id)
    }

    const postsList = posts.map((post) => {
        return(
            <PostCard key={post.id}
                userName={post.username}
                body={post.body}
                onClick={() => onClickPost(post.id)}
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