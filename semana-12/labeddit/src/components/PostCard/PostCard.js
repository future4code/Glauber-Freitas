import { Typography, IconButton, Button } from '@material-ui/core';
import React from 'react';
import {CardHr, PostCardContainer,  PostCardContent ,FooterCardContainer, LikeCardContainer} from "./styled"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import InsertCommentSharpIcon from '@material-ui/icons/InsertCommentSharp';
import {postVote} from '../../services/post'

const PostCard = (props) => {
    const handleDownVote = () => {
        const body = {direction:-1}
        console.log("body", body)
        postVote(props.post.id, body)
    }
    const handleUpVote = () => {
        const body = {direction:1}
        console.log("body", body)
        postVote(props.post.id, body)
    }
    return (
        <PostCardContainer >
            <PostCardContent >
                <Typography align={"center"} variant={"h5"}>
                    {props.post.title}
                </Typography>
                <Typography align={"center"} variant={"h6"}>
                    {props.post.username}
                </Typography>
                <CardHr />
                <Typography align={"center"} >
                    {props.post.body}
                </Typography>
                <CardHr />
            </PostCardContent>
            <FooterCardContainer>
                <LikeCardContainer>
                    <IconButton onClick={handleUpVote}>
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <p>{(props.post.voteSum===null)? 0 : props.post.voteSum}</p>
                    <IconButton onClick={handleDownVote}>
                        <ArrowDownwardIcon />
                    </IconButton >
                </LikeCardContainer>
                <Button onClick={props.onClick} variant="outlined" startIcon={<InsertCommentSharpIcon />}>
                    {(props.post.commentCount===null)?"Nenhum":props.post.commentCount} {(props.post.commentCount===null || props.post.commentCount==="1")?"Comentario":"Comentarios "}
                </Button>
            </FooterCardContainer>
        </PostCardContainer>
    );
}
export default PostCard;