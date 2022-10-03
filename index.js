const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const colorPicker = document.querySelector("#color-picker");
const styleBtn = document.querySelector("#style-button");
const eraseBtn = document.querySelector("#erase-button");
const destroyBtn = document.querySelector("#destroy-button");
const imageInput = document.querySelector("#image-file");
const textInput = document.querySelector("#text-input");
const saveImageBtn = document.querySelector("#save-image");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

/*선 그리기*/
let isPainting = false;
function startPainting() {
  isPainting = true;
}

function stopPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

/*선 두께 변경하기*/
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

/*색상 변경하기*/
function onLineColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

/*그리기(false)/채우기(true) 모드 변경하기*/
let isFilling = false;

function onModeChangeBtn() {
  if (isFilling) {
    isFilling = false;
    styleBtn.innerText = "채우기";
  } else {
    isFilling = true;
    styleBtn.innerText = "그리기";
  }
}

function fillBgColor() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

/*지우기, 전체삭제*/
function onErase() {
  ctx.strokeStyle = "white";
  isFilling = false;
  styleBtn.innerText = "채우기";
}

function onDestroy() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.restore();
}

/* 이미지 그리기 */

function onImageChange(event) {
  const file = event.target.files[0];
  const fileURL = URL.createObjectURL(file);
  const image = new Image();
  image.src = fileURL;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
}

/* 텍스트 추가하기 */
function onDoubleClick(event) {
  const newText = textInput.value;
  if (newText !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "30px sans-serif";
    ctx.strokeText(newText, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

/* 캔버스 이미지 파일로 저장하기 */
function onSaveClick() {
  const imageURL = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = imageURL;
  a.setAttribute("download", "myDrawing.png");
  a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", fillBgColor);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
colorPicker.addEventListener("change", onLineColorChange);
styleBtn.addEventListener("click", onModeChangeBtn);
eraseBtn.addEventListener("click", onErase);
destroyBtn.addEventListener("click", onDestroy);
imageInput.addEventListener("change", onImageChange);
saveImageBtn.addEventListener("click", onSaveClick);
