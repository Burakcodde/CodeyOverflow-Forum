import React from "react";
import { comments } from "./commentData";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  );
}

export default App;