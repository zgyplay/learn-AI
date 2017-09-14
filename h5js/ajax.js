
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

// randFunc
function randFunc(resolve, reject) {
    var timeOut = Math.random() * 3;
    console.log('set time out:' + timeOut + ' second.');
    setTimeout(function (){
        if(timeOut < 1) {
            console.log('call resolve...');
            resolve('200 OK');
            }
        else {
                console.log('call reject...');
                reject('timeout in' + timeOut + ' second');
            }
        }, timeOut * 1000);
}

function testPromise() {
    new Promise(randFunc(resolve,reject)).then( function(result) {
            console.log('成功' + result);
        }
    ).catch( function(reason) {
            console.log('失败' + reason);
        }
    );
}

//测试Canvas
function testCanvas(){
    let canv = document.getElementById('canvas1');
    let ctx = canv.getContext('2d');//拿到一个CanvasRenderingContext2D对象
    //WebGL规范，允许在Canvas中绘制3D图形
    //let gl = canvas.getContext("webgl");

    ctx.clearRect(0,0,200,200); //擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#dddddd'; // 设置颜色
    ctx.fillRect(10, 10, 130, 130);// 把(10,10)位置大小为130x130的矩形涂色

    // 利用Path绘制复杂路径:
    var path=new Path2D();
    path.arc(75, 75, 50, 0, Math.PI*2, true);
    path.moveTo(110,75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI*2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI*2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);
}