import React from 'react';
import {CommentState} from '../Context/Context';
import SingleComment from './SingleComment/SingleComment';

function Comments() {
    const { commentsState,commentsDispatch} = CommentState();
    console.log(commentsState);
  return (
    <div>
        {commentsState.map(comment =>{
            return <SingleComment key={comment.id} comment={comment}/>   
        })}
    </div>

  )
}

export default Comments