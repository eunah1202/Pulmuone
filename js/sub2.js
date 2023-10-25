// sub2.js

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

/*cs_sub_header > ul*/
const csSubHeader = document.querySelectorAll(".cs_sub_header>ul>li")//0,1
for(let i=0; i<csSubHeader.length; i++){

  csSubHeader[i].addEventListener("click", e=>{
    csSubHeader.forEach(item=>{
      item.classList.remove("check")
    })
    e.preventDefault();
    csSubHeader[i].classList.add("check");
  })
}

/*container > ul*/
const csSubMenu = document.querySelectorAll("#container>ul>li"); //0,1,2,3
for(let i=0; i<csSubMenu.length; i++){
  csSubMenu[i].addEventListener("click", e=>{
    e.preventDefault();
    csSubMenu.forEach(item=>{
      item.classList.remove("check")
    })
    csSubMenu[i].classList.add("check")
  })
}

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
