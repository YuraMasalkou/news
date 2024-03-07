import "../src/index.css";
import "../src/adaptiv.css";

window.onload = function () {

// скрипт кнопки
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn') || e.target.parentNode.classList.contains('btn') || e.target.parentNode.classList.contains('btn-content')) {

            document.getElementById('btnCont').style.display = "none";
            document.getElementById('loader').style.display = "block";
            document.getElementById('btn').disabled = true;
        }
    })
    // картинка
    document.addEventListener('click', function (e) {
        console.log(e.target.parentNode.childNodes[1].getAttribute('src'))
        if (e.target.classList.contains('article-image') || e.target.parentNode.classList.contains('article-image')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');

            if (e.target.getAttribute('src')) {
                let src = e.target.getAttribute('src');
                document.querySelector('.icons').setAttribute('src', src);
            } else {
                let src = e.target.parentNode.childNodes[1].getAttribute('src');
                document.querySelector('.icons').setAttribute('src', src);
            }


        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');

        }

    })

}