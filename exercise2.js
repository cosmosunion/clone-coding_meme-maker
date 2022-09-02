const canvas = document.querySelector("canvas");

/**캔버스에 그림을 그릴때 사용 */
const ctx = canvas.getContext("2d");

/*canvas에서 이미지의 퀄리티를 높이기 위해 width/height를 javascript에서만 수정*/
canvas.width = 800;
canvas.height = 800;

colors = ["red", "yello", "blue", "black", "white"];

function makeLines(event) {
  ctx.beginPath(); /* otherwise 마우스 움직일때마다 모든 선 컬러 변경됨 */
  ctx.moveTo(30, 30);
  ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousemove", makeLines);
