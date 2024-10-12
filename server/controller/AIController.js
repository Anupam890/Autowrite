const { GoogleGenerativeAI } = require("@google/generative-ai");

const generate_content = async (req, res, next) => {
  const { prompt } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    return res.status(200).json({ generatedText: result.response.text() });
  } catch (error) {
    console.error("Error generating content:", error);
    return res
      .status(500)
      .json({
        message: "An error occurred while generating content.",
        error: error.message,
      });
  }
};

module.exports = { generate_content };
