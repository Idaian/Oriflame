let sec07 = document.querySelector("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07>div.swiper-wrapper");

let s07 = async () => {
    let res07 = await (await fetch("http://localhost:2000/section07")).json();

    res07.forEach(elem => {
        
       if(elem.check=="True"){
        sec07.innerHTML += `

        <div class="swiper-slide w-[280px] h-[280px] bg-sky-500  overflow-hidden rounded-[5px] relative">
            <div class=" w-full h-full flex justify-center">
                <img src="${elem.gholi}" class="scale-[1.9] relative top-[105px] leading-[45px] font-[f01] text-[#333333] text-[14px] transition-all duration-500 ">
                <div class="w-[48px] z-10 h-[48px] absolute top-[115px] bg-[#63666a] rounded-[50%] flex !pl-[10px] overflow-hidden">
                <img src="./public/img/07/play_icon.png" class="w-[25px] h-[25px] scale-[0.68] relative top-[13px] right-[6px]">
            </div>
            <div class=" saye w-full h-full bg-[#22222296] absolute top-0 hidden cursor-pointer"><a class="font-[f02] absolute bottom-[20px] right-[70px] text-[20px] text-[#2d2d2d]">@aayuwulandan</a></div>
        </div>


    
    
    `;
       }else{
        sec07.innerHTML += `

        <div class="swiper-slide w-[280px] h-[280px] bg-sky-500  overflow-hidden rounded-[5px]">
            <div class=" w-full h-full flex justify-center">
                <img src="${elem.gholi}" class=" scale-[1.3] relative top-[40px] leading-[45px] font-[f01] text-[#333333] text-[14px] transition-all duration-500 ">
            <div class=" saye w-full h-full bg-[#22222296] absolute top-0 hidden cursor-pointer"><a class="font-[f02] absolute bottom-[100px] right-[80px] text-[20px] text-[#2d2d2d]">@aqustika</a></div>
        </div>


    
    
    `;
        
       }
    });
    
    
    new Swiper("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07", {
        slidesPerView: 0,
        spaceBetween: 14, 
       
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.7,
            },
            510: {
                slidesPerView: 1.75,
            },
            570: {
                slidesPerView: 1.95,
            },
            600: {
                slidesPerView: 2.16,
            },
            670: {
                slidesPerView: 2.26,
            },
            700: {
                slidesPerView: 2.4,
            },
            740: {
                slidesPerView: 2.52,
            },
            760:{
                slidesPerView: 2.65,
            },
            810:{
                slidesPerView: 2.77,
            },
            840:{
                slidesPerView: 2.85,
            },
            900:{
                slidesPerView: 3.06,
            },
            970:{
                slidesPerView: 3.35,
            },
            980:{
                slidesPerView: 3.3,
            },
            1000:{
                slidesPerView: 3.46, 
            }
        }
    });
  
    

    let swi=[...sec07.getElementsByClassName("swiper-slide")];
   swi.forEach((elem)=>{
    let x=elem.querySelector("div.saye");
    
    elem.addEventListener("mouseenter",function(){
        x.classList.add("bswig07")
    });
    elem.addEventListener("mouseleave",function(){
        x.classList.remove("bswig07")
    });
   });
   let preve =document.querySelector("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07>div.swiper-button-prev");
   let preveS=document.querySelector("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07>div.swiper-button-prev>div.preve");
   let next =document.querySelector("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07>div.swiper-button-next");
   let nextS=document.querySelector("div.wrapper>div.section07>div.Ssection07>div.swiper-slider07>div.swiper-button-next>div.next")
   next.addEventListener("click",function(){
    nextS.classList.add("nextOpreve07"),
    setTimeout(()=>{
        nextS.classList.remove("nextOpreve07")
    },500)
    
   })
   preve.addEventListener("click",function(){
    preveS.classList.add("nextOpreve07"),
    setTimeout(()=>{
        preveS.classList.remove("nextOpreve07")
    },500)
    
   })



//---------------------------------------------------------Bsection07---------------------------------------------------------------------
   var swiper = new Swiper(".mySwiper07", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
    
  });




  let Bnext =document.querySelector("div.wrapper>div.section07>div.Bsection07>div.swiper>div.swiper-button-next");
  
  let Bpreve =document.querySelector("div.wrapper>div.section07>div.Bsection07>div.swiper>div.swiper-button-prev");
  
   let BnextS=document.querySelector("div.wrapper>div.section07>div.Bsection07>div.swiper>div.swiper-button-next>div.next")
   let BpreveS=document.querySelector("div.wrapper>div.section07>div.Bsection07>div.swiper>div.swiper-button-prev>div.preve")
   Bnext.addEventListener("click",function(){
    BnextS.classList.add("nextOpreve07"),
    setTimeout(()=>{
        BnextS.classList.remove("nextOpreve07")
    },500)
    
   });
   Bpreve.addEventListener("click",function(){
    BpreveS.classList.add("nextOpreve07"),
    setTimeout(()=>{
        BpreveS.classList.remove("nextOpreve07")
    },500)
    
   })

   
  let saye=[...document.getElementsByClassName("saye02")];
  saye.forEach((elem)=>{
    elem.parentElement.addEventListener("mouseenter",function(){
        elem.classList.add("bswig07")
        
    })
    elem.parentElement.addEventListener("mouseleave",function(){
        elem.classList.remove("bswig07")
        
    })
  })
  
  

  let but=[...document.getElementsByClassName("sec07")];
    but.forEach((elem)=>{
        elem.addEventListener("mouseenter",function(){
            elem.classList.add("bgsec10")
        })
        elem.addEventListener("mouseleave",function(){
            elem.classList.remove("bgsec10")
        })
    })



};

export default s07;



