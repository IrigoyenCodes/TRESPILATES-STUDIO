
import { GoogleGenAI } from "@google/genai";

const fetchAffirmation = async (): Promise<string> => {
    if (!process.env.API_KEY) {
        console.error("API_KEY environment variable not set.");
        return "Remember to breathe deeply and honor your body today. (Default)";
    }
    
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'Generate a short, positive affirmation for someone who loves Pilates and wellness. It should be inspiring, one sentence long, and without quotation marks.',
        });
        
        const text = response.text;
        if (text) {
            return text.trim();
        } else {
            throw new Error("Received an empty response from the API.");
        }
    } catch (error) {
        console.error("Error fetching affirmation from Gemini API:", error);
        throw new Error("Failed to generate an affirmation. Please try again later.");
    }
};

export { fetchAffirmation };
