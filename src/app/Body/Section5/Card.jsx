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
            className="rounded-lg text-2xl text-white"
            >
                <span className="text-[200px] font-bold">{item.word}</span>
            
          </div>
        ))}
      </div>
    );
};
  
export default Card