//-----------------------CYAN CIRCLE----------
function drawC(){
    const canvas = document.getElementById("canvas4");
    let ctx = canvas.getContext("2d");
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            } else {
                const para = document.querySelector('.unsupported');
                para.textContent = 'Browser unsupported for HTML5 Canvas';
        }
    
    ctx.beginPath();
    const radius = 110;
//------ROW 1
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.arc(450, 0, radius, 0, Math.PI * 2);
//------ROW 2
    ctx.arc(150, 200, radius, 0, Math.PI * 2);
    ctx.arc(600, 200, radius, 0, Math.PI * 2);
//------ROW 3
    ctx.arc(300, 400, radius, 0, Math.PI * 2);

    ctx.fillStyle = "rgb(0, 255, 255, 0.5)";
    ctx.fill();
}
drawC();