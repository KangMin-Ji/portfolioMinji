$(function () {

  let count = 1;
  let blink = setInterval(function () {
    person = $('.person');
    console.log(count);
    count++;
    person.removeClass('on');
    if (count % 2 === 0) {
      person.addClass('on');
    }
    person.click(function () {
      person.removeClass('on');
      clearInterval(blink);
    });
  }, 900);

  $(window).scroll(function () {
    sct = $(this).scrollTop();
    if (sct > 0) {
      $('.person').removeClass('on');
      clearInterval(blink);
    }
  });

  const showAnim = gsap.from('header .inner', {
    yPercent: -200,
    paused: true,
    duration: 0.5,
  });

  ScrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  });

  $(window).scroll(function () {
    sct = $(this).scrollTop();
    wh = $('.section_1 .txt_wrap .main_title').offset().top;
    if (sct > wh) {
      $('header .inner').addClass('on');
    } else {
      $('header .inner').removeClass('on');
    }
  });

  let click = false;
  $('header .ham_btn').click(function (e) {
    e.preventDefault();
    if (click === false) {
      $('header .gnb_area').animate({
        right: 0,
      });
      $('html').addClass('on');
      $('header .inner').addClass('on');
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          showAnim.play()
        },
      });
      click = true;
    } else {
      $('header .gnb_area').animate({
        right: '-100%',
      });
      $('html').removeClass('on');
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
      });
      $(window).scroll(function () {
        sct = $(this).scrollTop();
        wh = $('.section_1 .txt_wrap .main_title').offset().top;
        if (sct <= wh) {
          $('header .inner').removeClass('on');
        }
      });
      click = false;
    }
  });


  $('.drop').each(function (index, item) {
    yVal = $(this).data('y');
    gsap.from(item, {
      yPercent: yVal,
      duration: 1,
    });
  });


  gsap.to('.section_bg', {
    scrollTrigger: {
      trigger: '.section_1',
      scrub: 1,
      start: 'top top',
      // pinSpacing: false,
      // end:  "+=" + (window.innerHeight * 10),
    },
    scale: 3,
    // y: '-300vh'

  });

  const personDrop = $(window).height() + 870;


  gsap.to(".person", {
    scrollTrigger: {
      trigger: ".person_con",
      start: "top 20%",
      end: (window.innerHeight * 20),
      scrub: true,
      pin: '.person',
      pinSpacing: false,
      anticipatePin: true,
    },
    y: personDrop,
    rotate: -360,
  });


  gsap.to(".person", {
    scrollTrigger: {
      trigger: ".person_con",
      start: "bottom 50%",
      end: "bottom 40%",
      scrub: true,
      // pinSpacing: false,
    },
    scale: 0,
  })
  gsap.to(".hole02", {
    scrollTrigger: {
      trigger: ".person_con",
      start: "100% 50%",
      end: "bottom 20%",
      scrub: true,
      // pinSpacing: false,
    },
    scale: 0,
    // yPercent: -50,
  });

  cardFunc = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_3',
        scrub: 1,
        start: "50% 50%",
        end: "+=3000",
        anticipatePin: 1,
      }
    })
    .to(".card_area", {
      scrollTrigger: {
        trigger: ".card_area",
        pin: ".section_3",
        start: "top 50%",
        end: "30% 10%",
        scrub: true,
      },
      yPercent: -20,
    }, "label-=1")
    .to(".section_3 .txt_wrap .title, .section_3 .txt_wrap>span", {
      opacity: 0,
      yPercent: -10,
    }, "label")



  $('.section_3 .card_wrap').each(function (index, item) {
    let rotY = $(this).data('roty') ? $(this).data('roty') : 0;
    let rotX = $(this).data('rotx') ? $(this).data('rotx') : 0;
    let yPer = $(this).data('yper') ? $(this).data('yper') : 0;
    let xPer = $(this).data('xper') ? $(this).data('xper') : 0;
    let r = $(this).data('r') ? $(this).data('r') : 0;

    let rotY02 = $(this).data('roty02') ? $(this).data('roty02') : 0;
    let rotX02 = $(this).data('rotx02') ? $(this).data('rotx02') : 0;
    let yPer02 = $(this).data('yper02') ? $(this).data('yper02') : 0;
    let xPer02 = $(this).data('xper02') ? $(this).data('xper02') : 0;
    let r02 = $(this).data('r02') ? $(this).data('r02') : 0;
    let dur = $(this).data('dur') ? $(this).data('dur') : 0;

    cardFunc.to(item, {
        rotateY: rotY,
        rotateX: rotX,
        yPercent: yPer,
        xPercent: xPer,
        rotate: r,
      }, "label")
      .to(item, {
        rotateY: rotY02,
        rotateX: rotX02,
        yPercent: yPer02,
        xPercent: xPer02,
        rotate: r02,
        duration: dur,
      }, "label02")
  });


}); //end
