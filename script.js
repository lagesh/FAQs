
/*
$(document).ready(() => {
  let $chevron = $('.icon');
  let $answer = $('.answer');

  $chevron.on('click', (event) => {
    $answer.slideToggle();
  })
})
*/

/*let icons = document.querySelectorAll('.icon');
let answers = document.querySelectorAll('.answer');
*/


let icon = document.getElementsByClassName("icon");
let i;

for (i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {

    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}