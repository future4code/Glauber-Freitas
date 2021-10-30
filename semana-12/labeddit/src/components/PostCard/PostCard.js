import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import {CardHr, PostCardContainer,  PostCardContent } from "./styled"

const PostCard = (props) => {
    return (
        <PostCardContainer onClick={props.onClick}>
            <CardActionArea>
                <PostCardContent>
                    <Typography align={"center"} variant={"h5"}>
                        {props.userName}
                    </Typography>
                    <CardHr />
                    <Typography align={"center"} >
                        {props.body}
                    </Typography>
                    <CardHr />
                </PostCardContent>
                
            </CardActionArea>
        </PostCardContainer>
    );
}
export default PostCard;