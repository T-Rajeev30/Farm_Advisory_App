// modularity/knowledge.js
// This file acts as a simple database for few-shot prompts and localized information.
// Developer 4 can expand this data with more specific, region-based knowledge.

const staticKnowledge = {
  // General examples to guide the LLM's behavior
  general: `You are an agricultural expert for India. Provide advice only for the specified state and crop. Be concise, empathetic, and always respond in the user's requested language.
`,
  // Location-specific data
  locations: {
    Delhi: {
      wheat:
        "For wheat in Delhi, sow in late October to early November. Use Pusa T-1, HD 2967, or Pusa 407 as high-yield varieties.",
      pests:
        "Aphids are a common pest. Use a neem-based insecticide or spray a mixture of garlic, chili, and soap water.",
    },
    Punjab: {
      wheat:
        "For wheat in Punjab, you can use a balanced fertilizer like DAP at the time of sowing. It helps in strong root development and growth.",
      paddy:
        "To control weeds in paddy fields, use a pre-emergence herbicide like Pendimethalin within 2-3 days of sowing.",
      pests:
        "For aphids and jassids on cotton, spray neem oil extract or a solution of baking soda and soap.",
    },
    Maharashtra: {
      sugarcane:
        "For sugarcane, use organic fertilizers like farmyard manure before planting. Ensure a spacing of 1.2 meters between rows.",
      pests:
        "For mealybugs on citrus crops, spray a solution of soap water or release Cryptolaemus montrouzieri, a natural predator.",
    },
    "Tamil Nadu": {
      rice: "For rice, use the SRI (System of Rice Intensification) method to increase yield. This involves transplanting single seedlings at a wider spacing.",
      pests:
        "For stem borers on rice, use light traps or release Trichogramma chilonis wasps.",
    },
  },
};

export default staticKnowledge;
