const emoji = document.querySelector(".emoji");
const apiKey = "f6ba07d1239e4e555cc11299207a6694a99c9840"
const emojiName = document.querySelector(".emoji-name")
const apiUrl = "https://emoji-api.com/emojis?access_key="
const emojiContainer = document.querySelector(".emoji-container")

let emojis = [];
// emoji.disabled = true;
const getEmoji = async () => {
    // emojiContainer.disabled = true;
    try {
        emoji.innerHTML = `
                        <div class="three-quarter-spinner"></div>
                        `
    let response = await fetch(`${apiUrl}${apiKey}`);
    let data = await response.json()
    // emojiContainer.disabled = false;
    emoji.innerText = "Click"
    console.log(data)
    for (let i = 0; i < 1500; i++)
    {
        emojis.push({
            character: data[i].character,
            naam: data[i].unicodeName
    })
    }

    console.log(emojis)
    } catch (error) {
        emoji.innerHTML = `<h2 class="emoji-name">Try again later</h2>`
        emojiName.innerHTML = `<button onclick="tryAgain">Try again</button>`
    }


}

getEmoji();

const tryAgain = () => {
    location.reload();
}

emojiContainer.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * emojis.length);
    let randomEmoji = emojis[randomNumber].character;
    let randomEmojiName = emojis[randomNumber].naam;
    emoji.innerText = randomEmoji;
    emojiName.innerText = randomEmojiName;


    
})