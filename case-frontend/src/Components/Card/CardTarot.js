import { CardActionArea, CardMedia } from '@material-ui/core';
import React from 'react';
import { CardContainer} from './styled';


const CardTarot = (props) => {
    
    return (
        <CardContainer>
            <CardActionArea>
                <CardMedia
                    onClick={()=>props.onClickCard()}
                    back={props.back}
                    component={'img'}
                    alt ={props.name}
                    image={props.inicio?(props.clicked===props.name?props.image:props.back):props.image}
                    descrription={props.description}
                >
                </CardMedia>
            </CardActionArea>
            </CardContainer>
    );
}

export default CardTarot;