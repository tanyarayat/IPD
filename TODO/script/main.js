const tick=document.querySelector("#add_icon");
const del=document.querySelector("#delete_image");
const task=document.querySelector("#task_input");
const content=document.querySelector("#main-tasks");
const checkoX=document.querySelector(".tasks #delete_image");
const select=document.querySelector(".select #slct");
//Tasks Array


function insertHtml(text)
{
    var divd=document.createElement("div");
    divd.classList.add("tasks");

    var check=document.createElement("input");
    check.setAttribute("type","checkbox");
    
    var t_value=document.createElement("div");
    t_value.setAttribute("id","task");
    t_value.innerText=text;

    var del=document.createElement("div");
    del.setAttribute("class","delete_image");

    del.innerHTML="<i class='fa fa-trash-o fa-1x'></i>"
    divd.appendChild(check);
    divd.appendChild(t_value);
    divd.appendChild(del);
    content.appendChild(divd);
}

content.addEventListener("click",checker);

function checker(event){
     
       if(event.target.tagName=="INPUT"){
           if(event.target.checked===true){
            var parent=event.target.parentElement;
            parent.classList.add("completed");
           }
           else{
            var parent=event.target.parentElement;
            parent.classList.remove("completed");
           }
       }
  
        else if(event.target.className=="delete_image"){
           
           var c=event.target.parentElement;
           var elemet=event.target.parentElement.parentElement;
           elemet.removeChild(c);
        }

        else if(event.target.className=="fa fa-trash-o fa-1x"){
            var c=event.target.parentElement.parentElement;
            var el=event.target.parentElement.parentElement.parentElement;
            el.removeChild(c);
        }
}
document.querySelector("body").addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        tick.focus();
        tick.click();
    }
});
tick.addEventListener("click",function(event){
    var s=task.value; 
    if(s!=""){
        insertHtml(s);
    }  
    task.value="";
});


document.querySelector(".select").addEventListener("click", function(){
    var selectedValue= select.options[select.selectedIndex].value;
    console.log(selectedValue);
    if(selectedValue==2){
        var Y=document.getElementsByClassName("tasks");
      for(var i=0;i<Y.length;++i){
        Y[i].style.display="flex";
      }
     var x=document.getElementsByClassName("completed");
     for(var i=0;i<x.length;++i){
        x[i].style.display="none";
    }
   }

   else if(selectedValue==1){
      var x=document.getElementsByClassName("tasks");
      for(var i=0;i<x.length;++i){
        x[i].style.display="flex";
    }
   }

   else if(selectedValue==3){
    var Y=document.getElementsByClassName("tasks");
    for(var i=0;i<Y.length;++i){
      Y[i].style.display="flex";
    }
    var x=document.querySelectorAll(".tasks:not(.completed)");
    for(var i=0;i<x.length;++i){
        x[i].style.display="none";
    }
   }
});

    
    


