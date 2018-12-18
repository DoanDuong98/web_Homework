const express = require('express');
const app = express();
// request GET ==> http://localhost:6969/
app.use(express.static(__dirname+'/src/'));
app.get("/about",(Request,Response)=>{
    // Response.send (JSON.stringify({a: 5,b:6}));
    // Response.send("<H1>hello</H1>")
    // console.log(__dirname);
    Response.sendFile(__dirname + "/src/about/index.html");
});
// app.get("/about",(Request,Response)=>{
//     // show ra trang CV
// })


app.listen(6969,(err)=> {
    if(err) console.log(err);
    else console.log("Sever start success!");
});
