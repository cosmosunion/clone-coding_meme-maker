const canvas = document.querySelector("canvas");

/**캔버스에 그림을 그릴때 사용 */
const ctx = canvas.getContext("2d");

/*canvas에서 이미지의 퀄리티를 높이기 위해 width/height를 javascript에서만 수정*/
canvas.width = 800;
canvas.height = 800;

/* ctx.fillRect(x,y,width,height) */
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();

/* ctx.arc(x,y,radius,start-angle,end-angle) */
/* 3시=0*Math.PI / 6시=0.5*Math.PI / 9시=1*Math.PI / 12시=1.5*Math.PI */
/* 새 경로(path) 설정 : ctx.beginPath() */
ctx.beginPath();
ctx.arc(200, 200, 15, 0.5 * Math.PI, 2 * Math.PI);
ctx.fill();

/* 예제 */
ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(450, 300);
ctx.lineTo(450, 350);
ctx.arc(450, 300, 50, 0.5 * Math.PI, 2 * Math.PI);
ctx.fill();
