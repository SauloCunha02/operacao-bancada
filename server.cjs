const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.zip':'application/zip','.md':'text/markdown; charset=utf-8'};
function createServer(){
  return http.createServer((req,res)=>{
    const headers={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{...headers,Allow:'GET, HEAD'});return res.end('Method not allowed');}
    let relative,file;
    try{
      relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
      if(/[\u0000-\u001f\u007f]/.test(relative))throw Error('invalid path');
      file=path.resolve(root,'.'+(relative==='/'?'/index.html':relative));
    }catch{res.writeHead(400,headers);return res.end('Invalid path');}
    if(!file.startsWith(root+path.sep)){res.writeHead(403,headers);return res.end('Forbidden');}
    fs.readFile(file,(err,bytes)=>{
      if(err){const code=['ENOENT','ENOTDIR','EISDIR'].includes(err.code)?404:500;res.writeHead(code,headers);return res.end(code===404?'Not found':'Unable to read file');}
      res.writeHead(200,{...headers,'Content-Type':types[path.extname(file).toLowerCase()]||'application/octet-stream','Content-Length':bytes.length});
      res.end(req.method==='HEAD'?undefined:bytes);
    });
  });
}
if(require.main===module){
  createServer().on('error',err=>{console.error(err.code==='EADDRINUSE'?'A porta 4173 já está em uso. Abra http://127.0.0.1:4173 ou encerre o servidor anterior.':'Não foi possível iniciar o servidor: '+err.code);process.exitCode=1;}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
}
module.exports={createServer};
