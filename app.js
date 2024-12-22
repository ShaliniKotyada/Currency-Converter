const BASE_URL ="https://api.exchangerate.host";
let button=document.querySelector(".btn");
let inp=document.querySelector(".amount input");
let from=document.querySelector(".from select");
let to=document.querySelector(".to select");
let msg=document.querySelector(".msg");
let dropdowns=document.querySelectorAll("select");


// updating flag
const updateFlag=(ele)=>{
    let currCode=ele.value;
    let countryCode=countryList[currCode];
    let image=ele.parentElement.querySelector("img");
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    image.src=newSrc;
}

// appending the list of codes
for(let select of dropdowns){
    for(let curr in countryList){
        let newOption=document.createElement("option");
        newOption.innerText = curr;
        newOption.value = curr;
        if(select.name === "from" && curr === "USD"){
            newOption.selected=true;
        }
        else if(select.name==="to" && curr ==="INR"){
            newOption.selected=true;
        }
        select.append(newOption);
    }
        select.addEventListener("change",(evt)=>
        {
            updateFlag(evt.target);
        })
    }

    
    const updateMsg = async ()=>{
        let amountVal=inp.value;
    if(amountVal==='' || amountVal<1){
        amountVal=1;
        inp.value=1;
    }


        const MAIN_URL=`${BASE_URL}/convert?access_key=15c147ca8e43b677de08540417a8b11d&from=${from.value}&to=${to.value}&amount=${amountVal}`;
        let response = await fetch(MAIN_URL);
        let data = await response.json();
        
        let rate=data.result;
        let finalAmt=amountVal*rate;
        msg.innerText=`${amountVal} ${from.value}=${finalAmt} ${to.value}`;
        
    }
      //button msg
    button.addEventListener("click",(evt)=>{
        evt.preventDefault();
        updateMsg()});

        // automatically shows default msg when window loads
    window.addEventListener("load", () => {
          updateMsg();
         });

    






































// const BASE_URL =
//   "https://api.exchangerate.host";
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/convert?access_key=15c147ca8e43b677de08540417a8b11d&from=${fromCurr.value}&to=${toCurr.value}&amount=${amtVal}`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data.result;

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });