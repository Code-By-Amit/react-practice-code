import {useReducer} from 'react'

export function Reducer (){

    const initialState = {
        count : 0,
        inc:2,
        dec:2
    }
    
    const reducer =(state,action)=>{
        console.log('State: ',state, 'action :',action);
        // if(action.type==='INCREMENT'){
        //     return state +1;
        // }
        // if(action.type==='DECREMENT'){
        //     return state - 1;
        // }
        // if(action.type === 'RESET'){
        //     return state = 0;
        // }
        
        switch(action.type){
            case "INCREMENT" : 
                return {...state, count:state.count+state.inc}
            case "DECREMENT" : 
                return {...state, count:state.count-state.dec}
            case "RESET" : 
                return {...state, count:0}
            default:
                return state;

        }
    }
    const [state , dispatch] = useReducer(reducer,initialState);

    return (
        <div className="p-4 flex justify-center items-center h-screen flex-col gap-2">
            <h1>count: {state.count}</h1>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}