import { useState } from "react"
import CardTarot from "./Components/Card/CardTarot"
import cards from "./Data/Cards.json"
import { AppContainer, CardContainer } from "./styled"


const App = () => {
  const [cardName, setCardName] =useState()
  const [inicio, setInicio] = useState(true)
  const cardsList = cards.cards
  const baseUrlCard = cards.imagesUrl
  const backImageCard = cards.imageBackCard

  const onClickCard = (card) => {
    setCardName(card)
  }

  const allCards = cardsList.map((card) =>{
    return (
      <CardTarot key = {card.name}
        back={backImageCard}
        image={`${baseUrlCard}${card.image}`}
        name={card.name}
        onClickCard={()=>onClickCard(card.name)}
        inicio={inicio}
        clicked={cardName}
      />
    )
  })

  return (
    <AppContainer >
      <CardContainer>
        {allCards}
      </CardContainer>
    </AppContainer>
  );
}

export default App;
