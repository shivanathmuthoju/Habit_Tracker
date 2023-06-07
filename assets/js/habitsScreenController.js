let addHabitBtn = document.getElementById("menuAddHabitBtn");
let closeHabitMenuBtn = document.getElementById("closeHabitMenu");

addHabitBtn.addEventListener('click', () => {
    let addHabitMenu = document.getElementById("addHabitMenu");
    addHabitMenu.style.width = "100%";
    addHabitMenu.style.padding = "20px";
    
    // addHabitMenu.classList.toggle("disable");
})

closeHabitMenuBtn.addEventListener('click', () => {
    let addHabitMenu = document.getElementById("addHabitMenu");
    addHabitMenu.style.width = "0";
    addHabitMenu.style.padding = "0";

})