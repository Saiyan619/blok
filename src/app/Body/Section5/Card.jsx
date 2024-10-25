import "./card.scss"
const names = [
    { word: "How", id: 1 },
    { word: "much", id: 2 },
    { word: "is", id: 3 },
    { word: "your", id: 4 },
    { word: "time", id: 5 },
    { word: "worth", id: 6 },
    { word: "?", id: 7 },
  ];
  
  const Card = () => {
    return (
      <div className="flex items-center gap-16">
        {names.map((item) => (
          <div
            key={item.id}
            className=""
            >
                <span className="scroll_text">{item.word}</span>
            
          </div>
        ))}
      </div>
    );
};
  
export default Card