 import "../style/Authors.css";

const Authors = ({ authorslist}) => {
  return (
    // author-container
    <div className="author-container">
      {authorslist.map((author) => (
        // author-card
        <div
          className="author-card"
          key={author.name}
        >
            {/* display name and image */}
          <h2>{author.name}</h2>
          <img src={author.image} style={{ height: "200px", width: "200px" }} />
          {/* list of books */}
          <ul>
            {author.books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Authors;