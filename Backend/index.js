// index.js
// This file contains the complete logic for the chat API endpoint.

// Required imports for an ES Module project
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { validationResult } from "express-validator";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Custom imports for modularity
import staticKnowledge from "./modularity/knowledge.js";
import { chatValidationRules } from "./modularity/validation.js";

// --- API Keys and Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Check if API keys are configured
if (!GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY is not set in the .env file.");
  process.exit(1);
}
if (!OPENWEATHERMAP_API_KEY) {
  console.error(
    "WARNING: OPENWEATHERMAP_API_KEY is not set. Weather data will not be available."
  );
}

// Initialize the Express app and bodyParser middleware
const app = express();
app.use(bodyParser.json());

// Set the port
const PORT = process.env.PORT || 3000;

// --- Helper Functions ---

/**
 * Fetches real-time weather data for a given location using the OpenWeatherMap API.
 * @param {string} location The city or location name.
 * @returns {string} A formatted weather string or an error message.
 */
const getWeatherData = async (location) => {
  if (!OPENWEATHERMAP_API_KEY) {
    return "Weather data is not available.";
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }
    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;
    return `Current weather in ${location}: ${description} with a temperature of ${temp}°C.`;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return `I am unable to fetch the weather for ${location} right now.`;
  }
};

// --- Chat Endpoint ---

app.post("/api/chat", chatValidationRules(), async (req, res) => {
  // --- Task: Receive query, language, and location (Already completed) ---
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { user_query, user_language, user_location } = req.body;

  console.log(
    `Received request from user in ${user_location}: "${user_query}"`
  );

  try {
    // 1. Get dynamic data from external APIs
    const weatherData = await getWeatherData(user_location);

    // --- Task: Generate Few-Shot Prompt ---
    // This is where you combine all information to create the prompt for Gemini.
    const promptTemplate = `
${staticKnowledge.general}
User Location: ${user_location}
User Language: ${user_language}
Knowledge Base:
- Weather: ${weatherData}
- Farming advice for ${user_location}: ${
      staticKnowledge.locations[user_location]?.wheat ||
      "No specific advice available."
    }
- Common pests: ${
      staticKnowledge.locations[user_location]?.pests ||
      "No specific pest info available."
    }

Conversation Examples:
- User: What is the weather in Delhi today?
- Assistant: Today, the weather in Delhi is sunny with a temperature of 35°C.

- User: What is the recommended fertilizer for wheat in Punjab?
- Assistant: For wheat in Punjab, you can use a balanced fertilizer like DAP at the time of sowing. It helps in strong root development and growth.

- User: ${user_query}
Assistant:
`;

    // 2. Send the Prompt to the Gemini API
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(promptTemplate);

    // --- Task: Process Response & Send Back ---
    // This is where you handle the AI's response and format it for the frontend.
    const response = await result.response;
    const text = response.text();

    res.status(200).json({
      response: text,
      source: "Gemini API",
    });
  } catch (error) {
    console.error("An error occurred during API processing:", error);
    res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
