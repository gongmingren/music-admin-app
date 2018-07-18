import React, { Component } from 'react';
import { Table } from 'antd';

class PlayLists extends Component {
    state = {  
        data:[]
    };
    componentDidMount() {
        fetch('/api/playlist/query',{
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(data =>{
            this.setState({
                data:data
            });
        });
    }
    render() {
        const columns = [
            {
                title:'歌单名称',
                dataIndex:'name',
                key:'name'
            },
            {
                title:'歌单封面',
                dataIndex:'cover',
                key:'cover'
            },
            {
                title:'歌单描述',
                dataIndex:'desc',
                key:'desc'
            },
        ];
        return (
            <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={false}
            rowKey={record => record.id}
            />
        );
    }
}

export default PlayLists;