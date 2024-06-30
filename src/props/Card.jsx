const Card = ({ isOpen, onClick, name, repoLink, webLink, para }) => {
  if (!isOpen) return null;

  return (
    <div className={isOpen ? "appear" : null} onMouseLeave={onClick}>
      {repoLink !== "#" ? (
        <a href={repoLink} target="_blank" rel="noreferrer">
          Repository
        </a>
      ) : null}
      <a href={webLink} target="_blank" rel="noreferrer">
        {name}
      </a>
      <p>{para}</p>
    </div>
  );
};
export default Card;
