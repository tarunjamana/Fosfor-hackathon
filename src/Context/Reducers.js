export const commentReducer = (state,action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return [...state,action.payload]

            default:
        return state
    }


}