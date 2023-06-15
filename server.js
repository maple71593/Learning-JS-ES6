const express = require('express');
const app = express();
app.get('/home',(request,response)=>{
    response.sendFile(__dirname +'/ajax-same-origin-policy.html');
});

app.get('/data',(request,response)=>{
    response.send('用戶數據');
});


app.listen(8000,()=>{
    console.log('服務已經啟動');
})