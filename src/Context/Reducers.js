export const commentReducer = (state,action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return [...state,action.payload];
        case 'UP_VOTE_COMMENT':
                return [...state,[...state].reduce((acc,val) => {
                    if(val.votes === action.payload){
                      acc = {...val,votes:val.votes++}
                    }
                    return acc;
                },{})];
        case 'DOWN_VOTE_COMMENT':
              // state.filter((comment) => comment.userId === action.payload).votes--;
              return [...state,[...state].reduce((acc,val) => {
                if(val.votes === action.payload){
                  acc = {...val,votes:val.votes++}
                }
                return acc;
            },{})];
              
              default:
                return state;
    }


}