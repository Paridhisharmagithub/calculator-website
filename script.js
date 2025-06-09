let btarr=[9,8,7,'+',6,5,4,'-',3,2,1,'*',0,'(',')','/'];
let buttons=document.querySelectorAll(".calc");
let s=document.getElementById("submit");
let total=document.querySelector("#resulth");
let clear=document.querySelector("#clear");
//let res='';
let expr=document.querySelector("#box");

buttons.forEach(function print(val){
    val.addEventListener("click",(evt)=>{
        let expadd=val.innerHTML;
        expr.innerHTML=expr.innerHTML+expadd;
    })
})
let cal=()=>{
    let res=eval(expr.innerHTML);
    console.log(res);
    if (res===undefined){
        res=0;
    }
    total.innerHTML=total.innerHTML+res;
    total.setAttribute("id","result");
    s.disabled=true;
}

total.innerHTML="Result: ";
s.addEventListener("click",cal);

let cc=()=>{
    expr.innerHTML='';
    total.setAttribute("id","resulth");
    total.innerHTML="Result: ";
    s.disabled=false;
}
clear.addEventListener("click",cc);

    
