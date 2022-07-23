import { HowToVoteSharp } from "@mui/icons-material";

export const commentReducer = (state,action) => {

    const increment = (id) =>{
      const activeComment = state.filter(comment => comment.userId === id)[0];
      const votes =activeComment.votes ;
      const updatedObj = {...activeComment,votes:parseInt(votes)+1};
     let  filteredState = state.filter(comment => comment.userId !== id);
      return [...filteredState,updatedObj]
     }

    const decrement = (id) =>{
        const activeComment = state.filter(comment => comment.userId === id)[0];
        const votes =activeComment.votes ;
        const updatedObj = {...activeComment,votes:parseInt(votes)-1};
       let  filteredState = state.filter(comment => comment.userId !== id);
        return [...filteredState,updatedObj]
    }

    switch (action.type) {
        case 'SET_COMMENT':
            return [...state,action.payload];
        case 'UP_VOTE_COMMENT':
               return increment(action.payload);
        case 'DOWN_VOTE_COMMENT':
               decrement(action.payload);
              return decrement(action.payload);
              
              default:
                return state;
    }


}