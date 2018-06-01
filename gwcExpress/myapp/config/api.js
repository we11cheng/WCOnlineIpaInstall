// config/api.js

var fs = require('fs');

/**
 * 检查请求的路径是否存在
 * @param apiName 请求路径
 * @param method  请求方式
 * @param params   请求参数
 * @param res 返回请求
 */
function getDataFromPath (apiName,method,params,res){
    if(apiName){
        fs.access(
            // 提取请求路径中的js文件
            apiName.substring(1)+'.js',
            // 回调函数，检查请求的路径是否有效失败返回一个错误参数
            function(err){
                if(!err){
                    // 每次请求都清除模块缓存重新请求
                    delete require.cache[require.resolve('..'+apiName)];
                    try{
                        addApiResult(res,require('..'+apiName).getData(method,params));
                    }catch(e){
                        console.error(e.stack);
                        res.status(500).send(apiName+' has an error,please check the code.');
                    }
                }else{
                    addApiResult(res);
                }
            }
        );
    }else{
        addApiResult(res);
    }
};
/**
 *  响应头
 * @param res
 */
function addApiHead(res){
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    // 跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // 控制http缓存
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
}

/**
 * 返回参数，如无返回参数返回404
 * @param res
 * @param result
 */
function addApiResult(res,result){
    if(result){
        res.send(result);
    }else{
        res.status(404).send();
    }
}

/*请求方式*/
// get
exports.get = function(req, res){
    addApiHead(res);
    getDataFromPath(req.path,'GET',req.query,res);
};

// post
exports.post = function(req, res){
    addApiHead(res);
    getDataFromPath(req.path,'POST',req.body,res);
};


