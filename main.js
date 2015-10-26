var pictures = [
// animals:
    {imgSrc1: 'animals/IMG_4610.jpg', imgSrc2: 'animals/IMG_4330.jpg', imgSrc3: 'animals/IMG_4611.jpg',
   caption:"ANIMAL FRIENDS",
   names: 'album1'},

// var flowers =
  {imgSrc1: 'flower/IMG_4876.jpg',
  imgSrc2: 'flower/IMG_4972.jpg',
  imgSrc3: 'flower/IMG_4929.jpg',
   caption: "FLOWERS",
 names: 'album2'},

// var b&w =
    {imgSrc1:'blackandwhite/IMG_4070.jpg',
   imgSrc2: 'blackandwhite/IMG_4158.jpg',
   imgSrc3: 'blackandwhite/IMG_4332.jpg',
   caption: "BLACK & WHITE",
    names: 'album3'},


// var blueksy =
    {imgSrc1: 'bluesky/IMG_4351.jpg',
   imgSrc2: 'bluesky/IMG_4482.jpg',
   imgSrc3: 'bluesky/IMG_4877.jpg',
   caption: "BLUE SKIES",
   names: 'album4'},


// var bridge =
    {
  imgSrc1: 'bridge/IMG_5390.jpg',
   imgSrc2: 'bridge/IMG_2659.jpg',
   imgSrc3: 'bridge/IMG_3013.jpg',
   caption:"COOPER RIVER BRIDGE",
   names: 'album5'},

// var magnolia =
    {
    imgSrc1: 'magnolia/IMG_3196.jpg',
   imgSrc2: 'magnolia/IMG_3182.jpg',
   imgSrc3: 'magnolia/IMG_3186.jpg',
   caption:"MAGNOLIAS",
   names: 'album6'
 }
]

var homePics = _.pluck(pictures, 'imgSrc1');
var homeDisplayString = "";
var homeDisplay = _.each(homePics, function (item, idx, arr){
  return homeDisplayString += "<img src='"
  + item
  + "'>"
  + "</div>"

});

$('.empty1').html(homeDisplayString);



$('nav li > a').on('click', function(event){
  // event.preventDefault();

  var clickedSection = "." + $(this).attr('rel');
  $(clickedSection).addClass('clickedElement');
  $(clickedSection).siblings('div').removeClass('clickedElement');
  $(clickedSection).siblings('div').addClass('hideElement');
  $(clickedSection).removeClass('hideElement');
  $('.empty1').hide();


  var albumPics = pictures.filter(function(el){
   return el.names === clickedSection.split(".")[1]
 });


   var myTmpl = _.template($('#albumTemplate').html());
   var htmlString = myTmpl(albumPics[0]);
    $(clickedSection).html(htmlString);



   });
   $(document).ready(function () {

});
