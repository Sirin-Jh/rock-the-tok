// ==== wow ====
new WOW().init();

// ==== scroll ====
window.onload = () => {
  const Slider = function(pages) {
    let slides = [],
        count = 0,
        current = 0,
        touchstart = 0,
        animation_state = false;
    const init = () => {
      slides = pages.children;
      count = slides.length;
    }
    const gotoNum = (index) => {
      if((index != current) && !animation_state) {
        animation_state = true;
        setTimeout(() => animation_state = false, 500);
        current = index;
        for(let i = 0; i < count; i++) {
          slides[i].classList.remove('active');
          slides[i].style.bottom = (current - i) * 100 + '%';
          slides[current].classList.add('active');
        }
        if(slides[count-1].classList.contains('active')) {
          var minush = slides[count-1]. offsetHeight;
          slides[count-2].style.bottom = minush + 'px';
        }
      }
    }
    const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
    pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
    pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
    pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();
    init();
  }

  let pages = document.querySelector('.pages');
  let slider = new Slider(pages)
}

