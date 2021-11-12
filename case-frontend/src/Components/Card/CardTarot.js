import { CardActionArea, CardMedia } from '@material-ui/core';
import React from 'react';
import { CardContainer} from './styled';


const CardTarot = (props) => {
    
    return (
        <CardContainer>
            <CardActionArea>
                <CardMedia
                    back={props.back}
                    component={'img'}
                    alt ={props.name}
                    image={props.image}
                >
                </CardMedia>
            </CardActionArea>
            </CardContainer>
    );
}

export default CardTarot;