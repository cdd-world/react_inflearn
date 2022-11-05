import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "CDD",
        comment: "I'm Videographer"
    },
    {
        name: "Neo Vincent",
        comment: "Thank you Corona"
    },
    {
        name: "ION",
        comment: "No Cap"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    )
}

export default CommentList