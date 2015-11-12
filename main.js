var pictures = [
// animals:
    {imgSrc1: 'images/grace hopper.jpg',
    imgSrc2: 'images/marissa.jpg',
    imgSrc3: 'images/susan.jpg',
   caption:"TECHNOLOGY",
   names: 'album1'},

// var flowers =
  {imgSrc1: 'images/marina.jpg',
  imgSrc2: 'images/kusama.jpg',
  imgSrc3: 'images/sophie.jpg',
   caption: "THE ARTS",
 names: 'album2'},

// var b&w =
    {imgSrc1:'images/elizabethholmes.jpg',
   imgSrc2: 'images/curie.jpg',
   imgSrc3: 'images/IMG_4332.jpg',
   caption: "SCIENCE",
    names: 'album3'},


// var blueksy =
    {imgSrc1: 'images/indra.jpg',
   imgSrc2: 'images/sheryl.jpg',
   imgSrc3: 'images/megw.jpg',
   caption: "BUSINESS",
   names: 'album4'},


// var bridge =
    {
  imgSrc1: 'images/rondarousey.jpg',
   imgSrc2: 'images/serenawilliams.jpg',
   imgSrc3: 'images/missyfranklin.jpg',
   caption:"ATHLETICS",
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
