
//---------------------RAMON NOODLES--------------------//

function drawfirst(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
    canvas.style.backgroundColor = 'white';
    
if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    } else {
        const para = document.querySelector('.unsupported');
        para.textContent = 'Browser unsupported for HTML5 Canvas';
    }

    //////////- background rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(150, 0, 300, 400);
}
drawfirst();


function drawNoodles(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
    
        
    //////////- straight noodles
    ctx.fillStyle = "yellow";
    ctx.fillRect(165, 133, 13, 250);

    ctx.fillStyle = "yellow";
    ctx.fillRect(190, 133, 13, 250);
    
    ctx.fillStyle = "yellow";
    ctx.fillRect(215, 133, 13, 250);
}
drawNoodles();


//-------FIRST bunch---//

function drawY1(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
    //-SIZE or circle
    const radius = 125;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
 drawY1();
    
    
 function drawR1(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");     
    
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
    //-SIZE or circle
    const radius = 110;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR1();
    
    
function drawY2(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");        

        
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
        
    //-SIZE or circle
    const radius = 95;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY2();
    
    
function drawR2(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");            
        
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
    //-SIZE or circle
    const radius = 80;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR2();
    
    
function drawY3(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;       
    //-SIZE or circle
    const radius = 65;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY3();
        
    
function drawR3(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
    //-SIZE or circle
    const radius = 50;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR3();
            
    
function drawY4(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
                
    /////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;         
    //-SIZE or circle
    const radius = 35;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY4();
            
            
function drawR4(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
                
    ctx.beginPath();
    centerX = canvas.width / 1.75;
    centerY = canvas.height / 1.25;
    //-SIZE or circle
    const radius = 20;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR4();



//-------SECOND bunch---//

function drawY5(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 125;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY5();
    
    
 function drawR5(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");     
    
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 110;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR5();
    
    
function drawY6(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");        
        
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
        
    //-SIZE or circle
    const radius = 95;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY6();
    
    
function drawR6(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");            
        
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 80;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();     
}
drawR6();
    
    
function drawY7(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;    
    //-SIZE or circle
    const radius = 65;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY7();
        
    
function drawR7(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 50;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR7();
            
    
function drawY8(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
                
    /////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
                
    //-SIZE or circle
    const radius = 35;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY8();
            
            
function drawR8(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
                
    ctx.beginPath();
    centerX = canvas.width / 2.25;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 20;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR8();


//-------last bunch---//
function drawY9(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;

    //-SIZE or circle
    const radius = 125;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY9();


function drawR9(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 110;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR9();


function drawY10(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;  
    
    //-SIZE or circle
    const radius = 95;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY10();


function drawR10(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
    
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;  
    //-SIZE or circle
    const radius = 80;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR10();


function drawY11(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
        
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;
        
    //-SIZE or circle
    const radius = 65;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY11();
    

function drawR11(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
        
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 50;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR11();
        

function drawY12(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    //////////- ramen
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;
            
    //-SIZE or circle
    const radius = 35;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
drawY12();
        
        
function drawR12(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
            
    ctx.beginPath();
    centerX = canvas.width / 1.5;
    centerY = canvas.height / 1;
    //-SIZE or circle
    const radius = 20;
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}
drawR12();



//-----------------CHOPSTICKS AND BORDERS-----------

function drawlast(){
const canvas = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");

    ///////////- coverup rectangles
    ctx.fillStyle = "salmon";
    ctx.fillRect(0, 0, 150, 400);

    ctx.fillStyle = "salmon";
    ctx.fillRect(450, 0, 150, 400);
}
drawlast();


function drawChop1(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
    
    ctx.beginPath();
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    //top point
    ctx.moveTo(centerX + 200, centerY - 95);
    //right point
    ctx.lineTo(centerX + 210, centerY - 75);
    //left point
    ctx.lineTo(centerX - 165, centerY - 65);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}
drawChop1();

function drawChop2(){
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d"); 
    
    ctx.beginPath();
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    //top point
    ctx.moveTo(centerX + 215, centerY - 130);
    //right point
    ctx.lineTo(centerX + 230, centerY - 115);
    //left point
    ctx.lineTo(centerX - 175, centerY - 55);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}
drawChop2();