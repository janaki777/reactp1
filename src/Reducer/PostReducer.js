function PostReducer(state={},action)
{

    switch(action.type)
    {
        case 'posts':
                return {...state, postdata:action.payload} ; break;
        default:
                return state;//New state
    }
}

export default PostReducer;