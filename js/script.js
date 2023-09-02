// カルーセル
$(function (){
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
});

$(function (){
$('.home').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
   },250);
});

$('.home').on('mouseout',function(){
  $(this).animate({
    opacity:1.0,
   },250);
});

$('#menu-about').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
   },250);
});

$('#menu-about').on('mouseout',function(){
  $(this).animate({
    opacity:1.0,
   },250);
});

$('#menu-works').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
   },250);
});

$('#menu-works').on('mouseout',function(){
  $(this).animate({
    opacity:1.0,
   },250);
});
});


$(function (){
  $(window).on('scroll',function (){
    const scrollingValue = document.scrollingElement.scrollTop;
    if(scrollingValue > 400){
      $('#back-btn').css('display','inline');
    }
    else{
      $('#back-btn').css('display','none');
    }
  });
});


 //ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
  $('a[href^="#"]').on('click',function () {
    const speed = 500;
    const href = $(this).attr('href');
    
    let $target;      
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
      console.log(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  
  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });


