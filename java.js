$('.card-div').mouseover(function() {
    $(this).addClass('state-one')
    $(this ).addClass('text-white')
})
$('.card-div').mouseout(function() {
    $(this).removeClass('state-one')
    $(this).addClass('state-two')
    $(this ).removeClass('text-white')
    setTimeout(function() {
    $('.card-div').removeClass('state-two')
    }, 500)

})

var progress=0;
var progress2=0;
var progress3=0;
var navar_one=document.getElementById("progress-bar-one")
var navar_two=document.getElementById("progress-bar-two")
var navar_three=document.getElementById("progress-bar-three")
var time = setInterval(() =>{
    if(progress<90){
        progress++
        navar_one.style.width=progress+"%"
    }
    if(progress2<70){
        progress2++
        navar_two.style.width=progress2+"%"
    }
    if(progress3<60){
        progress3++
        navar_three.style.width=progress3+"%"
    }
},.3)

    var number1=0;
    var number2=0;
    var number3=0;
    var time = setInterval(() => {
        if(number1 < 90 ){
            number1++
            $('.text-navar1').text(number1)+"%"
        }
        if(number2 < 70 ){
            number2++
            $('.text-navar2').text(number2)+"%"
        }
        if(number3 < 60 ){
            number3++
            $('.text-navar3').text(number3)+"%"
        }
    }, 1);


    $(document).ready(
        function(){
           $(".answer-q-home").slideUp()
        }
     )
     $(".box-q-home").click(
        function(){
           $(this).find(".answer-q-home").slideToggle()
           $(this).find(".q-home-icon").toggleClass("bi-caret-down-fill bi-caret-up-fill")
     
        }
     )



let currentPage = 0;
const container = document.getElementById('container');
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
function scrollPages() {
    // پنهان کردن صفحه قبلی به صورت نرم
    pages[currentPage].classList.add('hidden');
    // به روز رسانی شماره صفحه و حرکت به صفحه بعد
    currentPage = (currentPage + 1) % totalPages;
    // حرکت به صفحه بعدی
    container.style.transform = `translateX(-${currentPage * 100}vw)`;
    // نمایش صفحه جدید با انیمیشن نرم
    setTimeout(() => {
        pages[currentPage].classList.remove('hidden');
    }, 1500);  // مدت زمان انیمیشن انتقال
}
setInterval(scrollPages, 4000); // تغییر صفحه هر 4 ثانیه


// document.getElementById("genderInput").addEventListener("click", function () {
//     let dropdown = document.getElementById("genderDropdown");
//     dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
// });

// function selectGender(value) {
//     document.getElementById("genderInput").value = value;
//     document.getElementById("genderDropdown").style.display = "none";
// }

// // بستن dropdown وقتی خارج از آن کلیک شود
// document.addEventListener("click", function (event) {
//     let dropdown = document.getElementById("genderDropdown");
//     let input = document.getElementById("genderInput");
//     if (!input.contains(event.target) && !dropdown.contains(event.target)) {
//         dropdown.style.display = "none";
//     }
// });



function selectGender(gender) {
    $('#genderInput').val(gender);
    $('#genderDropdown').hide();
}

// Function to select blood pressure
function selectBloodPressure(level) {
    $('#bloodPressureInput').val(level);
    $('#bloodPressureDropdown').hide();
}

// Function to select cholesterol level
function selectCholesterol(level) {
    $('#cholesterolInput').val(level);
    $('#cholesterolDropdown').hide();
}

// jQuery to show/hide dropdown content
$(document).ready(function() {
    $('.dropdown').click(function(event) {
        var dropdownId = $(this).children('.dropdown-content').attr('id');
        $('#' + dropdownId).toggle();
        event.stopPropagation(); // Prevent clicking outside from closing dropdown
    });

    // Close dropdown if clicking outside
    $(document).click(function() {
        $('.dropdown-content').hide();
    });
});