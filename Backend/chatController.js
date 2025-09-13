require('dotenv').config();

const { getWeatherData } = require('./weather');
const { getCropMarketPrices } = require('./governmentData');
const { PredictionServiceClient } = require('@google-cloud/aiplatform').v1;
require('dotenv').config();

// Initialize Vertex AI client (reads service account JSON automatically)
const client = new PredictionServiceClient();

async function callGemini(prompt) {
  console.log("Using service account JSON from:", process.env.GOOGLE_APPLICATION_CREDENTIALS);
  try {
    const project = 'agro-bot-471819'; // your GCP project id
    const location = 'us-central1'; // region of the model
    const model = 'gemini-1.5'; // model name

    const endpoint = `projects/${project}/locations/${location}/publishers/google/models/${model}`;

    const [response] = await client.predict({
      endpoint,
      instances: [
        { content: prompt }
      ],
      parameters: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    // Extract text from the response
    const text = response.predictions?.[0]?.content || "Sorry, no response from Gemini.";
    return text;

  } catch (error) {
    console.error('Vertex AI / Gemini API Error:', error);
    return "Sorry, cannot fetch advice right now. Please try again later.";
  }
}

async function handleChatRequest(req, res) {
  const { user_query, user_location, user_language } = req.body;

  // Fetch dynamic data
  const weather = await getWeatherData(user_location);
  const state = user_location;
  const crop = 'Wheat';
  const cropPrice = getCropMarketPrices(state, crop);

  const retrievedData = `
Weather in ${user_location}: ${weather.temperature}°C, ${weather.description}, Humidity: ${weather.humidity}%.
Crop Info – ${crop} in ${state}: Market Price: ${cropPrice.price}.
`;

  const prompt = `
You are an agricultural expert for India. Provide concise advice in ${user_language} for the following query:

User Query: ${user_query}
Knowledge Base:
${retrievedData}
`;

  const geminiResponse = await callGemini(prompt);

  res.json({ answer: geminiResponse });
}

module.exports = { handleChatRequest };
