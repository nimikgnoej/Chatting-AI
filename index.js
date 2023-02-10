const send = document.querySelector(".text-submit")
const text = document.querySelector(".text-input")
const mainboard = document.querySelector(".main-chat")
import { Configuration, OpenAIApi } from "openai";

const clickSend = () => {
    const myText = text.value;
    const template = `<div class="line">
        <div class="chatbox chatbox-right">${myText}</div>
    </div>`
    mainboard.innerHTML += template;
    text.value = "";

    const configuration = new Configuration({
        organization: "org-zeImgnv8EAVoVuLnte5GxkEd",
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    }).then((result) => {
        console.log(result)
    });

}

send.addEventListener("click", clickSend);
