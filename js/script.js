//Работа слайдера
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Функция делает видимым блок DIV
function completFunc() {
    let div_completed = document.querySelector('.div_completed');
    div_completed.style = "display:inline";
    setTimeout(timeOff, 4000);
}

//Функция делает невидимым блок DIV
function timeOff() {
    let div_completed = document.querySelector('.div_completed');
    div_completed.style = "display:none";
}

//Проверка валидности формы
let form_inputs = document.querySelectorAll('input[data-rule]');
for (let input of form_inputs) {
    input.addEventListener('blur', function () {
        let rule = this.dataset.rule;
        let value = this.value;
        let check;
        switch (rule) {
            case 'text':
                check = /^[a-zA-Z_ ]*$/.test(value);
                break;

            case 'date':
                check = /^\d+$/.test(value);
                break;
        }
        this.classList.remove('in_put-border');
        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check) {
            this.classList.add('valid');
        }
        else {
            this.classList.add('invalid');
        }

    });

}

//Удаление файла из прикрепленных
// function deleting_a_picture() {
//     document.getElementById("#in_file").splice(value);
//     document.querySelector(".info_file").remove();
// }


//Отображение загруженного изображения и его данных. Разблокирование кнопки для отправки формы.
in_file.onchange = evt => {
    const [file] = in_file.files
    let info_file = document.querySelector('.info_file');
    let btn = document.querySelector('.btn');
    let fst_tx = document.querySelector('.fst_tx');
    let snd_tx = document.querySelector('.snd_tx');
    let in_files = document.getElementById('in_file').files;
    if (file) {
        blah.src = URL.createObjectURL(file)
        info_file.style = 'display: block';
        btn.removeAttribute('disabled');
        btn.style.cssText = `margin-top: 48px; background: #8E43ED;`
        for (let in_file of in_files) {
            fst_tx.innerHTML = in_file.name;
            snd_tx.innerHTML = in_file.size + ' bytes';
        }
    }
}
