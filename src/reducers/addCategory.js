const addCategory = ( state= [],  action) => {
    switch(action.type) {
        case 'ADD':
            return state.concat([action.data])
            //    ...state,
            //    state : state.concat([action.data])
            
        case 'DELETE':
            return state.filter((title)=>title.id !== action.id);
            //   ...state,
            //  state : state.filter((title)=>title.id !== action.id)
            
        default:
            return state;

    }
}

export default addCategory;