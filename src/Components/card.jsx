import './card.css';  // Ensure card.css is imported

const Card = ({stat, title}) => {
  return (
    <div className="card"> {/* Use a valid HTML tag like <div> */}
      <h3 className="title">{title}</h3>
      <p>{stat}</p> {/* Use the valid <p> tag */}
    </div>
  );
};

export defaul