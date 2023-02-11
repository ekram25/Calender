const MonthEle= document.querySelector(".date h1");
const FullDateEle= document.querySelector(".date p");
const DayEl= document.querySelector(".days");

const monthInx =new Date().getMonth();

const LastDay =new Date(new Date().getFullYear(), monthInx +1, 0).getDate();
const FirstDay =new Date(new Date().getFullYear(), monthInx, 1).getDay()-1;
console.log(FirstDay);
    




const months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

MonthEle.innerText= (months[monthInx ]);
FullDateEle.innerText= new Date().toDateString();

let day = "";

for(let i = FirstDay ; i>0; i--){
    day += `<div class="empty"></div>` ;
}

for(let i=1; i <= LastDay; i++){
    if(i=== new Date().getDate()){
        day += `<div class="today">${i}</div>` ;
    }

    day += `<div>${i}</div>` ;
}

DayEl.innerHTML = day;