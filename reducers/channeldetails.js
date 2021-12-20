const initialState=[
    {
        name: '',
        views_count: 0,
    }
];
const channeldetails=(state=initialState, action)=>{
    switch(action.type)
    {
        case "channel" : return initialState=state;
        default : return state;
    }
}

export default channeldetails;