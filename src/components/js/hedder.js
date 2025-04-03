const swiperWrapper = document.querySelector(
  "div.wrapper>div.swi>div.swiper-container>div.swiper-wrapper"
);

let offerslide = async () => {
  const res = await (await fetch("http://localhost:2000/offer")).json();

  res.forEach((elem) => {
    swiperWrapper.innerHTML += `<div class="swiper-slide"><h2 class=" text-center text-[13px] tracking-[0.9] font-[f01] leading-[34px] text-[#333333] cursor-pointer">${elem.text}</h2></div>`;
  });

  new Swiper("div.wrapper>div.swi>div.swiper-container", {
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    allowTouchMove: false,
  });
  let te=[...swiperWrapper.getElementsByTagName("H2")];
  console.log(te);
  te.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
      elem.classList.add("undrln")
    })
    elem.addEventListener("mouseleave",function(){
      elem.classList.remove("undrln")
    })

  })
  // te.addEventListener("mouseenter", function(){
  //   te.classList.add("undrln")
    
  // })
};

export default offerslide;

