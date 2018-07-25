const player = (state = {},action)=>{
    switch(action.type){
        case 'PLAY':
        return{
            ...state,
            src:action.src,
            musicTitle:action.musicTitle,
            playLists:action.playLists
        };
        case 'SWITCH':
        return{
            ...state,
            musicTitle:action.musicTitle,
            src:action.src
        };
        default:
        return state;
    }
};
export default player;