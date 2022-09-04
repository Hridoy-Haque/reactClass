const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const year = date.getFullYear();

function Card(props) {
  const { todoTitle, todoDesc } = props; // destructur
  return (
    <div>
      <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDesc">{todoDesc}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + year}</p>
      </div>
    </div>
  );
}

export default Card;
