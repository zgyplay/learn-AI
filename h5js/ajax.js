
function loadXMLDoc()
{
    var xmlhttpReq;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttpReq=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttpReq=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //准备好onreadystatechange,状态发生变化时，函数被回调
    xmlhttpReq.onreadystatechange=function()
    {
        if (xmlhttpReq.readyState===4 && xmlhttpReq.status===200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttpReq.responseText;
        }
        else
        {
            document.getElementById("myDiv").innerHTML='fail status: '+xmlhttpReq.status;
        }
    };
    // 发送请求
    xmlhttpReq.open("GET","/learn-AI/h5js/ajax.txt",true);
    xmlhttpReq.send();
}

// 测试 Promise
function randFunc() {
    var timeOut = Math.random() * 2;
    console.log('set time out:' + timeOut + ' second.');
    setTimeout(function (){
        if(timeOut < 1){
            console.log('call resolve...');
            resolve('200 OK');
        }
        else {
            console.log('call reject...');
            console.log('timeout in' + timeOut + ' second');
        }
    }, timeOut * 1000);
}

function testPromise() {
    new Promise(randFunc).then( function(result) {
            console.log('成功' + result);
        }
    ).catch( function(reason) {
            console.log('失败' + reason);
        }
    );
}
