import React from 'react';
import { useParams } from 'react-router';
import CommentCard from '../../components/CommentCard/CommentCard';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { ScreenContainer } from '../LoginPage/style';

const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log("comentarios",postComments)
    const comments = postComments.map((comment) => {
        return (
            <CommentCard key={comment.id}
            userName={comment.username}
            body={comment.body}
            />
        )
    })
    return ( 
        <ScreenContainer>
            <h1>PostDetailPage</h1>
            {comments}
            
        </ScreenContainer>
    );
}

export default PostDetailPage;