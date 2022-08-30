const canvas = document.querySelector("canvas");

/**캔버스에 그림을 그릴때 사용 */
const ctx = canvas.getContext("2d");

/*canvas에서 이미지의 퀄리티를 높이기 위해 width/height를 javascript에서만 수정*/
canvas.width = 800;
canvas.height = 800;

/*ctx.fillR ect(x,y,width,height)*/
ctx.fillRect(50, 50, 100, 100);
