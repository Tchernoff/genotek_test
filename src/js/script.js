function openDropdown(target) {
  const arrow = target.children[1];
  const content = target.nextElementSibling;
  arrow.classList.toggle('dropdown__arrow_open');
  content.classList.toggle('dropdown__content_open');
  content.scrollIntoView();
}

$(document).ready(function() {

  $('#loginInput').on('focus', function(){
    $('#passwordCloseButton').removeClass('form__icon-button_open');
    $(this).next().addClass('form__icon-button_open');
  });

  $('#loginCloseButton').click(function() {
    $(this).prev().val('');
  });

  $('#passwordInput').on('focus', function(){
    $('#loginCloseButton').removeClass('form__icon-button_open');
    $(this).next().addClass('form__icon-button_open');
  });

  $('#passwordCloseButton').click(function() {
    $(this).prev().val('');
  });

  $('.wrapper').click(function() {
    event.stopPropagation();
  })

  $(document).click(() => {
    if ($('.form__icon-button').hasClass('form__icon-button_open')) {
      $('.form__icon-button').removeClass('form__icon-button_open');
      $('body').css('overflow', 'auto');
    }
  });
});