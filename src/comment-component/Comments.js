import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const Comments = ({ currentUserId, taskId }) => {
  const [open, setOpen] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  const rootComments = Object.values(backendComments).filter(
    (backendComment) => backendComment.parentId === 0 && backendComment.taskId === taskId
  );

  const CloseIconStyle = {
    backgroundColor: "red",
    margin: "-100px 0 0 420px",
    padding: "3px",
    cursor: "pointer",
    borderRadius: "15px",
  };

  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (text, parentId) => {
    console.log("addNewComment", text, parentId);
    const data = {
      taskId:taskId,
      name: "Kavishka",
      body: text,
      userID: currentUserId,
      parentId: parentId,
    };
    const url = "https://localhost:44366/api/Comment/comment";
    axios
      .post(url, data)
      .then((result) => {
        console.log("Hello", result);
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        setActiveComment(null);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure that you want to delete comment..?")) {
      const data = {
        id: commentId,
      };
      const url = `https://localhost:44366/api/Comment/${commentId}`;
      axios
        .delete(url, data)
        .then((result) => {
          console.log("Hello", result);
          let data = result.data;
          if (!Array.isArray(data)) data = [data];
          setBackendComments(data);
        })
        .catch((error) => {
          alert("Try again..!");
          console.log(error);
        });
    }
  };

  const updateComment = (text, commentId) => {
    const data = {
      id: commentId,
      body: text,
    };
    const url = "https://localhost:44366/api/Comment/edit";
    axios
      .post(url, data)
      .then((result) => {
        console.log("Hello", result);
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        setActiveComment(null);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });
  };

  useEffect(() => {
    const url = `https://localhost:44366/api/Comment`;
    axios
      .get(url)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        console.log("Hello", result.data);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            overflowY: "scroll",
            minHeight: "300px",
            maxHeight: "580px",
            p: 4,
          }}
        >
          <CloseIcon style={CloseIconStyle} onClick={handleClose}></CloseIcon>
          <div className="comments">
            {/*<h3 className="comment-title">Comments</h3>*/}
            <div className="comment-form-title">Add new comment</div>
            <CommentForm submitLabel="Add" handleSubmit={addComment} />
            <br />
            <div className="comment-container">
              {rootComments.map((rootComment) => (
                <Comment
                  //key={backendComments.id}
                  //comment={rootComment}
                  replies={getReplies(rootComment.id)}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  currentUserId={currentUserId}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  id={rootComment.id}
                  name={rootComment.name}
                  body={rootComment.body}
                  userID={rootComment.userID}
                  parentId={rootComment.parentId}
                  createdAt={rootComment.createdAt}
                />
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default Comments;
