import react from "react";

const NotTimeLinen = ({ notes }) => {
  console.log(notes);

  if (notes.length === 0) return "Loading...";

  return notes?.map((note, index) => {
    return (
      <div>
        <h3>{note.commit.author.name}</h3>
        <p>{note.author.id}</p>
      </div>
    );
  });
};
export default NotTimeLinen;
