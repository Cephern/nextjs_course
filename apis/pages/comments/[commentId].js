import { comments } from "../../data/comments";

export default function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  //   const comments = await fetch("http://localhost:4000/api/comments").then(
  //     (res) => res.json()
  //   );

  return {
    paths: comments.map((comment) => ({
      params: { commentId: `${comment.id}` },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //   const comments = await fetch("http://localhost:4000/api/comments").then(
  //     (res) => res.json()
  //   );

  const { commentId } = context.params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  console.log(comment);

  return { props: { comment } };
}
