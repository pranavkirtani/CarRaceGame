raceApp.service('raceService',['betService',function(betService){

    this.createTrucks=function(trucks){
       var wd="1000"
       var ht="120"
        var race_div = document.getElementById('racing');
         
         
      for(var i=0;i<trucks;i++){
            canvas=document.createElement('canvas');
            canvas.setAttribute("id","canvas"+i)
            canvas.style.width =wd+"px";
            canvas.style.height =ht+"px";
            race_div.appendChild(canvas);
            var ctx = canvas.getContext("2d");
            var imgTag = new Image();
            imgTag.src = "images/truck2.png"
            imgTag.onload=draw.bind(null,i,imgTag)
            
      }


    }

    this.start=function(trucks){
           
            
            betService.resetWinners();
            for(var i=0;i<trucks;i++){
                var bias=Math.random()*4;
                var imgTag = new Image();
                imgTag.onload = animate.bind(null,i,0,bias);
                imgTag.src = "images/truck2.png";
                animate(i,0,bias,imgTag,betService)
            }
        
     
        
    }
 
}])


function animate(i,x,bias,imgTag,betService) {
        
        var speed=0.5;
        var y = 0;
        var canvas=document.getElementById("canvas"+i);
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(imgTag, x, y); 
        distance_covered=speed+bias;              
        x+=distance_covered;
        if (x < canvas.width-(canvas.width/2)) {
            var step=requestAnimationFrame(animate.bind(null,i,x,bias,imgTag,betService))
            }
            else{
                betService.setWinner(i);
            }
            
}

function draw(i,imgTag){

        var y = 0;
        var x=0;
        var canvas=document.getElementById("canvas"+i);
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(imgTag, x, y); 


}

