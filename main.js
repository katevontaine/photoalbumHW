// var pictures = [
//animals
//     {imgSrc1: 'animals/IMG_4330.jpg'},
//     {imgSrc2: 'animals/IMG_4610.jpg'},
//     {imgSrc3: 'animals/IMG_4611.jpg'},
// flowers
//   {imgSrc4: 'flower/IMG_4876.jpg'},
//   {imgSrc5: 'flower/IMG_4929.jpg'},
//   {imgSrc6: 'flower/IMG_4972.jpg'},
//   {imgSrc7: 'flower/IMG_4973.jpg'},
//   {imgSrc8: 'flower/IMG_5216.jpg'},
//   {imgSrc9: 'flower/IMG_5330.jpg'},
//b&w
//    {imgSrc10: blackandwhite/IMG_4070.jpg},
//    {imgSrc11: blackandwhite/IMG_4158.jpg},
//    {imgSrc12: blackandwhite/IMG_4332.jpg}
// ]


$('nav li > a').on('click', function(event){
  // event.preventDefault();
  var clickedSection = "." + $(this).attr('rel');
  console.log(clickedSection);
  $(clickedSection).addClass('clickedElement');
  $(clickedSection).siblings('div').removeClass('clickedElement');
});
