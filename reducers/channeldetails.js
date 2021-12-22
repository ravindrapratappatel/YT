const initialState=[];
const channeldetails=(state=initialState, action)=>{
    switch(action.type)
    {
        case "channel" : return state=action.data;
        default : return state;
    }
}

export default channeldetails;