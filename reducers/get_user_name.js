const initialState='RP';
const get_user_name=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_name" : return state=action.user;
        default : return state;
    }
}

export default get_user_name;