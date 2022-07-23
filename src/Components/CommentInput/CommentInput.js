import React, { useState } from "react";
import "./commentinput.scss";
import {CommentState} from '../../Context/Context';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function CommentInput() {
  const [comment, setComment] = useState("");
  const {commentsDispatch} = CommentState();

  return (
    <Box sx={{ minWidth: 275, maxWidth: 520 }} className="comment-input">
      <Card variant="outlined" className="comment-card">
        <CardContent>
          <Stack direction="column">
            <TextField
              fullWidth
              placeholder="Add a comment..."
              className="comment-input-text"
              id="fullWidth"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "12px",
              }}
            >
              <Button
                variant="contained"
                size="small"
                type="submit"
                className="comment-input-btn"
                disabled={comment === ""}
                onClick={() => commentsDispatch({
                    type:'SET_COMMENT',
                    payload: {
                        id:Math.random().toString(36).substr(2, 9),
                        body:comment,
                        userId:"1",
                        votes:0,
                        userName:"Tarun Jamana",
                        createdAt:new Date()
                    }
                })}
              >
                Send
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CommentInput;
