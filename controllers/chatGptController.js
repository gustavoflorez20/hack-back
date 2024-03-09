const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const chatGptController = {
  getResponse: async (req, res) => {
    try {
      const message = req.body.question;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0,
        max_tokens: 1000,
      });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

module.exports = chatGptController;
