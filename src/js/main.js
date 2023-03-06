// let burger = document.getElementById('#burger');
// function burgerOff() {
//     window.addEventListener('resize',function(e){
//         let vieportWidth = document.documentElement.clientWidth;
//         vieportWidth > 1024 ? document.querySelector('.header-container').classList.remove('mobile-menu') : false;
//     });
// }


    document.getElementById('burger').onclick = function() {
        document.querySelector('.header__body').classList.toggle('mobile-menu');
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
