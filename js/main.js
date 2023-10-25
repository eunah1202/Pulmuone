//main.js

//검색박스
const btnSrch = document.querySelector("form.srch> dl> dd > a");
const btnWrap = document.querySelector(".srch_open");
btnSrch.addEventListener("click", e =>{
  e.preventDefault();
  alert("검색어를 입력해주세요")
  btnWrap.classList.toggle("on")
})

//주메뉴
const gnbBg = document.querySelector(".header_wrap")
const gnbMenus = document.querySelectorAll("nav.gnb li") //상위메뉴
const gnbSubs = document.querySelectorAll("nav.gnb > ul > li> ul") //하위메뉴

gnbMenus.forEach((gnbMenu)=>{
  gnbMenu.addEventListener("mouseover", e=>{
    gnbSubs.forEach((gnbSub)=>{
      gnbSub.classList.add("on")
    });
    gnbBg.classList.add("on")
  });
});

gnbSubs.forEach((gnbSub)=>{
  gnbSub.addEventListener("mouseout", e=>{
    gnbSubs.forEach((gnbSub)=>{
      gnbSub.classList.remove("on");
    })
    gnbBg.classList.remove("on");
  });
})

//banner
const btnPrev = document.querySelector(".btn_prev");//슬라이드 이전버튼
const btnNext = document.querySelector(".btn_next");//슬라이드 다음버튼
const slide = document.querySelectorAll("li.slide");//슬라이드 인덱스 0,1,2,3
const slideRoll = document.querySelectorAll(".slide_roll>ul>li");//슬라이드롤
const btnPlay = document.querySelector(".btn_play");//슬라이드 플레이버튼

let bnnNum=0;
let lastNum=slide.length-1;

//btnPrev
btnPrev.addEventListener("click", e=>{
  e.preventDefault();
  bnnNum--; 

  if(bnnNum<0) bnnNum = lastNum; 
  
  activation(slide,bnnNum,"active")
  activation(slideRoll,bnnNum, "on")
})

//btnNext
btnNext.addEventListener("click", e=>{
  e.preventDefault();
  bnnNum++;

  if(bnnNum>lastNum) bnnNum = 0;

  activation(slide,bnnNum,"active")
  activation(slideRoll,bnnNum,"on")
})

//재생,멈춤버튼
let flag = true;
btnPlay.addEventListener("click", e =>{
  e.preventDefault();
  if(flag){
    btnPlay.classList.add("on");
    clearTimeout(autoBnn);
    flag=false;
  }
  else{
    btnPlay.classList.remove("on");
    autoBnn = setTimeout(autoBanner, 5000);
    flag=true;
  }
})

//slideRoll 
for(let i=0; i<slideRoll.length; i++){
  slideRoll[i].addEventListener("click", e=>{
    e.preventDefault();
    activation(slide,i,"active")
    activation(slideRoll,i,"on")
  })
}

// 함수정의
let activation = (element,index,classname)=>{
  element.forEach(item =>{
    item.classList.remove(classname)
  })
  element[index].classList.add(classname)
}

let autoBnn = setTimeout(autoBanner, 5000); //최초함수호출
function autoBanner(){
  bnnNum++
  if(bnnNum > lastNum) bnnNum = 0;
  activation(slide, bnnNum, "active")
  activation(slideRoll, bnnNum, "on")

  autoBnn = setTimeout(autoBanner, 5000);
}


/*right_food*/
// mouseover했을때 다르게 보이기 (on붙여서) 
const rfImage = document.querySelectorAll(".right_food_inner>ul>li")

rfImage.forEach(item => {
  item.addEventListener("mouseover" ,e =>{
    e.currentTarget.classList.add("on")
  });
  item.addEventListener("mouseout", e =>{
    e.currentTarget.classList.remove("on")
  });
})

/*footer-계열사/브랜드사이트*/
const footerSite = document.querySelector(".footer_inner> .family_box> ul")

footerSite.previousElementSibling.addEventListener("click", e=>{ //a
  e.preventDefault();
  footerSite.parentElement.classList.add("on");
})
//mouseover될때에도 on붙어있어있어야해
footerSite.addEventListener("mouseover", e=>{
  footerSite.parentElement.classList.add("on");
})
//mouseout될때 창 닫아지기
footerSite.addEventListener("mouseout", e=>{
  footerSite.parentElement.classList.remove("on");
})

