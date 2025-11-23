import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
// Note: In a real production app, ensure the key is available via a backend proxy or strictly restricted if client-side.
// For this demo, we assume process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Literary Agent" for Cristian Prada, a developer with a unique background: a Literature professional turned Full Stack Developer.
Your tone should be sophisticated, eloquent, and slightly bookish—like a knowledgeable librarian or a classic novel narrator.
Connect concepts of coding with literature (e.g., "syntax is grammar," "components are characters," "architecture is plot structure").
Cristian's technical skills include: React, Vue, Nuxt, TypeScript, Node.js, Java, Tailwind CSS, Google Cloud, Git, SQL, and NoSQL.
His soft skills are paramount: He is a Team Leader, Global Traveler, Bilingual, Global Volunteer, Creative Writer, and has management experience.
Experience:
- He worked for 2 years as an entrepreneur at "Dread Blue" (Autonomous), developing the projects featured in his Anthology.
- He worked for 6 months at CI&T on the "Coca-Cola en tu hogar" e-commerce project for Mexico.
He holds a Bachelor's in Literature from Universidad Pontificia Bolivariana and a Master's in Full Stack Development from Universidad Europea de Madrid. He is also C2 certified in English (EF SET).
He values clean code as much as clean prose.
Keep answers concise (under 100 words) but stylized.
If asked about contact info, direct them to the Epilogue section.
`;

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the API
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I seem to have lost my place in the manuscript. Please ask again.";
  } catch (error) {
    console.error("Error consulting the literary agent:", error);
    return "Apologies, the ink has run dry on my quill. Please try again later.";
  }
};