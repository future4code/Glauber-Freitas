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
import Loading from '../../components/Loading/Loading';

const PostsListPage = () => {
    useProtectedPage()
    const {setPost} = useContext(MyContext)
    const history = useHistory()
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts?page=1&size=20`)
    
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
            <PostForm
                getPosts={getPosts}
            />
            {postsList.length>0?postsList:<Loading/>}
        </ScreenContainer>
    );
}

export default PostsListPage;