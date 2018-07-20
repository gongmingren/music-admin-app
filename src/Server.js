const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const app = express();
app.use(bodyParser.json());

//缓存歌单数据
const playlistDatas =[
    {
        id: 1,
        name: '测试歌单1',
        cover: 'http://xx.com/xx.jpg',
        desc: '测试歌单描述'
    }
];
//测试歌 123
const musicDatas = [
    {
        id:1,
        title:'测试歌'
    },
    {
        id:2,
        title:'测试歌2'
    },
    {
        id:3,
        title:'测试歌3'
    }
];
/**
 * 处理歌单添加
 */
app.post('/api/playlist/add',function(req,res){
    req.body.id = uuidv4();
    playlistDatas.push(req.body);

    console.log('add playlist:' ,req.body);
    res.json(req.body);
});

//处理歌单添加 第六课

app.post('/api/playlist/update',function(req,res){
    const id = req.body.id;
    playlistDatas.map(item =>{
        if(item.id === id){
            item.musicKeys = req.body.keys;
        }
    });
    res.json({success:'success'})
});
/**
 * 处理歌单列表数据
 */
app.get('/api/playlist/query',function(req,res){
    res.json(playlistDatas);
});

//获取歌曲的数据
app.get('/api/music/query',function(req,res){
    res.json(musicDatas);
});

app.listen(4000,function(){
    console.log('Example app listening on port 4000!');
});