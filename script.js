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

// window.addEventListener('scroll', function() {
//   var maDiv = document.querySelector('.description');
//   var position = maDiv.getBoundingClientRect();

//   if (position.top < window.innerHeight && position.bottom >= 0) {
//     maDiv.style.opacity = 1;
//     maDiv.style.transform = 'translateY(0px)';
//   } else {
//     maDiv.style.opacity = 0;
//     maDiv.style.transform = 'translateY(-300px)';
//   }
// });

const animatedElements = document.querySelectorAll(".animated");
const animatedElementsRight = document.querySelectorAll(".animated-right");

window.addEventListener("scroll", animate);

function animate() {
  animatedElements.forEach((elem) => {
    const distView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distView < 0) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });

  animatedElementsRight.forEach((elem) => {
    const distView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distView < 0) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
