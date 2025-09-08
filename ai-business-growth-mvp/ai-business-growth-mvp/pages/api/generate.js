import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { business, goal } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an AI assistant helping small businesses grow." },
        { role: "user", content: `My business type is: ${business}. My goal is: ${goal}. Generate 3-5 growth strategies and some marketing content.` }
      ]
    });

    const responseText = completion.choices[0].message.content;
    const [strategies, content] = responseText.split("Marketing Content:");
    
    res.status(200).json({
      strategies: strategies?.trim() || "No strategies found.",
      content: content?.trim() || "No content found."
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate response." });
  }
}