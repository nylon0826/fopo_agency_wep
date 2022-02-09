(($, window, document, undefined)=>{

  class Agency {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.section10();
      this.footer();
    }
    header(){

      // 윈도우 스크롤 탑값이 0이면 높이 : 72px 기본
      // - 추가된 클래스 모두 삭제
      // header.removeClass('addH60');
      // 윈도우 스크롤 탑값이 0이 아니면 높이 : 60px
      // - 추가 클래스 
      // header.addClass('addH60');

      let newTop = $(window).scrollTop();
      let oldTop = newTop;
      let x = '';

      $(window).scroll(function(){
        if( $(window).scrollTop() == 0 ){
          $('#header').removeClass('addH60');
          $('#header').removeClass('addShow');
          $('#header').removeClass('addHide');
        }
        else{
          $('#header').addClass('addH60');

          //위 아래 방향을 알아내야 함
          newTop = $(window).scrollTop();

          x = oldTop-newTop > 0 ? 'UP' : 'DOWN';

          if(x=='UP'){
            $('#header').addClass('addShow');
            $('#header').removeClass('addHide');
          }

          if(x=='DOWN'){
            $('#header').addClass('addHide');
            $('#header').removeClass('addShow');
          }

          oldTop = newTop;
        }
      });







      
      //메인버튼 이벤트
      const mainBtn = $('.main-btn');
      const sub = $('.sub');
      const nav = $('#nav');
      const subBtn = $('.sub-btn');
      const subSub = $('.sub-sub');

            //메인메뉴-서브메뉴
            mainBtn.on({
              mouseenter(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

            nav.on({
              mouseleave(){
                sub.stop().fadeOut(300);
                subSub.stop().fadeOut(300);
              }
            });


            //서브메뉴-서브서브메뉴
            subBtn.on({
              mouseenter(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });


    }
    section1(){
      // 슬라이드 관련된 모든 변수 등록
      const slideWrap = $('.slide-wrap');
      const slideView = $('.slide-view');
      let cnt = 0;

      function mainSlide(){
        slideWrap.stop().animate({left: -1903*cnt }, 600, 'easeInOutExpo', function(){
          if(cnt>2){cnt=0}
          if(cnt<0){cnt=2}
          slideWrap.stop().animate({left: -1903*cnt }, 0);
        });
      }    
      
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }

      //setInterval(prevCount, 3000);

      // 스와이프(좌우터치 이벤트)
      // 오른족에서 왼쪽으로 터치 : 다음슬라이드   0 >
      // 왼쪽에서 오른족으로  터치 : 이전슬라이드  < 0
      let s = null;///터치 시작 좌표값
      let e = null; //터치 종료 좌표값
      let dS = null; //드래그시작
      let dE = null; //드래그끝
      let mD = null; //마우스다운
      slideView.on({  
          mousedown(event){
            s = event.clientX;
            dS = event.clientX - slideWrap.offset().left-1903;
            mD = true;
          },
          mouseup(event){
            e = event.clientX;
            mD = false;
            if( (s-e) > 0 ){  //시작좌표-종료좌표 > 0 보다 크면 다음슬라이드
              nextCount();
            }
            if( (s-e) < 0 ){  //시작좌표-종료좌표 < 0 보다 작으면 이전슬라이드
              prevCount();
            }
          },
          mousemove(e){  //드래그 앤 드롭(물체를 잡고 끌고(드래그) 그리고 놓기(드롭) 실제로 구현)
            //반드시 마우스 다운(mouseDown)이 이루어져야 실행한다.
            if( mD !== true ){return}  //!mD
            dE = e.clientX;
            slideWrap.css({left: dE - dS });
          }
      });



    }
    section2(){

    }
    section3(){

    }
    section4(){

    }
    section5(){

    }
    section6(){

    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){

    }    
    footer(){

    }
  }

  const newAgency =  new Agency();
  newAgency.init();



})(jQuery, window, document);