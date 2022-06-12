//Remove margins and paddings to all elements
const allElems = document.querySelectorAll("*")
allElems.forEach(elem=>{
  elem.style.margin = "0";
  elem.style.padding = "0";
  elem.style.boxSizing = "border-box"
})

const body = document.querySelector('body');

const containerStyles = {
  lineHeight: '1.4',
  overflow: 'hidden'
}
const imgContainer = document.querySelector('.container .imgContainer');
console.log(imgContainer)
const imgContainerStyles = {
  
}

imgContainer.style.minHeight = '100vh'
imgContainer.style.width = "100%"
imgContainer.style.backgroundImage = "url(./img/img1.avif)"
imgContainer.style.backgroundSize = "cover"
imgContainer.style.backgroundPosition = "center";
//button styles
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
btnLeft.style.position = 'absolute';
btnLeft.style.top = '50%'
btnLeft.style.left = '20px'
btnLeft.style.height = '50px'
btnLeft.style.width = '50px'
btnLeft.style.fontSize = '2.5rem'
btnLeft.style.transform = 'translate(-50%, -50%)'

btnRight.style.position = 'absolute';
btnRight.style.top = '50%';
btnRight.style.right = '20px';
btnRight.style.transform = 'translate(50%, -50%)';
btnRight.style.height = '50px';
btnRight.style.width = '50px';
btnRight.style.fontSize = '2.5rem'

//Get All images in Array
const pictures = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5"
]


//Get Button And Images Container
const buttons = document.querySelectorAll('.btn');
const imageDiv = document.querySelector('.imgContainer');
let counter = 0;
//Now Start working Images Sliders
buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    //For Left button
    if(button.classList.contains('btn-left')) {
      counter--;
      if(counter < 0) {
        counter = pictures.length - 1;
      }
      imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.avif')`
    }
    //For Right button
    if(button.classList.contains("btn-right")) {
      counter++;
      if(counter > pictures.length - 1) {
        counter = 0;
      }
      imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.avif')`
    }
  })
})