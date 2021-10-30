import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import MyContext from '../../contexts/myContext';
import {CommentCardContainer,  CommentCardContent } from "./styled"

const CommentCard = (props) => {
    
    return (
        <CommentCardContainer >
            {/* <CardActionArea> */}
                <CommentCardContent>
                    <Typography align={"center"}>
                        {props.userName}
                    </Typography>
                    <Typography align={"center"}>
                        {props.body}
                    </Typography>
                </CommentCardContent>
                
            {/* </CardActionArea> */}
        </CommentCardContainer>
    );
}
export default CommentCard;