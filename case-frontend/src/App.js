import CardTarot from "./Components/Card/CardTarot"
import cards from "./Data/Cards.json"


const App = () => {
  const cardsList = cards.cards
  const baseUrlCard = cards.imagesUrl
  const backImageCard = cards.imageBackCard

  const allCards = cardsList.map((card) =>{
    return (
      <CardTarot key = {card.name}
        back={backImageCard}
        image={`${baseUrlCard}${card.image}`}
        name={card.name}
      />
    )
  })

  return (
    <div >
      {allCards}
    </div>
  );
}

export default App;
