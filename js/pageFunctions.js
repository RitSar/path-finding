$("#menu-toggler").on("click", ()=>{
  if($('#menu').css('display') == 'none') {
    $("#menu").show(200);
    console.log("yes");
  }
  else $("#menu").hide(200)
})