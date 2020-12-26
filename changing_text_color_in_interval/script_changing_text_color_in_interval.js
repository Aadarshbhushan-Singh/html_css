var a=document.getElementById("a");
var a_2=document.getElementById("a_2");
var d=document.getElementById("d");
var a_3=document.getElementById("a_3");
var r=document.getElementById("r");
var s=document.getElementById("s");
var h=document.getElementById("h");

a.style.color="red";
a_2.style.color="red";
d.style.color="red";
a_3.style.color="red";
r.style.color="red";
s.style.color="red";
h.style.color="red";

//a
window.setTimeout(function(){
    window.setInterval(function(){
        if (a.style.color=="red"){
            a.style.color="blue";
        }else if(a.style.color=="blue"){
            a.style.color="green";
        }else{
            a.style.color="red";
        }
    },400)
}, 1000);

//a_2
window.setTimeout(function(){
    window.setInterval(function(){
        if (a_2.style.color=="red"){
            a_2.style.color="blue";
        }else if(a_2.style.color=="blue"){
            a_2.style.color="green";
        }else{
            a_2.style.color="red";
        }
    },400)
}, 2000);

//d
window.setTimeout(function(){
    window.setInterval(function(){
        if (d.style.color=="red"){
            d.style.color="blue";
        }else if(d.style.color=="blue"){
            d.style.color="green";
        }else{
            d.style.color="red";
        }
    },400)
}, 3000);

//a_3
window.setTimeout(function(){
    window.setInterval(function(){
        if (a_3.style.color=="red"){
            a_3.style.color="blue";
        }else if(a_3.style.color=="blue"){
            a_3.style.color="green";
        }else{
            a_3.style.color="red";
        }
    },400)
}, 4000);

//r
window.setTimeout(function(){
    window.setInterval(function(){
        if (r.style.color=="red"){
            r.style.color="blue";
        }else if(r.style.color=="blue"){
            r.style.color="green";
        }else{
            r.style.color="red";
        }
    },400)
}, 5000);

//s
window.setTimeout(function(){
    window.setInterval(function(){
        if (s.style.color=="red"){
            s.style.color="blue";
        }else if(s.style.color=="blue"){
            s.style.color="green";
        }else{
            s.style.color="red";
        }
    },400)
}, 6000);

//h
window.setTimeout(function(){
    window.setInterval(function(){
        if (h.style.color=="red"){
            h.style.color="blue";
        }else if(h.style.color=="blue"){
            h.style.color="green";
        }else{
            h.style.color="red";
        }
    },400)
}, 7000);
