const initialState=[];
const explore=(state=initialState, action)=>{
    switch(action.type)
    {
        case "explore" : return state=action.data;
        default : return state;
    }
}

export default explore;