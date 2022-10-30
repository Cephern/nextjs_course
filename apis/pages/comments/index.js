import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const data = await fetch("/api/comments").then((res) => res.json());

    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  const updateComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ text: "New Comment Text" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <br />
      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            {comment.id} {comment.text}
          </p>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
          <button onClick={() => updateComment(comment.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}
