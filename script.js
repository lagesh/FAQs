$(document).ready(() => {
  let $chevron = $('.icon');
  let $answer = $('.answer');

  $chevron.on('click', (event) => {
    $answer.slideToggle();
  })
})