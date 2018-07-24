const player = (state = {},action)=>{
    switch(action.type){
        case 'PLAY':
        return{
            ...state,
            src:action.src
        };
        default:
        return state;
    }
};
export default player;