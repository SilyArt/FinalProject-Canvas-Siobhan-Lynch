//-----------------------MYSTIC EYE--------------

function drawEye(){
  const canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  canvas.style.backgroundColor = "black";

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        } else {
            const para = document.querySelector('.unsupported');
            para.textContent = 'Browser unsupported for HTML5 Canvas';
    }

    ctx.beginPath();
    ctx.arc(300, 200, 100, 0, Math.PI * 2)
    
    ctx.moveTo(300, 150); 
    ctx.lineTo(346, 220); //right point
    ctx.lineTo(255, 220); //left point
    ctx.lineTo(300, 150); //top point

    ctx.moveTo(300, 250);
    ctx.lineTo(255, 177); //left point
    ctx.lineTo(345, 177); //right point
    ctx.lineTo(300, 250); //top point

    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  }
drawEye()


//-----------------------TRIANGLES--------------
function drawTri(){
  const canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.moveTo(0, 200); 
    ctx.lineTo(270, 200); 
    ctx.lineTo(80, 80); 
    ctx.lineTo(80, 320); 
    ctx.lineTo(270, 200);

    ctx.moveTo(240, 120); 
    ctx.lineTo(0, 200);
    ctx.lineTo(240, 280);

    ctx.moveTo(600, 200);
    ctx.lineTo(332, 200);
    ctx.lineTo(520, 80); 
    ctx.lineTo(520, 320); 
    ctx.lineTo(332, 200);

    ctx.moveTo(360, 120);
    ctx.lineTo(600, 200);
    ctx.lineTo(360, 280);

    ctx.font = '60px cursive';
    ctx.strokeText('Awaken', 200, 70)

    ctx.strokeStyle = "magenta";
    ctx.stroke();
  }
drawTri()

//-----------------------STAR & CIRCLES--------------
function drawStar(){
  const canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI * 2)
    
    ctx.moveTo(300, 150); 
    ctx.lineTo(346, 220); //right point
    ctx.lineTo(255, 220); //left point
    ctx.lineTo(300, 150); //top point

    ctx.moveTo(300, 250);
    ctx.lineTo(255, 177); //left point
    ctx.lineTo(345, 177); //right point
    ctx.lineTo(300, 250); //top point

    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.strokeStyle = "purple";
    ctx.stroke();
  }
drawStar()

function drawC2(){
  const canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(80, 200);
    ctx.arc(80, 200, 25, 0, Math.PI * 2)
    ctx.moveTo(520, 200);
    ctx.arc(520, 200, 25, 0, Math.PI * 2)
    ctx.strokeStyle = "orange";
    ctx.stroke();
}
drawC2();