import React, { useContext } from 'react';
import { useParams } from 'react-router';
import CommentCard from '../../components/CommentCard/CommentCard';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import MyContext from '../../contexts/myContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { PostCardContent, PostCardContainer, ScreenContainer } from './styled';
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';


const PostDetailPage = () => {
    const {userName, setUserName, bodyPost, setBodyPost} = useContext(MyContext)
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
            <PostCardContainer>
            <PostCardContent>
            <Typography align={"center"}>
                        CardOriginal
                    </Typography>
                    <Typography align={"center"}>
                        {userName}
                    </Typography>
                    <Typography align={"center"}>
                        {bodyPost}
                    </Typography>
                </PostCardContent>
                </PostCardContainer>
            {/* {comments.length > 0 ? {comments}:"Não existe nenhum comentario para esse poost"} */}
            {comments}
        </ScreenContainer>
    );
}

export default PostDetailPage;