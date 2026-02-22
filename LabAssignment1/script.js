const title = document.querySelector("#title");
const date = document.querySelector("#date");
const category = document.querySelector("#category");
const desc = document.querySelector("#desc");
const addBtn = document.querySelector("#addBtn");
const eventList = document.querySelector("#eventList");
const clearBtn = document.querySelector("#clearBtn");
const sampleBtn = document.querySelector("#sampleBtn");

let events = [];

function renderEvents(){
    eventList.innerHTML = "";53

    events.forEach((e, i)=>{
        const div = document.createElement("div");
        div.className = "event";

        div.innerHTML = `
            <div class="delete" onclick="deleteEvent(${i})">x</div>
            <h4>${e.title}</h4>
            <p>${e.date}</p>
            <span>${e.category}</span>
            <p>${e.desc}</p>
        `;

        eventList.appendChild(div);
    });
}

addBtn.addEventListener("click", ()=>{
    if(title.value === "" || date.value === "") return;

    events.push({
        title: title.value,
        date: date.value,
        category: category.value,
        desc: desc.value
    });

    renderEvents();
    title.value = "";
    date.value = "";
    desc.value = "";
});

function deleteEvent(i){
    events.splice(i,1);
    renderEvents();
}

clearBtn.onclick = ()=> {
    events = [];
    renderEvents();
};

sampleBtn.onclick = ()=> {
    events.push({
        title:"Sample Event",
        date:"2026-01-14",
        category:"Sample Category",
        desc:"Sample event description."
    });
    renderEvents();
};
