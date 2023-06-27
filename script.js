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

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);