//fullpage
const contents = document.querySelectorAll("#container>div");
const lis = document.querySelectorAll("aside>.quick>li")

let devHeight = window.innerHeight;

let bnnW = document.body.clientWidth; //바디 가로값 

//화면 크기 바뀔때 height값 저장
window.addEventListener('resize', ()=>{
  devHeight = window.innerHeight;
});

if(bnnW>1024){
  contents.forEach((element,index) => {
    if(index===0){
      const header = document.querySelector("header");
      const headerHeight = header.offsetHeight;
      element.style.height = devHeight - headerHeight + "px";
    }
    else if(index===5){
      const footer = document.querySelector(".footer");
      const footerHeight= footer.offsetHeight;
      element.style.height = footerHeight + "px";
    }
    else{element.style.height = devHeight +"px";}
  });
  console.log(devHeight)  
};

// li클릭할때마다 스크롤이 content높이값 만큼씩 움직이게 but)첫번째 제외
for(let i= 0; i<lis.length; i++ ){
  lis[i].addEventListener("click", e=>{
    e.preventDefault();
    lis.forEach(item=>{
      item.classList.remove("on")
    });
    lis[i].classList.add("on")
    window.scroll({
      top: `${i+1}` * devHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
};

// /*마우스 휠 내리기 -> contents + footer*/
window.addEventListener('resize',()=>{
  bnnW = document.body.clientWidth;
});

//pc 마우스휠
if(bnnW>1024){
  for (let i = 0; i <contents.length; i++) { //0,1,2,3,4
    contents[i].addEventListener("wheel", e => {
      if (e.deltaY > 0){
        // 마지막 컨텐츠에서 스크롤다운       
        let next = e.currentTarget.nextElementSibling.offsetTop;
        window.scroll({
          top: next,
          left: 0,
          behavior: "smooth"
        });
        lis.forEach(item=>{
          item.classList.remove("on");
          lis[i].classList.add("on")
        });
      }
      else if(e.deltaY < 0) {
        if(i === 1){ //두번째컨텐츠
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }
        else{
          let prev = e.currentTarget.previousElementSibling.offsetTop;
          window.scroll({
              top: prev,
              left: 0,
              behavior: "smooth"
          });
        }
        lis.forEach(item=>{
          item.classList.remove("on");
          lis[i-2].classList.add("on")
        });
      };
    });
  };
};


//모바일, 테블릿 검색박스
const mSearch = document.querySelector(".m_search")
const mSearchBox = document.querySelector(".m_search_box")
mSearch.addEventListener("click",e=>{
  e.preventDefault();
  mSearchBox.classList.toggle("on");
  mSearch.classList.toggle("on");
})

// ham안에 ul-li
const hamGnb = document.querySelectorAll("div.ham>nav.ham_gnb>ul>li")

for(let i=0; i<hamGnb.length; i++){
  hamGnb[i].addEventListener("click", e=>{
    e.preventDefault();
    hamGnb[i].classList.toggle("on")
  })
}

//햄버거버튼
const hamBtn = document.querySelector(".hamBtn");
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");
const hamCloseBtn = document.querySelector("div.ham_up>div.hamBtn_close")
const ham = document.querySelector(".ham");

hamBtn.addEventListener("click", e=>{
  e.preventDefault();
  body.classList.add("on");
  bg.classList.add("on")
  ham.classList.add("on")
})
hamCloseBtn.addEventListener("click", e=>{
  e.preventDefault();
  body.classList.remove("on");
  bg.classList.remove("on")
  ham.classList.remove("on")
})

// top버튼
const btnTop = document.querySelector('a.btn_top');
btnTop.addEventListener('click', e =>{
  e.preventDefault();
  window.scroll({ //스크롤의 위치를 맨 위로 올린다
    top: 0,
    left: 0,
    behavior: 'smooth' //부드럽게 올라가는 느낌 
  });
});

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if(scroll <= 0){
    // 안보일 때
    btnTop.classList.remove("on");
  }
  else{
    // 스크롤발생시
    btnTop.classList.add("on");
  }
});

