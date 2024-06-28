let burger = document.getElementById('#burger');

    window.addEventListener('resize',function(e){
        let vieportWidth = document.documentElement.clientWidth;
        // console.log(vieportWidth);
        vieportWidth > 1024 ? document.querySelector('.header__body').classList.remove('mobile-menu') : false;
    });



    document.getElementById('burger').onclick = function() {
        document.querySelector('.header__container').classList.toggle('mobile-menu');
        document.querySelector('body').classList.toggle('no_scroll');
    }

    document.querySelectorAll(".main-tabs__item").forEach(item => {
        // console.log("work")
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log("work_1")
            const id = e.target.getAttribute('href').replace('#','');

            document.querySelectorAll('.main-tabs__item').forEach(child => {
                child.classList.remove('main-tabs__item-active')
            });

            document.querySelectorAll('.main-tabs__block').forEach(child => {
                child.classList.remove('main-tabs__block-active')
            });

            item.classList.add("main-tabs__item-active");

            document.getElementById(id).classList.add("main-tabs__block-active");
        })
    })


    document.querySelectorAll(".main-faq__item").forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle("answer-open");
        })
    });



    let promocodes = document.querySelectorAll('.promocode');
    // console.log(promocodes);
    //promocode-block-copy
    promocodes.forEach(promocode => {

        promocode.addEventListener('click', (e) => {

            let promocodeInput = promocode.querySelector('.main-promocode');
            let promocodeCopy = promocode.querySelector('.promocode-block-copy');
            let promocodeRef = promocode.querySelector('.promocode-block-ref');

            console.log(promocodeInput);

            promocodeInput.removeAttribute('disabled');
            promocodeInput.select();
            document.execCommand("copy");
            promocodeInput.value = "Copied!";
            setTimeout(() => promocodeInput.value = promocodeInput.getAttribute("data-promocode"), 2500);
            console.log(promocodeInput.value);

            promocodeInput.setAttribute("disabled", "disabled");
            promocodeRef.style.display = 'flex';
            promocodeCopy.style.display = 'none';

        });

        let btn = promocode.querySelector('.promo-code a');
        let label = promocode.querySelector('.promo-code div > span')
        if (btn !== null) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();

                promocode.select();
                promocode.setSelectionRange(0, 99999); /* For mobile devices */
                document.execCommand("copy");

                label.style.opacity = '1';
                setTimeout(() => {
                    label.style.opacity = '0'
                }, 3000);
            })
        }
    });




    // получаем массив всех вкладок
const tabs = document.querySelectorAll(".tabs__tab");
// получаем массив всех блоков с содержимым вкладок
const contents = document.querySelectorAll(".tabs__content");
 
// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tabs__tab--active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tabs__tab--active");
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("tabs__content--active");
		}
		// добавляем активный класс
		contents[i].classList.add("tabs__content--active");
 
	});
}