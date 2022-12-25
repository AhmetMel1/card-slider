// initiation of the card's position , index,carouselInnerWidth,cardItemwidth,countItem and lastIndex
const DISPLAYED_INDEX = 3;
var cardIndex = DISPLAYED_INDEX;
var positionLeft = 0;
var carouselInnerWidth = 0;
var cardItemwidth = 0;
var countItem = 0;
var beginIndex = DISPLAYED_INDEX;
//accessing div that holds all slides in one
var cardSlider = document.querySelector("#cardSlider");
//console.log(cardSlider);

//Change values depend on screen changes
screenUpdate();

//slide item right to left if next button is clicked.
$('.carousel-control-next').on("click", function () {
    console.log("next clicks");
    //Index is greater than items count.
    if (cardIndex < countItem - 1) {
        //increase index for next.
        cardIndex++;
        console.log("cardIndex++: " + cardIndex);
        //specify the position where item is replaced. 
        positionLeft += cardItemwidth + 6;
        //replace it by animating item to specified position
        $('.carousel-inner').animate({ scrollLeft: positionLeft }, 600);
    }
    else {
        //end of the slider
        console.log("Index sonu");
    }

    //slide item left to right if prev button is clicked. 

});
$('.carousel-control-prev').on("click", function () {
    console.log("prev clicks");
    //Index is smaller than items displayed last index.
    if (cardIndex > firstIndex) {
        //decrease index for next.
        cardIndex--;
        console.log("cardIndex--: " + cardIndex);
        //specify the position where item is replaced. 
        positionLeft -= cardItemwidth + 6;
        //replace it by animating item to specified position
        $('.carousel-inner').animate({ scrollLeft: positionLeft }, 600);
    }
    else {
        //end of the slider
        console.log("Index sonu");
    }

});
function screenUpdate() {

    //if screen size is greater than tablet
    if (window.matchMedia("(min-width: 768px)").matches) {
        console.log("WEB SCREEN");
        calculateWidths();
        firstIndex = DISPLAYED_INDEX;
        goToCurrentIndex(cardIndex - DISPLAYED_INDEX);
    }
    //mobile screen
    else {
        console.log("MOBİL SCREEN");
        calculateWidths();
        goToCurrentIndex(cardIndex);
        //
        firstIndex = 0;
    }

}
function calculateWidths(){
    //get the size of carouselInner's width that contains all slide items
    carouselInnerWidth = $('.carousel-inner')[0].scrollWidth;
    console.log("carouselInnerWidth: " + carouselInnerWidth);
    //get the size of card item's width in order to calculating the count of item 
    cardItemwidth = $('.carousel-item').width();
    console.log("cardItemwidth: " + cardItemwidth);
    //carouselInnerWidth is divided by cardItemwidth because of calculating the count of item 
    countItem = Math.floor(carouselInnerWidth / cardItemwidth);
    console.log("countItem:" + countItem);
}

function goToCurrentIndex(currentIndex) {
    //calculate spaces in order to having scroll position 
    totalMargins = ((currentIndex + 1) * 3);
    console.log("totalMargins:" + totalMargins);
    totalItemWidth = (currentIndex * cardItemwidth);
    console.log("totalItemWidth:" + totalItemWidth);
    //calculate totaly
    positionLeft = totalMargins + totalItemWidth;
    console.log("goToCurrentIndex:" + positionLeft);
    //slide item  to position where it stayed on witout animation
    $('.carousel-inner').animate({ scrollLeft: positionLeft }, 0);
}


