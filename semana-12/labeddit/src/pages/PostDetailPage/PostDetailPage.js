import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import CommentCard from '../../components/CommentCard/CommentCard';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import MyContext from '../../contexts/myContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { ScreenContainer } from './styled';
import PostDetailForm from './PostDetailForm';


const PostDetailPage = () => {
    const {post} = useContext(MyContext)
    useProtectedPage()
    const [postDetails, setPostDetails] = useState()
    const params = useParams()
    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log("comentarios",postComments)
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
            <PostCard 
                post={post}
            />
            <PostDetailForm
                post={post}
            />
            {comments}
        </ScreenContainer>
    );
}

export default PostDetailPage;