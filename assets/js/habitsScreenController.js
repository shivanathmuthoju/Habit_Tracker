let addHabitBtn = document.getElementById("menuAddHabitBtn");
let closeHabitMenuBtn = document.getElementById("closeHabitMenu");

// when add habit btn is clicked -- shows the add habit menu
addHabitBtn.addEventListener('click', () => {
    let addHabitMenu = document.getElementById("addHabitMenu");
    addHabitMenu.style.width = "100%";
    addHabitMenu.style.padding = "20px";
    
})

// closes the add habit menu
closeHabitMenuBtn.addEventListener('click', () => {
    let addHabitMenu = document.getElementById("addHabitMenu");
    addHabitMenu.style.width = "0";
    addHabitMenu.style.padding = "0";

})

// checks the status of the habit on the given date -- returns the status "Done" or "Not Done"
async function getStatus(id, date) {
    let status = await fetch(`/habits/status/${id}?date=${date}`).then((res) => res.json());
    return status;
}

// fetches the status and adds the appropriate buttons to DOM
async function addBtnsToDOM(id, date) {
    let status = await getStatus(id, date);
    if(status.length > 0) { 
        let btnsContainer = document.querySelector(`.habitCardsBtnContainer[data-habit="${id}"]`);
        btnsContainer.innerHTML = `
        <button class="secondaryBtn-sm" data-value="Marked" data-habit="${id}" data-date="${date}"> Marked As ${status[0].status}</button>
    `
    }
    else {
        let btnsContainer = document.querySelector(`.habitCardsBtnContainer[data-habit="${id}"]`);
        btnsContainer.innerHTML = `
            <button class="primaryBtn-sm done" data-value="Done" data-habit="${id}" data-date="${date}" >Mark As Done</button>
            <button class="secondaryBtn-sm notDone" data-value="Not Done" data-habit="${id}" data-date="${date}" >Mark As Not Done</button>
        `
    }
}


window.addEventListener('load', async () => {

    let habitCards = document.querySelectorAll(".habitCards");

    for(let habit of habitCards) {
        
        const activeBtn = await document.querySelector(`.activeDay[data-habit="${habit.dataset.habit}"]`);
        addBtnsToDOM(habit.dataset.habit, activeBtn.dataset.date)
    }

})

window.addEventListener('click', async (e) => {
    
    let habitId = e.target.dataset.habit;
    let date = e.target.dataset.date;
    let status = e.target.dataset.value;

    if(e.target.classList.contains('dayBtn')) {
        let activeBtn = document.querySelector(`.activeDay[data-habit='${habitId}']`);
        activeBtn.classList.toggle("activeDay");
        e.target.classList.toggle("activeDay");
        addBtnsToDOM(habitId, date);
    }
    else if(status == "Done" || status == "Not Done"){
        await fetch(`/habits/updateStatus/${habitId}?date=${date}&status=${status}`, {
            method : "post"
        });
        let btnsContainer = document.querySelector(`.habitCardsBtnContainer[data-habit="${habitId}"]`);
        btnsContainer.innerHTML = `
        <button class="secondaryBtn-sm" data-value="Marked" data-habit="${habitId}" data-date="${date}"> Marked As ${status} </button>
        ` 
        updateDayButtonStyles(habitId, date, status)  
    }
    else if(status == "Marked") {
        
        let btnsContainer = document.querySelector(`.habitCardsBtnContainer[data-habit="${habitId}"]`);
        btnsContainer.innerHTML = `
            <button class="primaryBtn-sm done" data-value="Done" data-habit="${habitId}" data-date="${date}" >Mark As Done</button>
            <button class="secondaryBtn-sm notDone" data-value="Not Done" data-habit="${habitId}" data-date="${date}" >Mark As Not Done</button>
        `
    }
    else if(e.target.classList.contains('habitDeleteBtn')) {
        await fetch(`/habits/delete?id=${habitId}`, {
            method : 'delete'
        })
        let habitCard = document.querySelector(`.habitCards[data-habit="${habitId}"]`);
        habitCard.remove();
    }
    
})

function updateDayButtonStyles(id, date, status) {

    let dayBtn = document.querySelector(`.dayBtn[data-habit="${id}"][data-date="${date}"]`)
    if(status == "Done") {
        if(dayBtn.classList.contains('NotDone')) {
            dayBtn.classList.remove("NotDone")
            dayBtn.classList.add("Done")
        }
        else {
            dayBtn.classList.add("Done")
        }
    }
    else if(status == "Not Done") {
        
        if(dayBtn.classList.contains('Done')) {
            dayBtn.classList.remove("Done")
            dayBtn.classList.add("NotDone")
        }
        else {
            dayBtn.classList.add("NotDone")
        }
    }
   
}

