import { Typography, IconButton } from '@material-ui/core';
import React from 'react';
import {CommentCardContainer,  CommentCardContent,FooterCardContainer , LikeCardContainer,CardHr} from "./styled"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {commentVote} from '../../services/post' 

const CommentCard = (props) => {
    const handleDownVote = () => {
        const body = {direction:-1}
        commentVote(props.comment.id, body)
    }
    const handleUpVote = () => {
        const body = {direction:1}
        commentVote(props.comment.id, body)
    }
    return (
        <CommentCardContainer >
                <CommentCardContent>
                    <Typography align={"center"}>
                        {props.comment.username}
                    </Typography>
                    <CardHr/>
                    <Typography align={"center"}>
                        {props.comment.body}
                    </Typography>
                </CommentCardContent>
                <CardHr/>
                <FooterCardContainer>
                <LikeCardContainer>
                    <IconButton onClick={handleUpVote}>
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <p>{(props.comment.voteSum===null)?0:props.comment.voteSum}</p>
                    <IconButton onClick={handleDownVote}>
                        <ArrowDownwardIcon />
                    </IconButton>
                </LikeCardContainer>
            </FooterCardContainer>
        </CommentCardContainer>
    );
}
export default CommentCard;