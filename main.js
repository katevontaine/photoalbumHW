var pictures = [
// animals:
    {imgSrc1: 'animals/IMG_4610.jpg',
    imgSrc2: 'animals/IMG_4330.jpg',
    imgSrc3: 'animals/IMG_4611.jpg',
   caption:"animals",
   names: 'album1'},

// var flowers =
  {imgSrc1: 'flower/IMG_4876.jpg',
  imgSrc2: 'flower/IMG_4972.jpg',
  imgSrc3: 'flower/IMG_4929.jpg',
   caption: "flowers",
 names: 'album2'},

// var b&w =
    {imgSrc1:'blackandwhite/IMG_4070.jpg',
   imgSrc2: 'blackandwhite/IMG_4158.jpg',
   imgSrc3: 'blackandwhite/IMG_4332.jpg',
   caption:"black and white",
    names: 'album3'},


// var blueksy =
    {imgSrc1: 'bluesky/IMG_4351.jpg',
   imgSrc2: 'bluesky/IMG_4482.jpg',
   imgSrc3: 'bluesky/IMG_4877.jpg',
   caption:"blue sky",
   names: 'album4'},


// var bridge =
    {
  imgSrc1: 'bridge/IMG_5390.jpg',
   imgSrc2: 'bridge/IMG_2659.jpg',
   imgSrc3: 'bridge/IMG_3013.jpg',
   caption:"bridge",
   names: 'album5'},

// var magnolia =
    {
    imgSrc1: 'magnolia/IMG_3196.jpg',
   imgSrc2: 'magnolia/IMG_3182.jpg',
   imgSrc3: 'magnolia/IMG_3186.jpg',
   caption:"magnolia",
   names: 'album6'
 }
]
$('nav li > a').on('click', function(event){
  // event.preventDefault();
  var clickedSection = "." + $(this).attr('rel');
  console.log(clickedSection);
  var theAlbum = "";

  $(clickedSection).addClass('clickedElement');
  $(clickedSection).siblings('div').removeClass('clickedElement');
  $(clickedSection).siblings('div').addClass('hideElement');
  $(clickedSection).removeClass('hideElement');

  // var albumPics = _.pluck(pictures, function(item){
  //     return "." + item.names
  //   });
  //   $(albumPics).append(clickedSection);

});
// var albumPics = _.filter(pictures), function(currVal){
//       return "." + [name]});
//       $(clickedSection).append(albumPics);

// var albumPics = pictures.filter(function(currVal){
//       console.log("." + [names])});
//       // return "." + [name]});
//       $(clickedSection).append(albumPics);

  // var thePics = _.each(pictures, function(item, idx, arr){
  //       var myTmpl = _.template($('#albumTemplate').html());
  //       var myHtmlString = myTmpl(item);
  //     $(clickedSection).append(myHtmlString);
  //   });

var picsHTML = "";
$(document).ready(function () {

// });
//
// var imgSrc1 = pictures[0].imgSrc1;
// var imgSrc2 = pictures[0].imgSrc2;
// var imgSrc3 = pictures[0].imgSrc3;
// var caption = pictures[0].caption;
//
// var picDisplay =  _.each(pictures, function (currVal, idx, arr) {
//     return currVal.imgSrc1;
//     return currVal.imgSrc2;
//     return currVal.imgSrc3;
//     return currVal.caption
// });

var theAlbum = "";
var thePics = _.each(pictures, function(item, idx, arr){
      var myTmpl = _.template($('#albumTemplate').html());
      var myHtmlString = myTmpl(item);
    $('album1').append(myHtmlString);
  });

      // // "<div class='album'" + (idx +1)l + ">";
      // theAlbum += "<div class='clickedElement'>"
      // +"<h2>"
      // + item.caption
      // +"</h2>"
      // + "<img src='"
      // + item.imgSrc1
      // + "'>"
      // + "<img src='"
      // + item.imgSrc2
      // + "'>"
      // + "<img src='"
      // + item.imgSrc3
      // + "'>"
      // + "</div>"

      $('.clickedElement').html(theAlbum);

      // console.log(thePics);
      // $('.clickedSection').html(theAlbum);
