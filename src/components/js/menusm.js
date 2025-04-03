

const smenu = document.querySelector("div.ssmenu");


let menu = async () => {
  const Inspiratie = document.querySelector("div.smenu>div.ins>div>div.child");

  const res = await (await fetch("http://localhost:2000/Inspiratie")).json();

  res.forEach((elem) => {
    Inspiratie.innerHTML += `<div class=" cchild !h-[44.5px] w-full !p-[10px_50px] text-[17px]  font-[f02] text-[#333333]  block"> <a class="ccchild">${elem.text}</a> </div>`;
  });
  //------------big box--------------------------------
  const ress = await (await fetch("http://localhost:2000/smenu")).json();

  ress.forEach((elem) => {
    smenu.innerHTML += `<li class=" sssmenu relative  w-full !py-[2px]  flex flex-wrap  "> <div class="w-[6px] absolute left-0 rounded-[2px] h-[52px] !mt-[1px] ${elem.color} "></div><div class=" !m-[15px_17px] text-[17px] tracking-wider font-[f01] text-[#333333] cursor-pointer"> <span>${elem.text}</span> <i class="fas fa-chevron-down absolute right-[15px] top-[22px] transition-all duration-[300ms] "></i> </div> <div class="child  w-full !bg-[#ffffff] !pt-[4px]   "> </div>  </li>`;
  });

  //--------Nutrition------------------------------
  const Nutrition = document.querySelector(
    "li.sssmenu:nth-of-type(1)>div.child"
  );
  const NutritionLi = document.querySelector("li.sssmenu:nth-of-type(1)");
  NutritionLi.addEventListener("mouseenter", function () {
    this.classList.add("bgN");
  });
  NutritionLi.addEventListener("mouseleave", function () {
    this.classList.remove("bgN");
  });
  const ress0101 = await (
    await fetch("http://localhost:2000/Nutrition")
  ).json();

  ress0101.forEach((elem) => {
    Nutrition.innerHTML += `   <div class=" cchild !h-[47.3px] w-full    !p-[10px_50px] text-[17px]  font-[${elem.font}] text-[#333333]  block"> <a class="ccchild">${elem.text}</a> </div>`;
  });
  //---------------Skincare-----------------------
  const Skincare = document.querySelector(
    "li.sssmenu:nth-of-type(2)>div.child"
  );
  const Skincare02 = document.querySelector("li.sssmenu:nth-of-type(2)");
  Skincare02.addEventListener("mouseenter", function () {
    this.classList.add("bgS");
  });
  Skincare02.addEventListener("mouseleave", function () {
    this.classList.remove("bgS");
  });

  const ress0102 = await (await fetch("http://localhost:2000/Skincare")).json();

  ress0102.forEach((elem) => {
    Skincare.innerHTML += `   <div class=" cchild relative !h-[57.3px] w-full    !p-[10px_50px] text-[17px]  font-[${elem.font}] text-[#333333]  block"> <a class="ccchild">${elem.text}</a> <i class="${elem.aro} "></i> </div>`;
  });
//--------------smenu02---------
  const res02 = await (await fetch("http://localhost:2000/smenu02")).json();
  let smenu02 = document.querySelector("div.smenu02");

  res02.forEach((elem) => {
    smenu02.innerHTML += `<li class="w-full ssmenu02 relative  h-[52.5px] flex"> <div class=" !m-[10px_20px] text-[17px]  font-[f01] text-[#555555] cursor-pointer"> <span>${elem.text}</span>  </div>  </li>`;
  });
  //--------------smenu03-------
  const res03 = await (await fetch("http://localhost:2000/smenu03")).json();
  let smenu03 = document.querySelector("div.smenu03");

  res03.forEach((elem) => {
    smenu03.innerHTML += `<li class=" w-full ssmenu03   h-[51.5px]  !p-[10px_20px] text-[17px]  font-[f01] text-[#555555] cursor-pointer">  <span>${elem.text}</span>  </li>`;
  });

  let icon = document.querySelector("div.icon");
  let sicon = document.querySelector("div.smenu");
  let iconSmenu = document.querySelector("div.iconSmenu");
  let wrapper = document.querySelector("div.cwrapper");

  icon.addEventListener("click", function () {
    sicon.classList.add("left18");
    wrapper.classList.add("blure");
  });
  iconSmenu.addEventListener("click", function () {

    sicon.classList.remove("left18");

    wrapper.classList.remove("blure");
  });
  wrapper.addEventListener("click",function(){
    
    sicon.classList.remove("left18");
    wrapper.classList.remove("blure");
  })

  let ins = document.querySelector("div.smenu>div.ins>div>li.cins");

  let cins = document.querySelector("div.smenu>div.ins>div>div.child");
  let ar = document.querySelector("div.smenu>div.ins>div>li.cins>i");

  ins.addEventListener("click", function () {
    cins.classList.toggle("vis");
    ar.classList.toggle("rot");
  });

  //----------boxe rangi-------------sssmenu---------
  let link = [...document.getElementsByClassName("sssmenu")];
  link.forEach((elem) => {
    let x = elem.querySelector("div.child");
    let arrow_down = elem.querySelector("div>i");

    elem.addEventListener("click", function () {
      x.classList.toggle("vis");
      arrow_down.classList.toggle("rot");
    });
  });
  let cchild = [...document.getElementsByClassName("cchild")];

  cchild.forEach((elem) => {
    let ccchild = elem.querySelector("a.ccchild");

    ccchild.addEventListener("mouseenter", function () {
      ccchild.classList.add("textColor");
    });
    ccchild.addEventListener("mouseleave", function () {
      ccchild.classList.remove("textColor");
    });
  });
  //-----------ssmenu02------------------------------
  let link02 = [...document.getElementsByClassName("ssmenu02")];

  link02.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      elem.classList.add("bg6f");
    });
    elem.addEventListener("mouseleave", function () {
      elem.classList.remove("bg6f");
    });
  });
  //------------ssmenu03-----------------------------
  let link03 = [...document.getElementsByClassName("ssmenu03")];

  link03.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      elem.classList.add("textColor02");
    });
    elem.addEventListener("mouseleave", function () {
      elem.classList.remove("textColor02");
    });
  });
  let last = document.querySelector("div.last");
  let lastp = document.querySelector("div.last>i");
  last.addEventListener("mouseenter", function () {
    lastp.classList.add("textColor02");
  });
  last.addEventListener("mouseleave", function () {
    lastp.classList.remove("textColor02");
  });
