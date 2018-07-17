import React, { Component } from 'react';
/**
 * 歌曲管理页
 */
class Songs extends Component {
    componentDidMount() {
        document.title = "歌曲管理"
    }
    render() {
        return (
            <div>Songs</div>
        );
    }
}

export default Songs;