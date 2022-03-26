import { Link } from "react-router-dom";
import "./Friends.css";

const Friends = (props) => {
  const { id, title } = props.friend;

//   console.log(props);

  return (
    <div className="friends">
      <h3>Friend Id:{id}</h3>
      <p>title: {title}</p>
      <div className="seeMore">
        <Link to={`friend/${id}`}>seemore</Link>
      </div>
      <div className="button">
        <Link to={`/comment/commentDetails/${id}`}>
          <button>comment</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Friends;
