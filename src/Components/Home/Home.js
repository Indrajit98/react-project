import React, { useEffect, useState } from "react";
import Friends from "../Friends/Friends";
import "./Home.css";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

//   console.log(friends);
  return (
    <div className="container">
      <div className="box">
        {friends.map((friend) => (
          <Friends friend={friend} key={friend.id}></Friends>
        ))}
      </div>
    </div>
  );
};

export default Home;
