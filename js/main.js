$(document).ready(function(){
  $('.dishes__carousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
  });
});

$(document).ready(function(){
  $('.delivery__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
  });
});

const btns = document.querySelectorAll('.card__counter-btn');

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.card__counter-value');
    const currentValue = +inp.value;
    let newValue;

    if(direction === "plus") {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    }

    inp.value = newValue;
  })
})