var likes = document.getElementsByClassName("like");
console.log(likes);

for(let i=0;i<likes.length;i++){
    let jaime = likes[i];

    jaime.addEventListener("click",function() {

       if ( jaime.style.color == "red"){

        jaime.style.color ="black";

       } else{jaime.style.color = "red";}



    } )
}


var pluss=document.getElementsByClassName("plus-btn");
console.log(pluss);

for (let i=0;  i < pluss.length; i++) {
    let btp = pluss[i];
    btp.addEventListener("click", function() {
        btp.previousElementSibling.value++;
    });
}




var minuss=document.getElementsByClassName("minus-btn");


for (let i=0;  i < minuss.length; i++)  {

let btm = minuss[i];

btm.addEventListener("click",function(){
if(btm.nextElementSibling.value>1){
    btm.nextElementSibling.value--;
}


});
}


var deletes=document.getElementsByClassName("delete");


for (let i=0;  i < deletes.length; i++) {

    let dlt = deletes[i];
    dlt.addEventListener("click",function(){
        dlt.parentElement.remove();
    })
}


    



