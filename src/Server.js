const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const app = express();
app.use(bodyParser.json());

//缓存歌单数据
const playlistDates = [];
/**
 * 处理歌单添加
 */
app.post('/api/playlist/add',function(req,res){
    req.body.id = uuidv4();
    playlistDates.push(req.body);

    console.log('add playlist:' ,req.body);
    res.json(req.body);
});

app.listen(4000,function(){
    console.log('Example app listening on port 4000!');
});