//-------------------------------------see-all(mouseenter/mouseleave)------------------------------
  let seeAll=document.querySelector("div.seeAll")
  seeAll.addEventListener("mouseenter",function(){
    this.classList.add("seeall");
  })
  seeAll.addEventListener("mouseleave",function(){
    this.classList.remove("seeall");
  })
  
  let shoppingList=document.querySelector("div.shoppingList>div:nth-of-type(1)>span");
  shoppingList.addEventListener("mouseenter",function(){
    shoppingList.classList.add("textColor")
  })
  shoppingList.addEventListener("mouseleave",function(){
    shoppingList.classList.remove("textColor")
  })
  
 let shL02=document.querySelector("div.shoppingList>div:nth-of-type(3)>div:nth-of-type(1)")
 shL02.addEventListener("mouseenter",function(){
  shL02.classList.add("bgGoToBasket")
 })
 shL02.addEventListener("mouseleave",function(){
  shL02.classList.remove("bgGoToBasket")
 })
  let shoppingBag=[...document.getElementsByClassName("SSHB")];
  
 shoppingBag.forEach((elem)=>{
  
  elem.addEventListener("mouseenter",function(){
    elem.classList.add("textBag");

  })
  elem.addEventListener("mouseleave",function(){
    elem.classList.remove("textBag")
  })
 })

 
 
};

export default menu;
