import React from 'react';
import './reply.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Typography from '@mui/material/Typography';
import {timeSince} from '../../HelperFuncs/timeSinceDate';
import Counter from '../Counter/Counter';

function Reply({reply}) {
  return (
    <Box sx={{ minWidth: 250,maxWidth:480 }}  className="reply" >
    <Card variant="outlined" className="reply-card">
    <CardContent>
      <Stack direction="row" spacing={2}>
      <Counter votes={reply.votes} />
      <Stack direction="column">
      <Stack direction="row" spacing={2} className="reply-stack">
      <Typography variant="h5" className="reply-username" component="div">
      {reply.userName}
    </Typography>
    <Typography  color="text.secondary" className="reply-createdAt">
      {timeSince(reply.createdAt)}
    </Typography>
    <Button size="small" className="reply-reply-btn" startIcon={<ReplyIcon/>}>
      Reply
    </Button>
      </Stack>
    <Typography variant="body2" className="reply-body">
      {reply.body}
    </Typography>
      </Stack>
      </Stack>
  </CardContent>
    </Card>
    </Box>
  )
}

export default Reply