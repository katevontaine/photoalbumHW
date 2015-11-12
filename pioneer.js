hoverContent: function(){
  var picObj = _.pluck(pictureObj.imgSrc1);
  var objDisplay = "";
  var objString = _.each(picObj, function(item, idx, arr){
      console.log(item);
      return objString + "img src='"
      + item
      +"'>";
  });
  .html();

//add event listener to hover to display decription and name


var pictureObj =
{

imgSrc1:{

      pic:'images/misty.jpeg',
      name: 'Misty Copeland',
      descrip:"Principal Dancer with the American Ballet Theatre"

    },

    // imgSrc1{
    //
    //       pic:'images/cyd.jpeg',
    //       name: 'Misty Copeland',
    //       descrip:"Principal Dancer with the American Ballet Theatre"
    //
    //     },
    //     imgSrc1{
    //
    //           pic:'images/martha.jpeg',
    //           name: 'Misty Copeland',
    //           descrip:"Principal Dancer with the American Ballet Theatre"
    //
    //         },

caption:"DANCE",
names: 'album6'
}
