import React, { Component } from 'react';
import './App.css';

import Loadable from 'react-loadable';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Layout from './Layout';

//自定义 loading
const Loading = () =><div>Loading...</div>;

//歌单管理页
const PlayList = Loadable({
  loader: () => import('./page/PlayList'),
  loading:Loading
});

//歌曲管理页
const Songs = Loadable({
  loader:() => import('./page/Songs'),
  loading:Loading
});
//歌曲列表页
const PlayLists = Loadable({
  loader:() => import('./page/PlayLists'),
  loading:Loading
});
//布局包装器
const Wraper = Page =>{
  return() =>{
    return<Layout body={<Page/>}/>;
  };
};

class App extends Component {
  render() {
    return (
    <Router>  
      <Switch>
        <Route exact path="/" component={Wraper(PlayList)}/>
        <Route path="/playlists" component={Wraper(PlayLists)}/>
        <Route path="/songs" component={Wraper(Songs)}/>
        </Switch>
        </Router>
    );
  }
}

export default App;