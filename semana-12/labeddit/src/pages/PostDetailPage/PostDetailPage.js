import React, { useContext } from 'react';
import { useParams } from 'react-router';
import CommentCard from '../../components/CommentCard/CommentCard';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import MyContext from '../../contexts/myContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { ScreenContainer } from './styled';
import PostDetailForm from './PostDetailForm';
import { LogoImage } from '../PostsListPage/style';
import logo2 from "../../assets/Logo2.png"


const PostDetailPage = () => {
    const {post} = useContext(MyContext)
    useProtectedPage()
    const params = useParams()
    const [postComments, getPostComents] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const comments = postComments.map((comment) => {
        return (
            <CommentCard key={comment.id}
            userName={comment.username}
            body={comment.body}
            comment={comment}
            />
        )
    })
    return ( 
        <ScreenContainer>
            <LogoImage src={logo2}/>
            <PostCard 
                post={post}
            />
            <PostDetailForm
                getPostComents={getPostComents}
                post={post}
            />
            {comments}
        </ScreenContainer>
    );
}

export default PostDetailPage;