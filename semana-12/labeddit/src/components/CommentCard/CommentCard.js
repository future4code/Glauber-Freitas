import { CardActionArea, CardMedia, Typography, IconButton, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import MyContext from '../../contexts/myContext';
import {CommentCardContainer,  CommentCardContent,FooterCardContainer , LikeCardContainer,CardHr} from "./styled"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import InsertCommentSharpIcon from '@material-ui/icons/InsertCommentSharp';
import {commentVote} from '../../services/post' 

const CommentCard = (props) => {
    console.log("comentario", props.comment)
    
    const handleDownVote = () => {
        const body = {direction:-1}
        console.log("body", body)
        commentVote(props.comment.id, body)
    }
    const handleUpVote = () => {
        const body = {direction:1}
        console.log("body", body)
        commentVote(props.comment.id, body)
    }
    return (
        <CommentCardContainer >
            {/* <CardActionArea> */}
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
                
            {/* </CardActionArea> */}
        </CommentCardContainer>
    );
}
export default CommentCard;