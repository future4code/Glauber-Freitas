import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import {PostCardContainer,  PostCardContent } from "./styled"

const PostCard = (props) => {
    return (
        <PostCardContainer onClick={props.onClick}>
            <CardActionArea>
                <PostCardContent>
                    <Typography align={"center"}>
                        {props.userName}
                    </Typography>
                    <Typography align={"center"}>
                        {props.body}
                    </Typography>
                </PostCardContent>
                
            </CardActionArea>
        </PostCardContainer>
    );
}
export default PostCard;