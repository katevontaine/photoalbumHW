$(document).ready(function () {
   albumPage.init();
});

var albumPage = {
  init: function() {
    albumPage.styling();
    albumPage.events();


  },
  events: function() {
    $('nav li > a').on('click', function(event) {
      var clickedSection = "." + $(this).attr('rel');
      albumPage.myTemplateee(clickedSection);
      $(clickedSection).addClass('clickedElement');
      $(clickedSection).siblings('div').removeClass('clickedElement');
      $(clickedSection).siblings('div').addClass('hideElement');
      $(clickedSection).removeClass('hideElement');
      $('.empty1').hide();
   });

     $('a img').on('click', function(event){
       console.log(event.target);
        var clickedImg = "." + $(this).attr('rel');
        console.log(clickedImg);
        albumPage.myTemplateee(clickedImg);
        $(clickedImg).addClass('clickedElement');
        $('.empty1').hide();
     })
  },
  styling: function() {
    albumPage.stringToDisplay();
  },

  stringToDisplay: function(){
    var homePics = _.pluck(pictures, 'imgSrc1');
    var homeDisplayString = "";
    var homeDisplay = _.each(homePics, function (item, idx, arr){
      console.log(item);
      return homeDisplayString += "<a href ='#'>"
      + "<img src='"
      + item
      +"' rel='"
      + pictures[idx].names
      + "'></a>"
      + "</div>"
    });
    $('.empty1').html(homeDisplayString);

},



  myTemplateee: function(clickedSection){
      var albumPics = pictures.filter(function(el){
        return el.names === clickedSection.split(".")[1]
      });
      var myTmpl = _.template($('#albumTemplate').html());
      var htmlString = myTmpl(albumPics[0]);
      $(clickedSection).html(htmlString);
  },

}



var pictures = [
// animals:
{imgSrc1: 'images/safra.jpg',
imgSrc2: 'images/marissa.jpg',
imgSrc3: 'images/susan.jpeg',
caption:"TECHNOLOGY",
names: 'album1'},

// var flowers =
{imgSrc1: 'images/marina.png',
imgSrc2: 'images/kusama.jpg',
imgSrc3: 'images/sophie.jpg',
 caption: "THE ARTS",
names: 'album2'},

// var b&w =
{imgSrc1:'images/elizabethholmes.jpg',
imgSrc2: 'images/curie.jpg',
imgSrc3: 'images/grace hopper.jpg',
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
    imgSrc1: 'images/misty.jpeg',
   imgSrc2: 'images/cyd.jpg',
   imgSrc3: 'images/martha.jpg',
   caption:"DANCE",
   names: 'album6'
 }
]
