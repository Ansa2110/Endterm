var http=require("http");
var fs=require("fs");

function serveStaticFile(res,path,contentType,responseCode) 
{
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err,data){
      if(err) {
          res.writeHead(500, {"Content-Type" : "text/plain"});
          res.end("500 - Internal error with a response code 500")
      }
      else 
      {
          res.writeHead(responseCode, {"Content-Type" : contentType});
          res.end(data);
      }
  })
}

http.createServer(function(req,res) {
 var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
 switch(path) {
     case "":
         serveStaticFile(res, "/index.html", "text/html");
         break;
     case "/about":
         serveStaticFile(res, "/about.html", "text/html");
         break;
     case "/img/gallery/csgo":
         serveStaticFile(res, "/img/gallery/cs go.jpg", "image/jpg");
         break;
     case "/img/gallery/dota":
         serveStaticFile(res,"/img/gallery/dota.jpg","image/jpg");
         break;
     case "/video/solomid":
         serveStaticFile(res,"/video/video.mp4","video/mp4");
         break;
     default:
         serveStaticFile(res,"/error.html","text/html",404);
         break;
 }
}).listen(3000)

console.log("Your server is running on localhost:3000")