let contaner=document.getElementById("contaner");
let but=document.getElementById("click");

but.addEventListener("click", function(){
    let arr=['#FF0000','#FFFFFF','#00FFF','#C0C0C0','#0000FF','#808080','#00008B','#000000','#ADD8E6','#FFA500','#800080','#A52A2A','#FFFF00','#800000','#00FF00','#008000','#FF00FF','#808000','#FFC0CB','#7FFD4'];
    for (let index = 0; index < arr.length; index++) {
        z=index*Math.random()
        u=Math.round(z)
        contaner.style.backgroundColor=arr[u];   
    }
})

