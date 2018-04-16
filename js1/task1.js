var box=document.getElementsByClassName("box");
// console.log(box);
function clearColor(){
    for(var i=0;i<box.length;i++){
        box[i].style.backgroundClor="#ffa600";
    }
}
var a;
var c;
var d;
function con(){
    a=(Math.floor(Math.random()*9));
    c=(Math.floor(Math.random()*9));
    d=(Math.floor(Math.random()*9));
    /*在9个数中取出随机的3个数并储存在3个变量中，Math.random()会产生一个[0,1)的数，Math.random()*9会产生一个[0,9)的数，注意其中包含了小数，
     Math.floor(Math.random()*9)会对由上面的语句产生的数值进行向下取整 例如产生的数为5.5，则math.floor(5.5)=5。*/
}
var str;
var r;
var g;
var b;
function arr(){
    con();
    if(a !== c&&c !== d&&d !== a) {//保证取到的3个随机数不相等再执行取随机颜色
         str = "0123456789abcdef";//组成16进制颜色值的16位数
         r = "#";
         g = "#";
         b = "#";
        for (var i = 0; i < 6; i++) {//i<6可以循环6次取到6个值，满足16进制颜色值
            r = r + str.charAt(Math.random() * str.length);
            g = g + str.charAt(Math.random() * str.length);
            b = b + str.charAt(Math.random() * str.length);//分别设置3个随机的16进制颜色值
        }
    }
    else{
      con();//如果3个数值值有相同的情况，就重新取数值
        }
}
function color(){
    clearColor();
        con();
        arr();
        if(r !== g&&g !== b&&b !== r){//保证3个颜色都是不同的
            box[a].style.backgroundColor = r;
            box[c].style.backgroundColor = g;
            box[d].style.backgroundColor = b;//分别把3个随机数给盒子数组，组成3个随机盒子，并把3个随机盒子分别改变颜色，并且颜色随机
        }
        else{
         con();//如果3个颜色值有相同的情况，就重新取数值
        }
}
function open(){
    color();
}
function close(){
    clearColor()
    // clearColor();
    // clearInterval(time);
}