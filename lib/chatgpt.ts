import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default openai;



// 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