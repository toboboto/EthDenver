  newDivs = `
  <div class="testimonial">
    <h1></h1>
    <div class="line"></div>
    <!-- arrow wrapper contains the review and the arrows -->
    <div class="arrow-wrapper">
      <!-- review section -->
      <div id="reviewWrap" class="review-wrap">
        <div id="imgBox"></div>
        <div id="name"></div>
	<div id="title"></div>
        <div id="description"></div>
        <div id="urlButton"</div>
      </div>
      <!-- left arrow -->
      <div class="left-arrow-wrap">
        <div class="arrow"></div>
      </div>
      <!-- right arrow -->
      <div class="right-arrow-wrap">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
  <hr>
  <div id="target"></div>
`;

//heading.innerHTML = "";
middle.innerHTML = newDivs; 

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'carousel1.css';
    link.media = 'all';
    head.appendChild(link);
}

var cssId = 'myCss2';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/carousel.css';
    link.media = 'all';
    head.appendChild(link);
}
 
    const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
    const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
    const imgBox = document.getElementById("imgBox");
    const name = document.getElementById("name");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
   
   var t;
   var slides;

   fetch("web3Rules.js")    
   // fetch("web3Start.js?4124")
	.then( x => x.json())
        .then( y => 
    {

    t = y
    slides = t.slides
    len = slides.length -1
    console.log(len)
     
    // set the first person
    let currentCard = 0;
    imgBox.style.backgroundImage = slides[0].photo;
    name.innerText = slides[0].name;
    description.innerHTML = slides[0].description;
    messageBody = slides[0].body
    urlButton.innerHTML = `<button 
      onclick="alert(messageBody)"><h2>&nbsp; ${slides[0].button}  &nbsp;</h2></button><br> <br>`



    function slide(thisSlide, personNumber) {
      let reviewWrapWidth = reviewWrap.offsetWidth + "px";
      let descriptionHeight = description.offsetHeight + "px";
      //(+ or -)
      let side1symbol = thisSlide === "left" ? "" : "-";
      let side2symbol = thisSlide === "left" ? "-" : "";


      setTimeout(() => {
        imgBox.style.backgroundImage = slides[personNumber].photo;
      }, 0);
      setTimeout(() => {
        description.style.height =  descriptionHeight;
      }, 100);
      setTimeout(() => {
        name.innerText = slides[personNumber].name;

      }, 200);
      setTimeout(() => {
        description.innerText = slides[personNumber].description;
    messageBody = slides[personNumber].body
    urlButton.innerHTML = `<button  
      onclick="alert(messageBody)"><h2>&nbsp; ${slides[personNumber].button}  &nbsp;</h2></button><br> <br>`

      }, 300);
      setTimeout(() => {

//        urlButton.innerHTML = "<button src=" + slides[personNumber].url + ">" + slides[personNumber].button +  "</a>";
    /*    urlButton.innerHTML = `<br><button tag=${x} id=${x} 
                          name=${slides[personNumber].url}>
                         ${slides[personNumber].button}
                         </button>`;
*/
      }, 400);
    }

    function setNextCardLeft() {
      if (currentCard === 0) 
              currentCard = len;
       else 
              currentCard--;

      slide("left", currentCard);
    }

    function setNextCardRight() {
      if (currentCard === len) 
        currentCard = 0;
       else 
        currentCard++;

      slide("right", currentCard);
    }

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);

  })

