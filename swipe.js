// taken from layerstest.html
// note: we're still missing the big left and right overlay areas
// where you can tap to move forwards or backwards

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          //alert("left swipe" + xDown + " Y " + yDown);
          nextMove()
            /* left swipe */
        } else {
          /*alert("right swipe" + xDown + " Y " + yDown);*/
          prevMove()
            /* right swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
          /*alert("up swipe" + xDown + " Y " + yDown);*/
        } else {
            /* down swipe */
          /*alert("down swipe" + xDown + " Y " + yDown);	 */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
