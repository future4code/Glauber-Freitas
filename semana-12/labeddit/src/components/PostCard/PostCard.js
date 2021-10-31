import { CardActionArea, CardMedia, Typography, IconButton, Button } from '@material-ui/core';
import React from 'react';
import {CardHr, PostCardContainer,  PostCardContent ,FooterCardContainer} from "./styled"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import InsertCommentSharpIcon from '@material-ui/icons/InsertCommentSharp';
// import { Button } from '@mui/material';

const PostCard = (props) => {
    return (
        <PostCardContainer >
            <CardActionArea onClick={props.onClick}>
            
                <PostCardContent >
                    
                        <Typography align={"center"} variant={"h6"}>
                            {props.post.title}
                        </Typography>
                        <Typography align={"center"} variant={"h5"}>
                            {props.post.username}
                        </Typography>
                        <CardHr />
                        <Typography align={"center"} >
                            {props.post.body}
                        </Typography>
                        <CardHr />
                        
                    
                    
                   
                </PostCardContent>
                
                </CardActionArea>
                <FooterCardContainer>
                    <IconButton>
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <p>{props.post.voteSum}</p>
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <Button variant="outlined" startIcon={<InsertCommentSharpIcon />}>
        {props.post.commentCount} Comentarios
      </Button>
                    </FooterCardContainer>
        </PostCardContainer>
    );
}
export default PostCard;