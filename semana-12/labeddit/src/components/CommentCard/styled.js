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
    padding: 10px;
`
export const CardHr = styled.hr`
    width: 280px;
    align: center;
`

export const FooterCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0px;
`

export const LikeCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`