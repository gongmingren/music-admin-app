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
        desc: '测试歌单描述',
        musicKeys:['515143071']
    }
];
//测试歌 123
const musicDatas = [
    {
        id:'515143071',
        title:'Revive',
        url:'http://music.163.com/song/media/outer/url?id=515143071.mp3'
    },
    {
        id:'16435049',
        title:'Someone Like You',
        url:'http://music.163.com/song/media/outer/url?id=16435049.mp3'

    },
    {
        id:'3935139',
        title:'Breath and Life',
        url:'http://music.163.com/song/media/outer/url?id=3935139.mp3'

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
    if(req.query.ids){
        const ids = JSON.parse(req.query.ids);
        const result = [];
        ids.map(id =>{
            musicDatas.map(mid=>{
            if(id === mid.id){
                result.push(mid);
            }
        });
    });
    res.json(result);
    return;
}
 res.json(musicDatas);
});

app.listen(4000,function(){
    console.log('Example app listening on port 4000!');
});