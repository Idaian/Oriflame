let sec02 = document.querySelector("div.wrapper>div.section02>div.swiper-slider02>div.swiper-wrapper");


let s02 = async () => {
    let res = await (await fetch("http://localhost:2000/section02")).json();

    res.forEach(elem => {
        sec02.innerHTML += `

            <div class="swiper-slide w-full h-full ">
                <div class=" w-full h-full flex justify-center">
                    <a href="#" class="colorsec02 w-auto h-full leading-[45px] font-[f01] text-[#333333] text-[14px] transition-all duration-500 ">
                        ${elem.text}
                    </a>
                </div>
            </div>


        
        
        `;
    });

    new Swiper("div.wrapper>div.section02>div.swiper-slider02", {

        slidesPerView: 3.5,
        spaceBetween: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },breakpoints:{
            400:{
                slidesPerView: 3.5,
                spaceBetween: 7,
            },540:{
                slidesPerView:4.5,
                spaceBetween: 7,
            },635:{
                slidesPerView:6,
                spaceBetween: 7,
            },700:{
                slidesPerView: 6.5,
                spaceBetween: 7,
            },1024:{
                slidesPerView: 8.5,
                spaceBetween: 2,
            },1280:{
                slidesPerView: 10,
                spaceBetween: 2,
            },
            }
        
    });


    
    let colorr=[...document.getElementsByClassName("colorsec02")];
    
    
    colorr.forEach(elem=>{
        elem.addEventListener("mouseenter", function(){
           this.classList.add("color")
        }),
        elem.addEventListener("mouseleave", function(){
            this.classList.remove("color")
        })
    })
    

};

export default s02;

//