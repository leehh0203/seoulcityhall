// //상단 셀렉트 박스
// $('#langBtn').click(function(){
//     url=$('#langList').val();
//     window.open(url);
// })

// document.getElementById('langBtn').addEventListener('click', function() {
//     var url = document.getElementById('langList').value;
//     window.open(url);
// });

document.getElementById('langBtn').addEventListener('click',function(){
    const url = document.getElementById('langList').value;
    window.open(url)
});
//상단배너
$('.group-tab button').click(function(){
tabName=$(this).data('slide');

    if (tabName==='#slide2') {
        //시민참여
        mainSlide1.autoplay.stop(); //반대되는건 정지
        if($(tabName).find('.btn-autoplay').hasClass('on')){
            mainSlide2.autoplay.stop();
        }else{
            mainSlide2.autoplay.start(); 
        }

    } else {
        mainSlide2.autoplay.stop(); //반대되는건 정지
        if($(tabName).find('.btn-autoplay').hasClass('on')){
            mainSlide1.autoplay.stop();
        }else{
        mainSlide1.autoplay.start();
        } 
    }
//상단배너탭
    $(this).attr('aria-selected',true)
    $(this).addClass('on').siblings().removeClass('on').attr('aria-selected',false)
    $(tabName).addClass('on').siblings().removeClass('on')
})

//상단 탭 슬라이드1
const mainSlide1 = new Swiper('#slide1 .swiper',{
    loop : true,
    pagination: {
    el: ".fraction",
    type: "fraction",
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false, //false로 설정시 자동재생이 비활성화됨
    },
    //display:none해결
    observer: true,//swiper는 스타일을 변경하거나 하위 요소를 수정할 때마다 업데이트(초기화)됨
    observeParents: true,//부모요소의 변화에 따라 업데이트됨
})
        
//상단 탭 슬라이드2
const mainSlide2 = new Swiper('#slide2 .swiper',{
    loop : true,
    pagination: {
    el: ".fraction",
    type: "fraction",
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
})

//하단 배너 슬라이드
const bannerSlide = new Swiper('.banner-slide',{
    loop : true,
    slidesPerView: 3,
    spaceBetween: 43,

    navigation:{
    prevEl:".prev",
    nextEl:".next",
    },
    pagination: {
        el: ".fraction",
        type: "fraction",
    },
    autoplay: {
        delay: 1000,
    },
    observer: true,
    observeParents: true,
})

//슬라이드 전체소스
slideArr=[mainSlide1,mainSlide2,bannerSlide] //각각 슬라이드를 배열로 만듬
$('.swiper .btn-autoplay').click(function(){
    idx=$(this).data('slide');
    if ($(this).hasClass('on')) {
        slideArr[idx].autoplay.start();
    } else {
        slideArr[idx].autoplay.stop();
    }
    $(this).toggleClass('on');
})

//하단메뉴
$('.sc-institution .btn-relate').click(function(){

    if ($(this).hasClass('on')) {
        closeTab();
    } else {
        closeTab();
        $(this).addClass('on').siblings('.sub').stop().slideDown();
    }

})
//메뉴tab키
$('.sc-institution .menu-item:first-child').keydown(function(e){
    if (e.keyCode === 9 && e.shiftKey) {
        closeTab();
    }

}) 
$('.sc-institution .menu-item:last-child').keydown(function(e){
    if (e.keyCode === 9 && !e.shiftKey) {
        closeTab();
    }
})

function closeTab(){
    $('.btn-relate').removeClass('on').siblings('.sub').stop().slideUp();
}

//top버튼이벤트
$(window).scroll(function() {
    curr= $(this).scrollTop();
    if ( curr > 0) { //250 넘으면 버튼이 보여짐니다.
        $('.btn-top').addClass('on');
            } else {
            $('.btn-top').removeClass('on');
        }
});
//top버튼 위로가기       
$('.btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})

})
