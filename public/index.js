function ToggleActive(el) {
    var prevCard = document.querySelectorAll(".skill-card.active")[0];
    if (prevCard)
        prevCard.classList.remove('active');
    if (!prevCard || prevCard.id !== el.id)
        el.classList.add('active');
}