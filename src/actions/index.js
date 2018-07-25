export const play = (src,musicTitle,playLists) => ({
    type: 'PLAY',
    src,
    musicTitle,
    playLists
});

export const switchPlay = (src,musicTitle) => ({
    type:'SWITCH',
    src,
    musicTitle
});