import http, { ServerResponse } from "http";

const server = http.createServer((req:http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    res.writeHead((res.statusCode = 200), {
        "content-type": "text/html"
    });

    const device =req.rawHeaders[7].split('"')[1];
    console.log(device);
    
    // const postData =req.rawHeaders[4].split('-')[0];
    // console.log(postData)  
    // res.write(`You're using ${postData}to access the browser`);
    res.end();
    
});

server.on("connection", () => {
    console.log("A user connected ")
});

server.listen(3322,()=> {
    console.log("")
    console.log("server is now live...")
})