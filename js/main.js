

// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(2000, function(){
        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    })
})

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})


// counter up ========================================================================================
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let started= false; //function started? no


window.onscroll =function(){
    if(window.scrollY >= (section.offsetTop-300)){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 3000/ goal);
}
// startCount(document.querySelectorAll(".nums .num")[0]);
// startCount(document.querySelectorAll(".nums .num")[1]);
// startCount(document.querySelectorAll(".nums .num")[2]);

// fixed navbar on scrolling=========================================================================
let nav = document.querySelector('.bg-light');
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 50){
        // nav.style.position="fixed";
        // nav.style.zIndex="99999";
        // nav.style.width="100%";
        // nav.style.top="0px";
        nav.classList.add('fixedNav');
    }else{
        nav.classList.remove('fixedNav');
    }
}
// setTimeout(fixNav, 3000);

