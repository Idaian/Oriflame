let sec01 = document.querySelector("div.wrapper>div.section01>div.swiper-section01>div.swiper-wrapper");


let s01 = async () => {
    let res = await (await fetch("http://localhost:2000/section01")).json();

    res.forEach(elem => {
        sec01.innerHTML += `
        <div class="swiper-slide w-full h-full relative cursor-pointer">

            <img class="w-auto flex md:hidden absolute bottom-[-30px] sm:h-auto sm:bottom-[-25%] md:right-[-100vw] " 
            src="${elem.img}" >

            <img class=" w-full h-full  hidden !md:flex object-cover  "
            src="${elem.imgmd}" >

            <div class="w-full h-[50%]  absolute bottom-0 md:h-[85%] md:w-[50%] md:right-[100px]  ">

                <span class="w-auto h-[19px]  font-[f01] text-[12px] block text-center !mt-[${elem.margin}] !text-[${elem.colorr}] tracking-[3px]  "> 
                    ${elem.span}
                </span>
                <div class=" w-full flex justify-center  " >
                    <h2 class=" w-[450px] h-auto text-center !mt-[10px] text-[29px] md:text-[49px] !text-[${elem.colorr}] font-bold ">
                        ${elem.h2}
                    </h2>
                </div>
                <div class=" w-full flex justify-center  ">
                    <a href="#" class="shopsec01 w-[155px] h-[45px] md:w-[150px] bg-black rounded-[50px] flex justify-center items-center text-white font-[f01] !m-[10px] !py-[12px] !px-[23px] text-[13.5px] md:text-[12.5px] font-bold transition-all duration-500  ">
                        ${elem.shop}
                    </a>
                </div>
            </div>
            
        </div>


        
        
        `;
    });

    new Swiper("div.wrapper>div.section01>div.swiper-section01", {
     
        loop: true,
        autoplay: { delay: 10000 },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type:"bullets",
          },

    });


    let shopp=[...document.getElementsByClassName("shopsec01")];
    shopp.forEach(elem=>{
        elem.addEventListener("mouseenter", function(){
           this.classList.add("shops")
        }),
        elem.addEventListener("mouseleave", function(){
            this.classList.remove("shops")
        })
    })

    
    

};

export default s01;