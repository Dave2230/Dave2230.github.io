const wordCycle = document.querySelector(`.wordCycle`);
const wordList = [
    "Accomplish",
    "Achieve",
    "Act",
    "Action",
    "Active",
    "Admiration",
    "Admire",
    "Adventure",
    "Alive",
    "Ambition",
    "Ambitious",
    "Appreciate",
    "Appreciation",
    "Attain",
    "Attitude",
    "Beauty",
    "Believe",
    "Believable",
    "Bliss",
    "Breakdown",
    "Breathtaking",
    "Build",
    "Catalyst",
    "Challenge",
    "Clarity",
    "Commit",
    "Commitment",
    "Compassion",
    "Complete",
    "Concentrate",
    "Confidence",
    "Content",
    "Control",
    "Conquer",
    "Courage",
    "Create",
    "Dare",
    "Dedicate",
    "Dedication",
    "Desire",
    "Determination",
    "Determine",
    "Dream",
    "Dreams",
    "Drive",
    "Eager",
    "Earnest",
    "Empower",
    "Empowering",
    "Empowerment",
    "Encourage",
    "Encouragement",
    "Encouraging",
    "Endurance",
    "Endure",
    "Energetic",
    "Energy",
    "Enjoy",
    "Enjoyment",
    "Enthusiasm",
    "Envision",
    "Escape",
    "Excellence",
    "Experiences",
    "Faith",
    "Faithful",
    "Faithfulness",
    "Fearless",
    "Fighter",
    "Finish",
    "Finisher",
    "Fire",
    "Fix",
    "Focus",
    "Forgive",
    "Freedom",
    "Fulfilment",
    "Glory",
    "Goal",
    "Goodness",
    "Gratitude",
    "Happiness",
    "Happy",
    "Harmony",
    "Honesty",
    "Honor",
    "Hope",
    "Humble",
    "Humility",
    "Hunger",
    "Imagination",
    "Imagine",
    "Impetus",
    "Improve",
    "Incentive",
    "Ineffable",
    "Initiative",
    "Inspiration",
    "Inspire",
    "Inspiring",
    "Integrity",
    "Interest",
    "Joy",
    "Joyful",
    "Joyfulness",
    "Kind",
    "Kindness",
    "Know",
    "Knowledge",
    "Laugh",
    "Lead",
    "Leading",
    "Learn",
    "Life",
    "Live",
    "Limitless",
    "Love",
    "Loving",
    "Mindful",
    "Mindset",
    "Mission",
    "Meaning",
    "Meaningful",
    "Memories",
    "Momentum",
    "Motivate",
    "Motivated",
    "Motivation",
    "Motive",
    "Move",
    "Movement",
    "Moving",
    "Now",
    "Nurture",
    "Obstacles",
    "Opportunity",
    "Optimistic",
    "Outstanding",
    "Overcome",
    "Passion",
    "Patience",
    "Peace",
    "Peaceful",
    "Peacefulness",
    "Persevere",
    "Perseverance",
    "Persist",
    "Persistence",
    "Persuade",
    "Plan",
    "Planner",
    "Positive",
    "Possibilities",
    "Power",
    "Powerful",
    "Practice",
    "Pride",
    "Prioritize",
    "Reach",
    "Rise",
    "Risk",
    "Role",
    "Safe",
    "Safety",
    "Satisfaction",
    "Satisfy",
    "Secure",
    "Security",
    "Self",
    "Skill",
    "Skilful",
    "Skilfulness",
    "Spirit",
    "Spirited",
    "Spur",
    "Stimulus",
    "Strength",
    "Strong",
    "Succeed",
    "Success",
    "Sustain",
    "Sustenance",
    "Teach",
    "Teachable",
    "Time",
    "Trust",
    "Trustworthy",
    "Truth",
    "Understand",
    "Understood",
    "Value",
    "Values",
    "Versatile",
    "Will",
    "Willpower",
    "Winner",
    "Wisdom",
    "Wise",
    "Worthy",
    "Yearn",
    "Yearning"
];

let duration = 2000;

function showWord() {
    setTimeout(function () {
        wordCycle.style.opacity = `1`;
    }, duration / 8)
}

function changeWord(randWordIndex) {
    wordCycle.innerText = wordList[randWordIndex];
}

function hideWord() {
    setTimeout(function () {
        wordCycle.style.opacity = `0`;
    }, duration / 2)
}

// wordCycle.innerText = wordList[randWordIndex];
let intervalCount = 0;

const wordCycleInterval = setInterval(function () {
    let randWordIndex = Math.floor(Math.random() * wordList.length) + 0;
    intervalCount++;
    if (intervalCount !== wordList.length - 1) {
        console.log(wordList[randWordIndex]);
        hideWord();
        changeWord(randWordIndex);
        showWord();
    } else {
        changeWord();
        showWord();
        clearInterval(wordCycleInterval);
    }
}
    , duration
)

let sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
let slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener("click", function (el) {
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
    } else { slider.classList.add("active"); }
});
