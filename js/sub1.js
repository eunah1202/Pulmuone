// sub.js

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

/* sub_header*/
//버튼 클릭했을때 해당 ul 나오게 한다 
//btnSubMenu에 on 붙여서 
const btnSubHeader = document.querySelectorAll(".sub_header>ul>li") //0 1 2
const btnSubMenu = document.querySelectorAll(".sub_header>ul>li ul")//0 1

btnSubHeader[1].addEventListener("click",e =>{
  e.currentTarget.classList.toggle("on");
  btnSubMenu[0].classList.toggle("on")
})

btnSubHeader[2].addEventListener("click",e =>{
  e.currentTarget.classList.toggle("on");
  btnSubMenu[1].classList.toggle("on")
})

//spot 
const spot = document.querySelector(".spot");
spot.addEventListener("wheel",e =>{
  if(e.deltaY<0){
    e.currentTarget.classList.add("on") 
  }
  else if(e.deltaY>0){
    e.currentTarget.classList.add("on") 
  }
})

/*spot_banner-pc*/
const spotBanner = document.querySelectorAll("ul.spot_banner>li");

for(let i=0; i<spotBanner.length; i++){
  spotBanner[i].addEventListener("click",e=>{
    e.preventDefault();

    for(let j=0; j<spotBanner.length; j++){
      spotBanner[j].firstElementChild.style.color = "#222";
      spotBanner[j].style.borderColor = "#d7d7d7";
      spotBanner[j].style.backgroundColor = "transparent";
    }
    e.currentTarget.firstElementChild.style.color = "#fff";
    e.currentTarget.style.borderColor = "#8dc63f";
    e.currentTarget.style.backgroundColor = "#8dc63f";
  })
}

/*spot_banner-tablet, mobile*/
const mSpotBanner =document.querySelector("ul.m_spot_banner>li");
const mSpotMenu = document.querySelector("ul.m_spot_banner>li>ul");
mSpotBanner.addEventListener("click", e=>{
  e.preventDefault(); 
  e.currentTarget.classList.toggle("on");
  mSpotMenu.classList.toggle("on");
})

/*investment-ul*/
const invData = document.querySelectorAll(".investment > ul li"); //0,1

for(let i = 0; i<invData.length; i++){
  invData[i].addEventListener("click", e=>{
      invData.forEach(item =>{
        item.classList.remove("on")
      })
      e.preventDefault();
      e.currentTarget.classList.toggle("on")
    })
}

//스크롤 내릴때 요소 움직이기
const moveElements =[
  document.querySelector(".investment > ul"),
  document.querySelector(".investment_title>h3"),
  document.querySelector(".investment_title>p"),
  document.querySelector(".finance"),
  document.querySelector(".stock")
];

let elementNum = 0;
window.addEventListener("wheel", e=>{
  if(e.deltaY>0){
    if(elementNum < moveElements.length){
      moveElements[elementNum].classList.add("active");
      elementNum++;
    }
  }
})

// /*footer-계열사/브랜드사이트*/
// const footerSite = document.querySelector(".footer_inner> .family_box> ul")

// footerSite.previousElementSibling.addEventListener("click", e=>{ //a
//   e.preventDefault();
//   footerSite.parentElement.classList.add("on");
// })
// //mouseover될때에도 on붙어있어있어야해
// footerSite.addEventListener("mouseover", e=>{
//   footerSite.parentElement.classList.add("on");
// })
// //mouseout될때 창 닫아지기
// footerSite.addEventListener("mouseout", e=>{
//   footerSite.parentElement.classList.remove("on");
// })

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
