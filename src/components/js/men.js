const menu = document.querySelector(
    "div.wrapper>div.menu"
  );
  
  
   const smenu=document.querySelector("div.ssmenu02");
   let menn = async () => {
  
   const ress = await (await fetch("http://localhost:2000/smenu")).json();

    ress.forEach((elem) => {
      smenu.innerHTML += `<li class=" sssmenu02  relative  w-full !py-[0.5px]  flex flex-wrap  "> <div class="w-[5px] absolute left-0  !rounded-tr-[2px] !rounded-br-[2px] h-[44.5px]  ${elem.color} !mt-[1.5px] "></div><div class=" !m-[9px_14px] text-[20px]  font-[f01] text-[#333333] cursor-pointer"> <span>${elem.text}</span> <i class="fas fa-chevron-right text-[16px] absolute right-[15px] top-[18px] transition-all duration-[300ms] "></i> </div> <div class="child  w-full !bg-[#ffffff] !pt-[4px]   "> </div>  </li>`;
       
        

        
        
       
        
        
       
        
      });  
      
      
      const xx = await (await fetch("http://localhost:2000/Ins")).json();
      const Insp=document.querySelector("div.Insp>div")
      xx.forEach((elem) => {
        Insp.innerHTML += `<div class="w-[160px] flex gap-[12px] flex-wrap ">
        <div class="w-[160px] View h-[225px] overflow-hidden relative rounded-[11px]">
        <img src="${elem.img}" class="scale-[142%] relative top-[33px]" alt="">
         <div class="  w-full h-full cursor-pointer absolute opacity-0 top-0 transition-all duration-[300ms] bg-[#00000047]"><button class="!p-[12px_23px] font-[f01] transition-all duration-[300ms] bg-black text-[#ffffff] rounded-[25px] absolute bottom-[15px] left-[39px] text-[14px] ">VIEW</button></div>
        </div> 
        <li class="w-full flex h-[51px]  !justify-center font-[f01] text-[17px]"><a class="text-center">${elem.text}</a></li>
        </div> `;
        
         
          
  
          
          
         
          
          
         
          
        });  
  
       
      const res02 = await (await fetch("http://localhost:2000/smenu02")).json();
  let smenu02 = document.querySelector("div.smenuu0202");

  res02.forEach((elem) => {
    smenu02.innerHTML += `<li class="w-full ssmenu02 relative  h-[52.5px] flex"> <div class=" !m-[10px_20px] text-[17px]  font-[f01] text-[#555555] cursor-pointer"> <span>${elem.text}</span>  </div>  </li>`;
  });


  
   //---------------------------------------------------------------Nutr---------------------------------------------------------------

      const res03 = await (await fetch("http://localhost:2000/Nutr")).json();
  let smenu03 = document.querySelector("div.childOfNutr ");
  
  res03.forEach((elem) => {
    smenu03.innerHTML += `<li class="text-[15px]"> <a class=" text-[17px]  Nutri  font-[f01] "> ${elem.text}  </a>  </li>`;
  });
let smenu0302  = smenu03.querySelector("li:nth-of-type(8)");
smenu0302.innerHTML+=' <div class="!font-[f02] block  !mt-[16px]"><span class=" cursor-pointer">Wellosophy</span></div>';
let Wellosophy=smenu0302.querySelector("div>span");
Wellosophy.addEventListener("mouseenter",function(){
  this.classList.add("textNu");

})
Wellosophy.addEventListener("mouseleave",function(){
  this.classList.remove("textNu");

})
let all_nu=document.querySelector("div.Nutr>div>ul>li.Nutri>span");

all_nu.addEventListener("mouseenter",function(){
  this.classList.add("textNu")
})
all_nu.addEventListener("mouseleave",function(){
  this.classList.remove("textNu")
})
let smenu0303=[...smenu03.getElementsByClassName("Nutri")];

smenu0303.forEach((elem)=>{
  elem.addEventListener("mouseenter",function(){
    elem.classList.add("textNu");
  })
  elem.addEventListener("mouseleave",function(){
    elem.classList.remove("textNu");
    
  })
  
})














let Nu=document.querySelector("li.sssmenu02:nth-of-type(1)");

Nu.addEventListener("mouseenter",function(){
 Nu.classList.add("bgN")
})
let dnutr=document.querySelector("div.Nutr")
let ecatalo=document.querySelector("div.ecatalo")

Nu.addEventListener("click",function(){
 Nu.classList.add("bgN");
 if(dnutr.classList.contains("hidden")){
      
  dnutr.classList.remove("hidden");
   };
  if(!ecatalo.classList.contains("hidden")){
   
  ecatalo.classList.add("hidden");
  };
  if(!dInsp.classList.contains("hidden")){
   
  dInsp.classList.add("hidden")
  };


})







    
 //----------------------------------------------------------------first-part----------------------------------------------------------- 
 
 
   
   let fsm=[...document.getElementsByClassName("firstSmenu")]
   fsm.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
      elem.classList.add("bgS");

    })
    elem.addEventListener("mouseleave",function(){
      elem.classList.remove("bgS")
    })


  })
  let dInsp=document.querySelector("div.Insp")
  //Nutr Insp ecatalo
  fsm[0].addEventListener("click",function(){
    if(Nu.classList.contains("bgN")){
      Nu.classList.remove("bgN");
       };
    if(ecatalo.classList.contains("hidden")){
      
     ecatalo.classList.remove("hidden");
      };
     if(!dInsp.classList.contains("hidden")){
      
     dInsp.classList.add("hidden");
     };
     if(!dnutr.classList.contains("hidden")){
      
     dnutr.classList.add("hidden")
     };

  });
  fsm[1].addEventListener("click",function(){
    if(Nu.classList.contains("bgN")){
      Nu.classList.remove("bgN");
       };
     if(dInsp.classList.contains("hidden")){
      
      dInsp.classList.remove("hidden");
       };
      if(!ecatalo.classList.contains("hidden")){
       
      ecatalo.classList.add("hidden");
      };
      if(!dnutr.classList.contains("hidden")){
       
      dnutr.classList.add("hidden")
      };
  })

