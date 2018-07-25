import React, { Component } from 'react';
import { Layout, Menu, Icon,Dropdown,Row,Col } from 'antd';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import { switchPlay } from './actions';

const { Header, Content, Footer, Sider } = Layout;
class LayoutComponent extends Component {
    state = {key:'/'};
    componentWillMount() {
        this.setState({key:this.props.location.pathname});
    }
    handlerOnSelect = (item)=>{
        this.props.history.push(item.key);
    }

    getPlayer = () =>{
      if(!this.props.playUrl){
        return null;
      }
      const menu = (
        <Menu>
          {this.props.playLists.map(p =>{
            return(
              <Menu.Item key={p.id}>
              <a
              href="javascript:;"
              onClick={() =>{
                this.props.dispatch(switchPlay(p.url,p.title));
              }}
              >
              {p.title}
              </a>
              </Menu.Item>
            );
          })}
          </Menu>
      );
      return(
      <Row>
        <Col span={6} style={{ textAlign:'right'}}>
        {this.props.musicTitle}
        </Col>
        <Col span={12}>
        <ReactPlayer
         height={30}
         width="100%"
         url={this.props.playUrl}
         playing 
         controls 
         />
         </Col>
         <Col span={6}>
         <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
          查看播放清单 <Icon type="down" />
          </a>
          </Dropdown>
          </Col>
        </Row>
         );
    };

    render() {
        return (
  <Layout>
    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>

      <Menu theme="dark" mode="inline" onSelect={this.handlerOnSelect} 
      defaultSelectedKeys={[this.state.key]}>
        <Menu.Item key="/">
          <Icon type="team" />
          <span className="nav-text">歌单管理</span>
        </Menu.Item>
        <Menu.Item key="/playlists">
          <Icon type="user" />
          <span className="nav-text">歌单列表</span>
        </Menu.Item>
        <Menu.Item key="/songs">
          <Icon type="shop" />
          <span className="nav-text">歌曲管理</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} >
      {this.getPlayer()}
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          {this.props.body}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
         ©2018 Created by B.Match
      </Footer>
    </Layout>
  </Layout>
        );
    }
}
const mapStateToProps = state =>{
  return{
    musicTitle: state.musicTitle,
    playUrl: state.src,
    playLists:state.playLists
  };
};

export default connect(mapStateToProps)(withRouter(LayoutComponent));