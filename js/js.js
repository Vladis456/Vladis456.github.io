let burger = document.querySelector('.header__burger')
let BurgerActive = new Boolean(false)
const screenWidth = window.screen.width
const screenHeight = window.screen.height
console.log(screenHeight, screenWidth)
burger.addEventListener('click', ()=> {
	if (BurgerActive == false) {
		document.getElementsByClassName('header__burger')[0].style="margin-right: 150px"
		document.getElementsByClassName('header__menu')[0].style="display: block"
		document.getElementsByClassName('logo__text')[0].style="display: none"
		BurgerActive = true
    console.log(BurgerActive)
	}
	else if (BurgerActive == true) {
		document.getElementsByClassName('header__burger')[0].style="margin-right: 0px"
		
		setTimeout(timer, 450)
		BurgerActive = false
	};
	function timer() {
    if (document.documentElement.clientWidth < 922)
    document.getElementsByClassName('header__menu')[0].style="display: none"
		document.getElementsByClassName('logo__text')[0].style="display: block"
    
		
	}
})
burger.addEventListener('click', ()=> {
	if (BurgerActive == false, document.documentElement.clientWidth > 922 ) {
		document.getElementsByClassName('header__burger')[0].style="margin-right: 0px"
		document.getElementsByClassName('header__menu')[0].style="display: flex"
		document.getElementsByClassName('logo__text')[0].style="display: none"
		BurgerActive = true
    console.log(BurgerActive)
	}
	else if (BurgerActive == true) {
		// document.getElementsByClassName('header__burger')[0].style="margin-right: 0px"
		
		
		// BurgerActive = false
	};
	
})

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
	