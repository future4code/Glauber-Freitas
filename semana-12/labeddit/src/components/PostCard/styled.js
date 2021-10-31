import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

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
export const CardHr = styled.hr`
    width: 280px;
`

export const FooterCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`