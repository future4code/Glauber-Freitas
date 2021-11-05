import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

export const PostCardContainer = styled(Card)`
    width: 350px;
    margin:10px;
    padding: 5px;
` 

export const PostCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 5px
`
export const CardHr = styled.hr`
    width: 340px;
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