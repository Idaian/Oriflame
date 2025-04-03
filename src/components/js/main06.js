let sec06 = document.querySelector("div.wrapper>div.section06>div.product");

let s06 = async () => {
    let res = await (await fetch("http://localhost:2000/section06")).json();

    res.forEach(elem => {
        sec06.innerHTML += `
            <div class="w-[48.8%] h-auto    ">
            
                <div class=" w-full h-auto bg-[#F6F6F6] relative rounded-[5px] !mb-[8px] overflow-hidden  ">

                    <div class="w-full h-auto font-[f01] text-[9px]  absolute bottom-0 text-center z-[1]  ">
                        ${elem.coming}
                    </div>
                    <img class="imgsec06  transition-all duration-500 " src="${elem.img}">
                    <div class=" w-[36px] h-[36px] rounded-[50px] bg-white flex justify-center items-center absolute bottom-0 right-0 !mr-[11px] !mb-[30px] shadow " >
                        <div class="relative w-6 h-6">
                            <svg 
                            class="absolute inset-0 transition-opacity duration-300 hover:opacity-0" 
                            xmlns:xlink="http://www.w3.org/1999/xlink" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24">
                                <path d="M6.434 9H4.5a1.5 1.5 0 0 0-1.486 1.703l1.227 9A1.5 1.5 0 0 0 5.728 21h12.254a1.5 1.5 0 0 0 1.486-1.297l1.227-9A1.5 1.5 0 0 0 19.21 9h-1.933c-.087-2.548-.848-4.078-1.933-4.96C14.208 3.118 12.826 3 11.855 3c-.975 0-2.355.126-3.49 1.051C7.282 4.936 6.521 6.464 6.434 9m1 0c.086-2.329.778-3.533 1.564-4.174.858-.7 1.942-.826 2.857-.826.917 0 2 .12 2.857.817.785.637 1.477 1.84 1.563 4.183zm8.868 1 .053 1.448a.5.5 0 0 0 1-.018c0-.528-.013-.987-.037-1.43h1.891a.5.5 0 0 1 .495.568l-1.227 9a.5.5 0 0 1-.495.432H5.728a.5.5 0 0 1-.496-.432l-1.227-9A.5.5 0 0 1 4.5 10h1.905q-.001.372.01.756.009.333.01.674a.5.5 0 1 0 1 0c0-.285-.006-.535-.012-.766-.005-.236-.01-.452-.008-.664z" fill="#333333"></path>
                            </svg>
                            <svg 
                                class="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" 
                                xmlns:xlink="http://www.w3.org/1999/xlink" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                width="24" 
                                height="24"
                                >
                                    <path d="M19.2 9c.9 0 1.6.8 1.5 1.7l-1.2 9c-.1.7-.7 1.3-1.5 1.3H5.7c-.7 0-1.4-.6-1.5-1.3l-1.2-9C2.9 9.8 3.6 9 4.5 9h1.9c.1-2.5.9-4.1 2-4.9 1.1-1 2.5-1.1 3.5-1.1s2.4.1 3.5 1 1.8 2.5 1.9 5zM7.4 11.4V10h-1v1.4c0 .3.2.5.5.5s.5-.2.5-.5m0-2.4h9c-.1-2.4-.8-3.6-1.6-4.2-.9-.7-2-.8-2.9-.8-1 0-2 .1-2.9.8-.8.7-1.5 1.9-1.6 4.2m10 2.4V10h-1v1.4c0 .3.2.5.5.5s.5-.2.5-.5" fill="#333333"></path>
                            </svg>
                        </div>
                    </div>
                    <div class=" w-[36px] h-[36px] rounded-[50px] bg-white flex justify-center items-center absolute bottom-[40px] right-0 !mr-[11px] !mb-[30px] shadow   " >
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit frontpage-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HeartIcon" width="24" height="24"><path d="m12 20.5-.243.437-.002-.001-.006-.003-.021-.012-.08-.046-.293-.173a29 29 0 0 1-4.187-3.078C4.906 15.613 2.5 12.734 2.5 9.5c0-1.6.468-2.875 1.242-3.796A4.67 4.67 0 0 1 6.68 4.092c1.947-.28 4.088.582 5.321 2.528 1.233-1.946 3.374-2.809 5.321-2.528a4.67 4.67 0 0 1 2.937 1.612C21.032 6.624 21.5 7.9 21.5 9.5c0 3.233-2.406 6.113-4.668 8.124a29 29 0 0 1-4.531 3.28l-.029.017-.02.012-.007.003h-.001s-.001.001-.244-.436M4.508 6.348C3.907 7.063 3.5 8.1 3.5 9.5c0 2.767 2.094 5.387 4.332 7.376A28 28 0 0 0 12 19.922l.129-.077a28 28 0 0 0 4.04-2.97C18.406 14.887 20.5 12.267 20.5 9.5c0-1.4-.407-2.437-1.008-3.152a3.67 3.67 0 0 0-2.313-1.266c-1.781-.257-3.81.675-4.719 2.808L12 8.97l-.46-1.08c-.909-2.133-2.938-3.065-4.719-2.808a3.67 3.67 0 0 0-2.313 1.266M12 20.5l.244.437a.5.5 0 0 1-.487 0z" fill="#333333"></path></svg>
                    </div>
                </div>

                <div class="star w-full h-[20px] flex !mb-[10px]">
                    <img class=" w-[20px] h-[20px]  " src="${elem.star}">
                    <img class=" w-[20px] h-[20px]  " src="${elem.star}">
                    <img class=" w-[20px] h-[20px]  " src="${elem.star}">
                    <img class=" w-[20px] h-[20px]  " src="${elem.star}">
                    <img class=" w-[20px] h-[20px] !mr-[3px] " src="${elem.star}">
                    <span class=" w-[20px] h-full flex items-center text-[11.5px] font-[f01] text-[#333333]  " >
                    (${elem.number})
                    </span>
                </div>

                <div class="lable !mb-[8px]  ">
                    <h6 class="w-full h-[15px] font-[f02] text-[10px] tracking-[2px] text-[#4B4B4B] !ml-[2px]  " > ${elem.h6} </h6>
                </div>

                <div class="span !mb-[8px]">
                    <span class="w-full h-[40px] font-[f02] text-[14px]  !ml-[2px]  " > ${elem.span} </span>
                </div>

                <div class="color">
                </div>

                <div class="money">
                    <span class="w-full text-[#DA3A00] font-[f01] text-[14px] !mr-[10px]  "> ${elem.money} </span>

                    <span class="w-full font-[f02] text-[#666666] text-[14px] !line-through  " > ${elem.off} </span>

                </div>


            </div>        

        `;
    });

    



    let sscale=[...document.getElementsByClassName("imgsec06")];
    
    
    sscale.forEach(elem=>{
        elem.addEventListener("mouseenter", function(){
           this.classList.add("scale")
        }),
        elem.addEventListener("mouseleave", function(){
            this.classList.remove("scale")
        })
    });


    
    let secc06=document.querySelector("div.section06");
    let siz=secc06.querySelector("button.lersc06");

    siz.addEventListener("mouseenter",function(){
        this.classList.add("brw");
    }),
    siz.addEventListener("mouseleave", function(){
        this.classList.remove("brw")
    });


    let vie=secc06.querySelector("button.viesec06");

    vie.addEventListener("mouseenter",function(){
        this.classList.add("vie");
    }),
    vie.addEventListener("mouseleave", function(){
        this.classList.remove("vie")
    });


};

export default s06;
