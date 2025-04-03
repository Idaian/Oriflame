let Sfoo = document.querySelector("div.Sfooter>div");
let Mfoo = document.querySelector("div.Mfooter>div>div");
let followUs=document.querySelector("div.followUs");
let ourApps=document.querySelector("div.ourApps");
let LastOfFooter=document.querySelector("div.LastOfFooter")
//let Bsec10 = document.querySelector("div.Bsection10");


let footer = async () => {
    let refooter = await (await fetch("http://localhost:2000/Sfooter")).json();

    refooter.forEach(elem => {
       
        Sfoo.innerHTML += `<div class="w-full">
        <li class="clic w-full relative !pt-[13px] h-[49px] font-[f01] text-[14px]  text-[#333333]">
            <span class="cursor-pointer">${elem.text}</span>
            <i
                          class="fas fa-chevron-down text-[17px] absolute right-[1px] transition-all text-[#595959] duration-[300ms] top-[17px]"
                        ></i>
                        
          </li>
        
    <div class="w-full hidden "></div>
        </div>
    
    `;
       
    });
    

    let Sfoo01 = document.querySelector("div.Sfooter>div>div:nth-of-type(1)>div");

    let refooter05 = await (await fetch("http://localhost:2000/Sfoo01")).json();

    refooter05.forEach(elem => {
       
        Sfoo01.innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"> <a class="Sfoot01">${elem.text}</a> </li>
    
    `;
    });
let Sfoo02 = document.querySelector("div.Sfooter>div>div:nth-of-type(2)>div");

    let refooter06 = await (await fetch("http://localhost:2000/Sfoo02")).json();

    refooter06.forEach(elem => {
       
        Sfoo02.innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"> <a class="Sfoot01">${elem.text}</a> </li>
    
    `;
    });
let Sfoo03 = document.querySelector("div.Sfooter>div>div:nth-of-type(3)>div");

    let refooter07 = await (await fetch("http://localhost:2000/Sfoo03")).json();

    refooter07.forEach(elem => {
       
        Sfoo03.innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"> <a class="Sfoot01">${elem.text}</a> </li>
    
    `;
    });
    

    
    let refooter02 = await (await fetch("http://localhost:2000/followus")).json();

    refooter02.forEach(elem => {
       
        followUs.innerHTML += `<i class="${elem.text} cursor-pointer text-[35px] ${elem.color} ">
        <div class="!p-[6px_10px] hidden absolute left-[25px]  font-[f02] text-[12px] text-[#fffdfd] bg-[#232323]">${elem.tname}</div>
        </i>
    
    `;
    });
    let refooter03 = await (await fetch("http://localhost:2000/ourApps")).json();

    refooter03.forEach(elem => {
       
        ourApps.innerHTML += `<img src="${elem.text}" class="w-[35px]  h-[35px]" alt="">
    
    `;
    });
    let refooter04 = await (await fetch("http://localhost:2000/LastOfFooter")).json();

    refooter04.forEach(elem => {
       
        LastOfFooter.innerHTML += `<div class=" flex flex-col relative">
        <img src="${elem.text}" alt="" class="h-[25px] lpofotr-1">
        <div class=" lpofotr0 transition-all duration-[300ms] opacity-0 !p-[10px] text-[14px] font-[f02] text-[#4F5355] bg-[#eaeaea] absolute !ml-[10px] top-[-60px] rounded-[5px] "> 
        <span class="whitespace-nowrap">${elem.tname}</span>
        <div class="lpofotr  w-0 h-0 absolute bottom-[-6.5px] !m-[0_auto]">
        </div>
        </div>
        </div>
        
    
    `;
    });








    let reBfooter = await (await fetch("http://localhost:2000/Sfooter")).json();

    reBfooter.forEach(elem => {
       
        Mfoo.innerHTML += `<div class="  flex flex-col ">
        <li class="clic    relative !pt-[13px] h-[49px] font-[f01] text-[14px]  text-[#333333]">
            <span>${elem.text}</span>
            
                        
          </li>
        
    <div class="w-full Mfooter02 text-left "></div>
        </div>
    
    `;
       
    });
    
 let Mfooter02=[...document.getElementsByClassName("Mfooter02")];
 let reBfooter01 = await (await fetch("http://localhost:2000/Sfoo01")).json();

    reBfooter01.forEach(elem => {
       
        Mfooter02[0].innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"><a class="Sfoot01">${elem.text}</a></li>
    
    `;
    });
 let reBfooter02 = await (await fetch("http://localhost:2000/Sfoo02")).json();

    reBfooter02.forEach(elem => {
       
        Mfooter02[1].innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"> <a class="Sfoot01">${elem.text}</a></li>
    
    `;
    });
    
 
 let reBfooter03 = await (await fetch("http://localhost:2000/Sfoo03")).json();

    reBfooter03.forEach(elem => {
       
        Mfooter02[2].innerHTML += `<li class=" cursor-pointer w-full h-[38.5px] font-[f02] text-[14px] text-[#333646]"> <a class="Sfoot01">${elem.text}</a></li>
    
    `;
    });
    
 

    let Sfoot01=[...document.getElementsByClassName("Sfoot01")];
    let Sfoot02=[...document.getElementsByClassName("Sfoot02")];
    
    
    Sfoot01.forEach((elem)=>{
        elem.addEventListener("mouseenter",function(){
            elem.classList.add("textColor")
        })
        elem.addEventListener("mouseleave",function(){
            elem.classList.remove("textColor")
        })
    });
    Sfoot02.forEach((elem)=>{
        elem.addEventListener("mouseenter",function(){
            elem.classList.add("textColor")
        })
        elem.addEventListener("mouseleave",function(){
            elem.classList.remove("textColor")
        })
    });
    
let clic = [...Sfoo.getElementsByClassName("clic")];
clic.forEach((elem)=>{
    let x=elem.querySelector("i");
    
    elem.addEventListener("click",function(){
        elem.nextElementSibling.classList.toggle("bswig07");
        x.classList.toggle("rot");


    })
})
let imgfollowUs=[...followUs.getElementsByTagName("I")];
imgfollowUs.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
        elem.classList.add("gray");
        elem.firstElementChild.classList.add("bswig07")
    })
    elem.addEventListener("mouseleave",function(){
        elem.classList.remove("gray");
        elem.firstElementChild.classList.remove("bswig07")
    })
})

let lpofotr1=[...document.getElementsByClassName("lpofotr-1")];
lpofotr1.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
        elem.nextElementSibling.classList.add("lpofotr00")
    })
    elem.addEventListener("mouseleave",function(){
        elem.nextElementSibling.classList.remove("lpofotr00")
    })
})
let mf01=document.querySelector("div.Mfooter>div>div>div:nth-of-type(1)");
mf01.classList.add("mf01p");
let mf02=document.querySelector("div.Mfooter>div>div>div:nth-of-type(2)");

mf02.classList.add("mf02p");


 
    
};

export default footer;