let view01=ecatalo.querySelector("div.View01");
let v01=view01.querySelector("div.view0101");
let v0101=v01.querySelector("button");
view01.addEventListener("mouseenter",function(){
  v01.classList.remove("opacity-0"); 
})
view01.addEventListener("mouseleave",function(){
  v01.classList.add("opacity-0"); 
})
v0101.addEventListener("mouseenter",function(){
  v0101.classList.add("bgButton")

})
v0101.addEventListener("mouseleave",function(){
  v0101.classList.remove("bgButton")

})




  let view=[...Insp.getElementsByClassName("View")];
  view.forEach((elem)=>{
    let v=elem.querySelector("div");
    
    
    let vi=v.querySelector("div>button");
    vi.addEventListener("mouseenter",function(){
      vi.classList.add("bgButton")
    })
    vi.addEventListener("mouseleave",function(){
      vi.classList.remove("bgButton")
    })
    elem.addEventListener("mouseenter",function(){
      v.classList.remove("opacity-0");  
    })
    elem.addEventListener("mouseleave",function(){
      v.classList.add("opacity-0");  
    })
    
  })

  
    //----------------------------------------------------------------first-icon----------------------------------------------------------------
    let icon=document.querySelector("div.menuIcon")
    let fl=icon.querySelector("div:nth-of-type(1)")
    let sl=icon.querySelector("div:nth-of-type(2)")
    let tl=icon.querySelector("div:nth-of-type(3)")
    let bigboxf=document.querySelector("div.bigboxf")
    let cwrapper=document.querySelector("div.cwrapper")
    let swi=document.querySelector("div.swi")
    icon.addEventListener("click",function(){
      fl.classList.toggle("rotate01");
      sl.classList.toggle("rightop");
      tl.classList.toggle("rotate02");
      bigboxf.classList.toggle("left-30");
      
    cwrapper.classList.toggle("blure");
    swi.classList.toggle("notBlure");


      
    })
    cwrapper.addEventListener("click",function(){
      bigboxf.classList.remove("left-30");
      
    cwrapper.classList.remove("blure");
    swi.classList.remove("notBlure");

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
    let shoppingBag=[...document.getElementsByClassName("SHB")];
    
   shoppingBag.forEach((elem)=>{
    
    elem.addEventListener("mouseenter",function(){
      elem.classList.add("textBag");

    })
    elem.addEventListener("mouseleave",function(){
      elem.classList.remove("textBag")
    })
   })

    let SHL=shoppingBag[2].querySelector("div:nth-of-type(1)");
    shoppingBag[2].addEventListener("mouseenter",function(){
      SHL.classList.add("displayBag");
      
      swi.classList.add("notBlure");
    cwrapper.classList.add("blure");
    })
    shoppingBag[2].addEventListener("mouseleave",function(){
      SHL.classList.remove("displayBag");
      swi.classList.remove("notBlure");
    cwrapper.classList.remove("blure");
    })
    
   };
  
  export default menn;