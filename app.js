const setOfWords = [
    "Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do.",
    "Some people will feel that there is one and only one job in the world for them.",
    "Jobs are there for those with skills and a good work ethic.",
    "These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others.",
    "Learning to typewrite is a skill that will help all of us in our work today.",
    "Managers, as well as secretaries, will need skill at the keyboard to input data and process words."
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed at " + speed + " words per minute. "
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            count++;
        }
    })

    let errorWords = words1.length - count;

    return (count + " correct out of " + words1.length +
        " words and the total number of error are " + errorWords + ".");
}

// console.log(Math.floor(Math.random() * setOfWords.length));

btn.addEventListener('click', function() {
    // console.log(this);
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = false;
        btn.innerText = "Start";
        endPlay();
    }
})