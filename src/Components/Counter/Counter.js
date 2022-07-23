import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import "./counter.scss";
import { CommentState } from "../../Context/Context";

function Counter({ votes, userId }) {
  const {commentsState, commentsDispatch } = CommentState();
  console.log(commentsState);
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      className="counter"
    >
      <Button
        key="one"
        startIcon={<AddCircleOutlineIcon />}
        className="counter-cta"
        onClick={() => commentsDispatch({
          type:'UP_VOTE_COMMENT',
          payload:userId
        })}
      />
      <Typography className="counter-text">{votes}</Typography>
      <Button
        key="two"
        startIcon={<RemoveCircleOutlineIcon />}
        className="counter-cta"
        onClick={() => commentsDispatch({
          type:'DOWN_VOTE_COMMENT',
          payload:userId
        })}
      />
    </ButtonGroup>
  );
}

export default Counter;
