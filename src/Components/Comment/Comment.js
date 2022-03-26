import React, { useEffect, useState } from "react";
import "./Comment.css";
import CommentDetails from "../CommentDetails/CommentDetails";
import Image from "../Image/Image";

const Comment = () => {
  const [com, setCom] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/`)
      .then((res) => res.json())
      .then((data) => setCom(data));
  }, []);
  
  const comment = com.slice(0, 10);
  // console.log(Images);

  return (
    <div className="container">
      <div className="comment">
        {comment.map((comment) => (
          <CommentDetails comment={comment} key={comment.id}></CommentDetails>
        ))}
        
      </div>
    </div>
  );
};

export default Comment;
