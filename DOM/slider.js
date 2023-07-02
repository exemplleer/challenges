/*
В Bootstrap есть компонент Carousel. Этот слайдер устроен так же, как и все
остальное в Bootstrap. В верстке определяются атрибуты data, по которым
Bootstrap определяет карусель и оживляет ее.

На слайдере отображаются две стрелки — одна влево, другая вправо. Клики по
этим стрелкам приводят к перемотке слайдов по кругу. Если слайды
заканчиваются, то происходит переход от конца к началу или наоборот. С точки
зрения DOM происходит следующее:
- Класс active снимается с текущего элемента .carousel-item
- Активный элемент получает класс active

Реализуйте логику слайдера в функции, экспортированной по умолчанию.
Постройте свою логику так, чтобы можно было использовать на одной странице
любое количество компонентов carousel с любым количеством картинок внутри.

Решите задачу, используя методы jQuery.
*/

import $ from 'jquery';

$('.carousel-control-next').click((event) => {
  const target = $(event.currentTarget);
  const carousel = target.siblings('.carousel-inner');

  const currentSlide = carousel.find('.active');
  const nextSlide = currentSlide.next().length > 0
    ? currentSlide.next()
    : carousel.children().first();

  currentSlide.removeClass('active');
  nextSlide.addClass('active');
});

$('.carousel-control-prev').click((event) => {
  const target = $(event.currentTarget);
  const carousel = target.siblings('.carousel-inner');

  const currentSlide = carousel.find('.active');
  const nextSlide = currentSlide.prev().length > 0
    ? currentSlide.prev()
    : carousel.children().last();

  currentSlide.removeClass('active');
  nextSlide.addClass('active');
});

/*
$('a[data-slide]').click((e) => {
    const carousel = e.target.closest('[data-ride="carousel"]');
    const active = $('.carousel-item.active', carousel);
    const direction = e.currentTarget.dataset.slide;
    const map = {
      next: active.next().length > 0 ? active.next() : active.siblings().first(),
      prev: active.prev().length > 0 ? active.prev() : active.siblings().last(),
    };
    const newActive = map[direction];
    active.removeClass('active');
    newActive.addClass('active');
  });
*/
