const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const funct = async () => {
    const response = await openai.createModeration({
        input: "NO.",
    });
    console.log(response)
};
funct()