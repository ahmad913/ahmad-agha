function ToggleActive(el) {
    var prevCard = document.querySelectorAll(".skill-card.active")[0];
    if (prevCard)
        prevCard.classList.remove('active');
    if (!prevCard || prevCard.id !== el.id)
        el.classList.add('active');
}

let intervalId;
let timeoutId;
const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
    'Angular',
    'C#',
    'Xamarin',
    'Blazor',
    'Kotlin',
    'Git',
    'Jira',
];
function cycleSkills() {
    const skillDisplay = document.getElementById('skillDisplay');
    const currentValue = skillDisplay.innerText;
    const currentIndex = skills.indexOf(currentValue);
    const nextIndex = (currentIndex + 1) % skills.length;
    skillDisplay.innerText = skills[nextIndex];
}

function nextSkill() {
    clearInterval(intervalId);

    cycleSkills();

    clearTimeout(timeoutId)
    timeoutId = setTimeout(function () {
        intervalId = setInterval(cycleSkills, 3500);
    }, 5000);
}

intervalId = setInterval(cycleSkills, 3500);