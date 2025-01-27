let SnakePieces = document.getElementsByClassName('SnakePiece');
let SnakeContainer = document.querySelector('.SnakeContainer');

// function Move(event) {
//     for (let i = 0; i < SnakePieces.length; i++) {

//         let VerticalPosition = parseInt(SnakePieces[i].style.top || 0, 10);
//         let HorizontalPosition = parseInt(SnakePieces[i].style.left || 0, 10);

//         switch (event.key) {
//             case "ArrowUp":
//                 VerticalPosition -= 13;
//                 SnakeContainer.style.flexDirection = "column";

//                 break;

//             case "ArrowDown":
//                 VerticalPosition += 13;
//                 SnakeContainer.style.flexDirection = "column-reverse";
//                 break;

//             case "ArrowLeft":
//                 HorizontalPosition -= 13;
//                 SnakeContainer.style.flexDirection = "row";
//                 break;

//             case "ArrowRight":
//                 HorizontalPosition += 13;
//                 SnakeContainer.style.flexDirection = "row-reverse";
//                 break;
//         }

//         SnakePieces[i].style.top = `${VerticalPosition}px`;
//         SnakePieces[i].style.left = `${HorizontalPosition}px`;
//     }
// }
// document.addEventListener("keydown",Move);

let Direction = "";
function ChangeDirection(event){
    switch(event.key){
        case "ArrowUp":
            Direction!='down'? Direction = 'up': Direction = 'down';
            break;
        case "ArrowDown":
            Direction!='up'? Direction = 'down': Direction='up';
            break;
        case "ArrowLeft":
            Direction!='right'? Direction= 'left': Direction='right';
            break;
        case "ArrowRight":
            Direction!= 'left'? Direction = 'right':Direction="left";
            break;

    }
}
function Move() {
    for (let i = 0; i < SnakePieces.length; i++) {
        let SnakeHead = SnakePieces[0];
        // SnakeY = parseInt(SnakeHead.style.top|| 0, 10);
        // SnakeX = parseInt(SnakeHead.style.left|| 0, 10);
        // console.log(SnakeX);
        // console.log(SnakeY);


        let VerticalPosition = parseInt(SnakePieces[i].style.top || 0, 10);
        let HorizontalPosition = parseInt(SnakePieces[i].style.left || 0, 10);

        switch(Direction){
            case 'up':
                SnakeContainer.style.flexDirection = "column";
                
                VerticalPosition-=13;
                break;
            case 'down':
                SnakeContainer.style.flexDirection = "column-reverse";
                VerticalPosition+=13;
                break;
            case 'left':
                SnakeContainer.style.flexDirection = "row";
                HorizontalPosition-=13;
                break;
            case 'right':
                SnakeContainer.style.flexDirection = "row-reverse";
                HorizontalPosition+=13;
        }



        SnakePieces[i].style.top = `${VerticalPosition}px`;
        SnakePieces[i].style.left = `${HorizontalPosition}px`;
    }
}
document.addEventListener('keydown', ChangeDirection);
setInterval(Move, 200);




