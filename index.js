const button = document.querySelector("#btn");
const quote = document.querySelector("#par");

const randomQuotes = [
    " “We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
    " “Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
    " “It is better to fail in originality than to succeed in imitation.” — Herman Melville",
    " “There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” — Mister Rogers",
    " “If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs",
    " “Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law",
    " “Either you run the day or the day runs you.” — Jim Rohn",
    " “Opportunity is missed by most people because it is dressed in overalls and looks like work.” — Thomas Edison",
    " “We don’t just sit around and wait for other people. We just make, and we do.” — Arlan Hamilton",
    " “Don’t let yesterday take up too much of today.” — Will Rogers"
]

button.addEventListener("click",()=>{
    let random = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    quote.style.display = "block";
    quote.textContent = random;
})