import Card from "./Card";

function column() {
  let cards = [
    { title: "Task", tags:['tag1', "tag2"], content: "Content" },
    { title: "Task", tags:['tag1', "tag2"], content: "Content" },
    { title: "Task", tags:['tag1', "tag2"], content: "Content" },
  ];

  const handleAddCard = () => {
    console.log("Adding card");
    cards.push({ title: "Task", tags:['tag1', "tag2"], content: "Content" });
    console.log(cards);
  };

  return (
    <div className="column">
      <div className="column-header">
        <h3>Column Title</h3>
      </div>
      <div className="column-cards">
        {cards.map((card, index) => (
          <Card title={card.title + index} tags={card.tags} content={card.content} />
        ))}
      </div>
      <button onClick={handleAddCard}> Add card</button>
    </div>
  );
}




export default column;