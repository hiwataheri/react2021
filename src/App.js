import "./styles.css";
import React, { useState, useEffect } from "react";
import NoteTimeLine from "./NoteTimeLine";

function App() {
  const [notes, getNotes] = useState("");

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    fetch(
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
    )
      .then((res) => res.json())
      .then((data) => getNotes(data))
      .catch((err) => console.log(err));
  };
  return <NoteTimeLine notes={notes} />;
}
export default App;
