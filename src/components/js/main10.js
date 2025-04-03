let Ssec10 = document.querySelector("div.Ssection10");
let Bsec10 = document.querySelector("div.Bsection10");


let s10 = async () => {
    let res10 = await (await fetch("http://localhost:2000/section10")).json();

    res10.forEach(elem => {
       
        Ssec10.innerHTML += `<div class="w-[160px]  overflow-hidden h-[160px] rounded-[50%] !mb-[15px] bg-[#f6f6f6]">
        <img src="${elem.im}" alt="">
      </div>
    
    `;
        Bsec10.innerHTML += `<div class=" !mb-[10px] overflow-hidden lg:w-[210px] lg:h-[210px]  rounded-[50%] bg-[#f6f6f6]">
        <img src="${elem.im}" alt="" class="relative top-[-5px] lg:top-0">
      </div>
    
    `;
       
    });
    
    
    let but=[...document.getElementsByClassName("sec10")]
    but.forEach((elem)=>{
        elem.addEventListener("mouseenter",function(){
            elem.classList.add("bgsec10")
        })
        elem.addEventListener("mouseleave",function(){
            elem.classList.remove("bgsec10")
        })
    })
    

    
};

export default s10;



