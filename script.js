// $('#icon-search').click(() => {
//     console.log('Vous avez cliqué');
//     $('#container-search').css('height', '300px')
//     $('#container-search').css('transition', 'all 0.3s ease')
// });

$("#icon-search").click(function () {
  var newDiv = $("<div>").text("test");
  if ($("#container-search").height() !== 0) {
    $("#container-search").animate(
      {
        height: 0,
      },
      300
    );
  } else {
    $("#container-search").animate(
      {
        height: "150px",
      },
      300
    );
  }
});

$("#close").click(function () {
  $("#container-search").animate(
    {
      height: 0,
    },
    300
  );
});
