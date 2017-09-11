
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