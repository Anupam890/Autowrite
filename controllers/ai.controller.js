import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const autowriteModel = new ChatGoogleGenerativeAI({
  model: 'gemini-pro', 
  temperature: 0.5,
  maxTokens: 2000,
  apiKey:"AIzaSyCiEz3W6Pp_gh3PBLf_l1ijaQvpyDWzYpI"
});

const instaCaption = async (req, res) => {
  const { prompt, language, category } = req.body;
  if (!prompt || !language || !category) {
    return res.status(400).json({ error: 'Missing required fields: prompt, language, or category.' });
  }
  try {
    const response = await autowriteModel.invoke([
      {
        role: 'user',
        content: `Generate 10 Instagram captions in ${language} for a ${category} category post. Prompt: ${prompt}`,
      },
    ]);

    res.status(200).json({ captions: response.content }); 
    console.log('Response:', response.content); 
  } catch (err) {
    console.error('Generation Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const instagram = {
  instaCaption,
};
