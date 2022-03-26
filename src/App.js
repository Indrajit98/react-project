
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Comment from "./Components/Comment/Comment";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friend/:friendId" element={<FriendDetails />} />
          <Route path="/comment/commentDetails/:Id" element={<Comment/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
