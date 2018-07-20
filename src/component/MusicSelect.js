import React, { Component } from 'react';
import { Transfer,Modal } from 'antd';
import Remote from '../Remote';

class MusicSelect extends Component {
    state = { 
        musicData:[],
        targetKeys:[]
     };
     componentDidMount(){
         Remote(
             '/api/music/query',
             {
                 method:'GET'
             },
             data =>{
                 this.setState({
                     musicData:data
                 });
             }
         );
     }
     componentWillReceiveProps(nextProps){
         this.setState({
             targetKeys:nextProps.selectedKeys
         });
     }
     handleChange = (nextTargetKeys,direction,moveKeys) =>{
         this.setState({targetKeys: nextTargetKeys});
     };
     handleSelectChange = (sourceSelectedKeys,targetSelectdKeys) =>{
         this.setState({
             selectdKeys:[...sourceSelectedKeys,...targetSelectdKeys]
         });
     };
    render() {
        return (
            <Modal
            visible={this.props.visible}
            onOk={() =>{
                this.props.handlerSelectMusic(this.state.targetKeys);
            }}
            onCancel={()=>{
                this.props.closeSelectMusic();
            }}
            >
             <Transfer
             dataSource={this.state.musicData}
             titles={['所有歌曲','已选歌曲']}
             targetKeys={this.state.targetKeys}
             onChange={this.handleChange}
             onSelectChange={this.handleSelectChange}
             render={item => item.title}
             rowKey={record => record.id}
             />
            </Modal>
        );
    }
}

export default MusicSelect;