import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBouKC_C9lyquwqVBcRFC_V5x1-Q5P4U1k",
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
