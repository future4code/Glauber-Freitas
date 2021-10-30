import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
`
export const PostCardContainer = styled(Card)`
    width: 300px;
    margin:10px;
` 

export const PostCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`