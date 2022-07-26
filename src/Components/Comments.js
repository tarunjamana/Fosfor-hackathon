import React from 'react';
import {CommentState} from '../Context/Context';
import SingleComment from './SingleComment/SingleComment';

function Comments() {
    const {commentsState} = CommentState();
  return (
    <div>
        {commentsState.map(comment =>{
            return <SingleComment key={comment.id} comment={comment}/>   
        })}
    </div>

  )
}

export default Comments