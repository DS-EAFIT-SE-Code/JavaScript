var indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
  var i;
  const img = document.querySelectorAll('img');

  if(e > img.length){indexValue = 1}
  if(e < 1){indexValue = img.length}
  for(i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  img[indexValue-1].style.display = "block";
  slider[indexValue-1].style.background = "white";


}
function headerClick(i){
    window.location = i;
}