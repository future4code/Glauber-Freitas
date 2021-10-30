import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

export const CommentCardContainer = styled(Card)`
    width: 300px;
    margin:10px;
` 

export const CommentCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`