// 本地测试服务器的域名
// 封装，因为域名一般都是固定的
let domin = 'http://localhost:9000'
console.log(typeof(process.env))
// // 什么时候用这个域名呢？判断一下当前的场景，process.env
// let domin 

// if(process.env == 'development'){// 开发模式
//     domin = 'http://localhost:9000'
//     console.log(56789)
// }
// if(process.env == 'production'){// 就是上线了那么他的域名就等于真实的域名
//     domin = 'http://www.lb717.com'

// }

let $http={
    get(url, data){
        if(Object.prototype.toString.call(data)!="[object Object]"){
           return {
               then(callback){
                   callback('GET请求入参格式不正确，需要传OBJECT');
                   return {
                       catch(err){
                           err(new Error('入参格式不正确'))
                       }
                   }
               }
           };
        }
        console.log(Object.prototype.toString.call(data))
        // 遍历data
        let queryString = "?"
        for(let i in data){
            queryString+=(i+"="+data[i]+"&")
        }
        url = encodeURI(url+queryString.slice(0, -1))
       
        console.log(url)
        return fetch(domin+url,{
            headers:{
                "Content-Type":"application/json;charset=utf-8"
            }
        }).then(res=>res.json())
    },
    post(url, data){
        console.log(domin)
        if(Object.prototype.toString.call(data)!="[object Object]"){
            return {
                then(callback){
                    callback('GET请求入参格式不正确，需要传OBJECT');
                    return {
                        catch(err){
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            };
        }
        return fetch(domin+url, {
            body:JSON.stringify(data),// 字符串
            headers:{
                 "Content-Type":"application/json;charset=utf-8"
            },
            "method":"POST"
        }).then(res=>res.json())
    }
} 

export default $http
