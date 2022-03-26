import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./FriendDetails.css"

const FriendDetails = () => {
    const {friendId}= useParams();
    const [friendDe, setFriendDe] = useState([]);
    const {id,title,body} =friendDe;
    useEffect(() => {
        const url=(`https://jsonplaceholder.typicode.com/posts/${friendId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriendDe(data))

    },[])
    
    return (
        <div className="friendsDetails">   
            <h5>Id: {id}</h5>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default FriendDetails;