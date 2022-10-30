import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  if (req.method === "GET") {
    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    const index = comments.findIndex(
      (comment) => comment.id === Number(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json({ comment });
  } else if (req.method === "PATCH") {
    // comments.map((comment) => {
    //   if (comment.id === commentId) {
    //     comment.text = req.body.text;
    //   }
    // });

    const index = comments.findIndex(
      (comment) => comment.id === Number(commentId)
    );
    comments[index].text = req.body.text;

    res.status(200).json({ comments });
  }
}
