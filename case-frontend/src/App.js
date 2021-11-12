import { Button } from "@material-ui/core"
import { useState } from "react"
import CardTarot from "./Components/Card/CardTarot"
import cards from "./Data/Cards.json"
import { AppContainer, CardContainer, Header } from "./styled"


const App = () => {
  const [cardName, setCardName] =useState()
  const [inicio, setInicio] = useState(false)
  const [description, setDescription] = useState()
  const cardsList = cards.cards
  const baseUrlCard = cards.imagesUrl
  const backImageCard = cards.imageBackCard

  const onClickCard = (card, description) => {
    setCardName(card)
    setDescription(description)
  }

  const onClickIniciar = () => {
    setInicio(true)
    setCardName('')
    setDescription('')
    // shuffle(cardsList)
  }


  const allCards = cardsList.map((card) =>{
    return (
      <CardTarot key = {card.name}
        back={backImageCard}
        image={`${baseUrlCard}${card.image}`}
        name={card.name}
        onClickCard={()=>onClickCard(card.name, card.description)}
        inicio={inicio}
        clicked={cardName}
        description={card.description}
      />
    )
  })

  return (
    <AppContainer >
      <Header>
        <div>
          <Button
            onClick={onClickIniciar}
            variant="contained"
          >
            Iniciar
          </Button>
        </div>
        {cardName}<br></br>
        {description}
      </Header>
      <CardContainer>
        {allCards}
      </CardContainer>
    </AppContainer>
  );
}

export default App;
