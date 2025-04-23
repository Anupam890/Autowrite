import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCiEz3W6Pp_gh3PBLf_l1ijaQvpyDWzYpI");

const instaCaption = async (req, res) => {
  const { prompt, language, category } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `Generate 3 short, engaging Instagram captions for the topic: "${prompt}". Language: ${language}. Category: ${category}. Include hashtags when appropriate.`
    );

    const response = await result.response;
    const generatedText = response.text();

    return res.status(200).json({
      message: "Instagram Captions Generated",
      data: generatedText,
    });
  } catch (err) {
    console.error("Error generating captions:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

let instagram = { instaCaption };
export default instagram;
