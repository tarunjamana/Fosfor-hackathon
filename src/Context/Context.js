import React,{createContext,useContext,useReducer} from 'react';
import data from '../Data/data.json';
import {commentReducer} from './Reducers';

const Comments = createContext();

const Context =({children}) =>{
    const [commentsState,commentsDispatch] = useReducer(commentReducer,data);

    return (
        <Comments.Provider value={{commentsState,commentsDispatch}}>
            {children}
        </Comments.Provider>
    )

}

export default Context;

export const CommentState = () =>{
   return useContext(Comments)
}