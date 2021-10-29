import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

export const PostCardContainer = styled(Card)`
    width: 500px;
    margin:10px;
` 

export const PostCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`