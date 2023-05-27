const checkbox = document.getElementById("select")
const prices = document.querySelectorAll('.planning__card #plan__price')
const annual = document.querySelector('.annual');
checkbox.addEventListener("change",(e)=>{
    let gap=0;
    let i=0;
    e.preventDefault()
    if(!checkbox.checked){
        annual.style.color='hsl(237, 63%, 64%)';
        prices.forEach((price)=>{ 
            price.innerText =((+price.innerText) + (180)) + (gap * i) ;
            gap+=45;
            i++;
        })
    }
    else{  
        annual.style.color='hsl(233, 13%, 49%)';
        prices.forEach((price)=>{   
            price.innerText =(((+price.innerText) - 180) - (gap * i)).toFixed(2) ;
            gap+=45;
            i++;
        })
    }

})
