//import { deleteComment } from "../api";
import CommentForms from "./CommentForm";

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  updateComment,
  activeComment,
  addComment,
  setActiveComment,
  parentId = 0,
  name,
  id,
  body,
  userID,
  createdAt,
  key
}) => {
  const fiveMinutes = 300000;
  const timeOk = new Date() - new Date(createdAt) > fiveMinutes;
  const doReply = Boolean(currentUserId);
  const doEdit = currentUserId === userID && !timeOk;
  const doDelete = currentUserId === userID && !timeOk;
  //const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReply =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === id;
  const isEdit =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === id;
  const replyId = parentId ? parentId :id;
  return (
    <div key={id} className="comment">
      <div className="comment-image-container">
        <img src="/profile.jpg" alt="logo" width={40} />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{name}</div>
          <div>{createdAt}</div> {/*can delete time*/}
        </div>
        {!isEdit && <div className="comment-text">{body}</div>}
        {isEdit && (
          <CommentForms
            submitLabel="Update"
            hasCancelButton
            initialText={body}
            handleSubmit={(text) => updateComment(text, id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {doReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {doEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {doDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReply && (
          <CommentForms
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                updateComment={updateComment}
                id={reply.id}
                parentId={reply.parentId}
                name={reply.name}
                  body={reply.body}
                  userID={reply.userID}
                  createdAt={reply.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
