import { GoogleGenAI } from "@google/genai";

const apiKey1 = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: apiKey1,
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  const rel = response.text;
  return rel;
}

export default main;
