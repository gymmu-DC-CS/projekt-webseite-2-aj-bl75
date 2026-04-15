// 1. Umfrage-Funktion
function vote(option) {
    const resultDisplay = document.getElementById('poll-result');
    resultDisplay.innerText = "Danke für's Mitmachen! " + option + " ist wirklich super spannend!";
    
    // Kleiner Animationseffekt
    resultDisplay.style.opacity = 0;
    let opacity = 0;
    let timer = setInterval(() => {
        if(opacity >= 1) clearInterval(timer);
        resultDisplay.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
}

// 2. Zufällige Fakten (bessere Auswahl)
const pandaFacts = [
    "Ein Panda macht bis zu 40 Kilo Kot pro Tag – das ist fast nur verdauter Bambus!",
    "In China wird das Töten eines Pandas extrem hart bestraft.",
    "Pandas sind hervorragende Schwimmer und können sogar klettern.",
    "Ein Panda-Baby ist bei der Geburt 900-mal kleiner als seine Mutter.",
    "Pandas verbringen mehr als die Hälfte ihres Lebens mit Essen."
];

function nextFact() {
    const factText = document.getElementById('fact-text');
    const randomFact = pandaFacts[Math.floor(Math.random() * pandaFacts.length)];
    
    factText.style.transform = "scale(0.8)";
    setTimeout(() => {
        factText.innerText = randomFact;
        factText.style.transform = "scale(1)";
        factText.style.transition = "all 0.3s ease";
    }, 200);
}

// 3. Smooth Scroll Effekt für die Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});