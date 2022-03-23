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

