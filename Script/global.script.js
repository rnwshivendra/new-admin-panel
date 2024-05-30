$("#chart,#icons,#register").hide();


$("#sideBar>button").on("click",function(){
    $("#dashboard,#chart,#icons,#register").hide();
  $($(this).attr("for")).show();
})