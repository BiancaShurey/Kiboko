//makes a slideshow of images
// code based on http://www.webmonkey.com/2010/02/make_a_javascript_slideshow/
//list of all the important variables
var interval = 1000; //rate at which image changes. 1000=1 second
var imageDir = "../images/slideshow/";//directory images are stored in
var imageNum = 0; //keeps track of images
imageArray = new Array(); //list of images
imageArray[imageNum++] = new imageItem(imageDir + "01.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "02.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "03.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "04.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "05.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "06.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "07.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "08.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "09.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "10.jpg");
var totalImages = imageArray.length; //total images
onload=switchImage('slideImg') //start slideshow when load


function imageItem(image_location) {
    //creates the location of the image and returns
    this.image_item = new Image();
    this.image_item.src = image_location;
    return(imageObj.image_item.src);
}
    
function getNextImage() {
    //grabs the next image
    imageNum=(imageNum+  1) % totalImages;
}

function switchImage(place) {
    //switches the images, recursive function
    var new_image = getNextImage();
    document[place].src = new_image;
    var recur_call = "switchImage('" + place + "')";
    timerID=setTimeout(recur_call,interval)
    
}

