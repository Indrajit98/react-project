import "./commentDetails.css"

const CommentDetails = (props) => {
    const {id,name,email,body} = props.comment; 
    // console.log(props)   
    return (
        <div className="commentDetails">
            <h5>ID: {id}</h5>
            <p>Name: {name}</p>
            <p>Email:{email}</p>
            <p>{body}</p>  
        </div>
        
    );
};
export default CommentDetails;
