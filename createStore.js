import { createStore, bindActionCreators,combineReducers } from "redux";

const ADD_TODO = 'add_todo';
const DEL_TODO = 'delete_todo';
const UPDATE_TODO = 'edit_todo'
const ADD_USER ='add_user';


//yha pe ye pura kaam reducer ka krega 
function todoReducer(state=[],action){
    if(action.type==ADD_TODO)
    {
        const todoText = action.payload.todoText;
        return [
            ...state,
            {text :todoText,isFinished:false,id:(state.length==0)? 1:state[state.length-1].id+1}
        ]
    }else if(action.type == DEL_TODO)
    {
        const todoId = action.payload.todoId;
        return state.filter(t=> t.id != todoId);
    }else if(action.type == UPDATE_TODO)
    {
        const todo = action.payload.todo;
        const todoText = action.payload.todo;
        return state.map(t=>{
            if(t.id == todo.id)
            {
                t.text = todoText;
            }
            return t;
        }) 
    }
    return state;
}


function useReducer(state=[], action){
    if(action.type === ADD_USER){
        const userName = action.payload.userName;
        return [
            ...state,
            {name :userName,id:(state.length==0)? 1:state[state.length-1].id+1}        
        ]
    }
    return state;
}




//combine reducer multiple reducers ko combine krne k kaam ata  h 
const reducer = combineReducers({todo:todoReducer,user :useReducer})




// coberted action objects -> action methods (action creator)
const addTodo = (todoText)=>({type:ADD_TODO,payload:{todoText}})
const deleteTodo =() => ({type:DEL_TODO,payload:{todoId:1}});
const addUser = (name)=>({type:ADD_USER,payload:{userName:name}});





const {dispatch,subscribe,getState,replaceReducer} = createStore(reducer);
//console.log(store);
//get store k baar baar update hone m yeh function call hoga
subscribe(()=>{
    console.log(getState());
})

const actions = bindActionCreators({addTodo,deleteTodo,addUser},dispatch);

actions.addTodo('Todo 1');

actions.addUser('Akash');

actions.addTodo('Todo 2');
// console.log(getState());
 actions.deleteTodo(1);
// console.log(getState());
