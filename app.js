const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".select-container select");
const amount = document.querySelector("#amount");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg p");
const burger = document.querySelector(".burger");
const crossbtn = document.querySelector(".cross");
const mobtheme =  document.querySelector("#mth");
const mobabt = document.querySelector(".mob-about");
const mobres = document.querySelector(".mob-res");

for (select of dropdowns) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode + "  -  " + countryList[currcode];
    newOption.value = currcode;
    select.append(newOption);
    if (select.id === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.id === "to" && currcode === "INR") {
      newOption.selected = "selected";
    }
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const convert = async (fromCurr,toCurr) => {
  let amount = document.querySelector("#amount");
  let amtValue = amount.value;
  if(!amtValue){
    amtValue = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  rate = (amtValue*rate).toFixed(2);
  msgUpdate(amtValue,rate);
};

const updateFlag = (ele) => {
  currcode = ele.value;
  cc = countryList[currcode];
  let newsrc = `https://flagsapi.com/${cc}/flat/64.png`;
  let img = ele.parentElement.querySelector("img");
  img.src = newsrc;
};

handleInput = (input) => {
  input.value = input.value.replace(/\D/g, "");
};

const msgUpdate = (amtValue,rate)=>{
    msg.innerText = `${amtValue} ${fromCurr.value} = ${rate} ${toCurr.value}`
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  convert(fromCurr, toCurr);
});

document.addEventListener('DOMContentLoaded' ,()=>{
    convert(fromCurr,toCurr);
})


document.querySelector("#about").addEventListener("mouseover",(ele)=>{
    document.querySelector(".hiddenabout").style.display = "block";
})

document.querySelector("#about").addEventListener("mouseout",(ele)=>{
    document.querySelector(".hiddenabout").style.display = "none";
})

document.querySelector("#resource").addEventListener("mouseover",(ele)=>{
    document.querySelector(".hiddenresource").style.display = "block";
})
document.querySelector("#resource").addEventListener("mouseout",(ele)=>{
    document.querySelector(".hiddenresource").style.display = "none";
})

document.querySelector("#contact").addEventListener("mouseover",(ele)=>{
    document.querySelector(".hiddencontact").style.display = "block";
})
document.querySelector("#contact").addEventListener("mouseout",(ele)=>{
    document.querySelector(".hiddencontact").style.display = "none";
})



burger.addEventListener("click",()=>{
 let menu =  document.querySelector(".menu-parent");
 menu.style.display="block";
 document.querySelector(".burger").style.display = "none"
 document.querySelector(".container").style.filter = "blur(12px)"
});

crossbtn.addEventListener("click",()=>{
  document.querySelector(".menu-parent").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0)"
  document.querySelector(".burger").style.display = "block"

});

mobabt.addEventListener("click",()=>{
document.querySelector(".hidden").style.display="block";
let abtMobEle = document.createElement("div");
let abtMobEleCont = document.createElement("p");
let pcontent = document.querySelector(".hiddenabout p");
abtMobEleCont = pcontent;
abtMobEleCont.style.color = "#0fcd7e"
abtMobEle.classList.add("hiddenabout");
abtMobEle.classList.add("hidden");
abtMobEle.style.display = "block";
// console.log(abtMobEleCont);
abtMobEle.append(abtMobEleCont);
mobabt.parentElement.append(abtMobEle);


});

mobres.addEventListener("click",()=>{
  document.querySelector(".hidden").style.display="block";
  let srcMobEle = document.createElement("div");
  let srcMobEleCont = document.createElement("p");
  let pcontent = document.querySelector(".hiddenresource p");
  srcMobEleCont = pcontent;
  srcMobEleCont.style.color = "#0fcd7e"
  srcMobEle.classList.add("hiddenabout");
  srcMobEle.classList.add("hidden");
  srcMobEle.style.display = "block";
  // console.log(srcMobEleCont);
  srcMobEle.append(srcMobEleCont);
  mobres.parentElement.append(srcMobEle);
});

const togglebtn = document.querySelector(".theme");
toggle = false;

const toggleFun = () => {
  if (toggle == false) {
    document.body.style.backgroundColor = "#11101E";
    document.querySelector("header").style.borderBottom = "1px solid white";
    document.querySelector(".container").style.border = "1px solid white";
    document.querySelector(".container").style.backgroundColor = "#13121E";
    document.querySelector(".burger i").style.color = "white";
    let arrow = document.querySelectorAll(".select-container select");
    arrow.forEach(el=>{
        el.style.background = 'url("down-chevron.png")  no-repeat right 15px center';
        el.style.backgroundSize = "20px"
     
    });
    let options = document.querySelectorAll(".select-container select option");
    options.forEach(el=>{
        el.style.backgroundColor ="#11101E";
        el.style.color = "white";
  

    })
    let ximg = document.querySelector(".exchange img");
    ximg.src = "transfer.png"
    btn.style.backgroundColor="#13121E";
    btn.style.border="2px solid white";
    btn.style.boxShadow = "none"
    let amount = document.querySelector("#amount");
    amount.style.backgroundColor = "#272727";
    amount.style.border = "2px solid white";
    amount.style.color = "white";
    let h1  = document.querySelectorAll("h1");
    let p = document.querySelectorAll("p");
    document.querySelector("footer i").style.color = "white"
    h1.forEach(element => {
        element.style.color = "white";
    });
    p.forEach(element => {
        element.style.color = "white";
    });
    let sl = document.querySelectorAll(".select-container");
    sl.forEach(el=>{
        el.style.border = "2px solid white";
    });
    let sls = document.querySelectorAll(".select-container select");
    sls.forEach(el=>{
        el.style.color = "white";
    });
    let slsimg = document.querySelectorAll(".select-container img");
    slsimg.forEach(el=>{
        el.style.borderRight = "2px solid white";
    });
    let li = document.querySelectorAll(".li");
    li.forEach(el=>{
        el.style.backgroundColor = "#11101E";
        el.style.border = "1px solid white";
    })
    let hidden = document.querySelectorAll(".hidden");
    hidden.forEach(ele=>{
        ele.style.backgroundColor = "tomato";
        ele.style.border = "1px solid white";
    })
    toggle = true;
} else {
    toggle = false;
    location.reload();
  }
};

togglebtn.addEventListener("click",toggleFun);
mobtheme.addEventListener("click",()=>{
  toggleFun();
  document.querySelector(".menu").style.backgroundColor = "#11101E";
 
});