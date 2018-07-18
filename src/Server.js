const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const app = express();
app.use(bodyParser.json());

//缓存歌单数据
const playlistDates =[
    {
        id: 1,
        name: '测试歌单1',
        cover: 'http://xx.com/xx.jpg',
        desc: '测试歌单描述'
    }
];
/**
 * 处理歌单添加
 */
app.post('/api/playlist/add',function(req,res){
    req.body.id = uuidv4();
    playlistDates.push(req.body);

    console.log('add playlist:' ,req.body);
    res.json(req.body);
});
/**
 * 处理歌单列表数据
 */
app.get('/api/playlist/query',function(req,res){
    res.json(playlistDates);
});

app.listen(4000,function(){
    console.log('Example app listening on port 4000!');
});