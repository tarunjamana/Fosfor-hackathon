import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Typography from '@mui/material/Typography';
import {timeSince} from '../../HelperFuncs/timeSinceDate';
import './singlecomment.scss';
import Counter from '../Counter/Counter';

function SingleComment({comment}) {
  return (

      <Box sx={{ minWidth: 275,maxWidth:520 }}  className="comment" >
      <Card variant="outlined" className="comment-card">
      <CardContent>
        <Stack direction="row" spacing={2}>
        <Counter votes={comment.votes} />
        <Stack direction="column">
        <Stack direction="row" spacing={2} className="comment-stack">
        <Typography variant="h5" className="comment-username" component="div">
        {comment.userName}
      </Typography>
      <Typography  color="text.secondary" className="comment-createdAt">
        {timeSince(comment.createdAt)}
      </Typography>
      <Button size="small" className="comment-reply-btn" startIcon={<ReplyIcon/>}>
        Reply
      </Button>
        </Stack>
      <Typography variant="body2" className="comment-body">
        {comment.body}
      </Typography>
        </Stack>
        </Stack>
    </CardContent>
      </Card>
      </Box>
  
  )
}

export default SingleComment