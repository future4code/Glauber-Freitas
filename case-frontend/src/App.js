import { Button } from "@material-ui/core"
import { useState } from "react"
import CardTarot from "./Components/Card/CardTarot"
import cards from "./Data/Cards.json"
import { AppContainer, ButtonContainer, CardContainer, Header } from "./styled"


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
    shuffle(cardsList)
  }

  const shuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck
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
        <ButtonContainer>
          <Button
            onClick={onClickIniciar}
            variant="contained"
          >
            Iniciar
          </Button>
        </ButtonContainer>
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
