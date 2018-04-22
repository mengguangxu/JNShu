var inputNumber = document.getElementById("inputNumber");
var rangeNumber = document.getElementById("rangeNumber");
var killer = document.getElementById("killer");
var people = document.getElementById("people");
var x=inputNumber.value;
var y=killer.value;
var z=people.value;
//返回首页
function back(){
    var revert=confirm("确定要返回首页么？");
    if(revert===true){
        window.location.href="../html/task2-1.html";
    }
    else {
        return null;
    }
}
//Esc键盘事件
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode===27){ // 按 Esc要做的事情
        var revert=confirm("确定要返回首页么？");
        if(revert===true){
            window.location.href="../html/task2-1.html";
        }
        else {
            return null;
        }
    }
};
//玩家人数的输入框与滚动条同步
function getNumber(){
    if(inputNumber.value>=4&&inputerNumber.value<=18){
        inputNumber.value=rangeNumber.value;
    }
    else{
        alert("请输入玩家人数");
    }
}
//滚动条改变玩家人数随着改变
function change(){
    inputNumber.value=rangeNumber.value;
}
//减号按钮与滚动条同步
function btLeft(){
    rangeNumber.value--;
    if(inputNumber.value<=4) {
        alert("人数不足，请凑好再来");
    }
    else{
        inputNumber.value=rangeNumber.value;
    }
}
//加号按钮与滚动条同步
function btRight(){
    rangeNumber.value++;
    if(inputNumber.value>=18) {
        alert("人数太多，请分开游戏");
    }
    else{
        inputNumber.value=rangeNumber.value;
    }
}
function push(){
    if (x<5){
        y=1;
        z=x-y;
    }else{
        if (x<10){
            y=2;
            z=x-y;
        }else{
            if (x<18){
                y=4;
                z=x-y;
            }
        }
    }
    killer.innerHTML=y;
    people.innerHTML=z;
    console.log(z)
}