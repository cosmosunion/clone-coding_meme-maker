const canvas = document.querySelector("canvas");

/**캔버스에 그림을 그릴때 사용 */
const ctx = canvas.getContext("2d");
d;
/** 선 굵기 input값 */
const lineWidthInput = document.querySelector("#line-width");
/*canvas에서 이미지의 퀄리티를 높이기 위해 width/height를 javascript에서만 수정*/
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidthInput.value;

let draw = false;
function startPainting() {
  draw = true;
}
function cancelPainting() {
  draw = false;
}
/**선 그리기 */
function onMove(event) {
  if (draw) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
