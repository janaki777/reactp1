function UserReducer(state={},action)
{

    switch(action.type)
    {
        case 'users':
                return {...state, userdata:action.payload} ; break;
        default:
                return state;//New state
    }
}

export default UserReducer;