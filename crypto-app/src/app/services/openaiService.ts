import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // This allows the API to be called from the browser
});

/**
 * Generates a response using OpenAI's ChatGPT model
 * @param prompt The user's message/question
 * @returns The AI-generated response
 */
export async function generateChatGptResponse(prompt: string): Promise<string> {
  try {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that can answer questions on a wide range of topics. While you specialize in cryptocurrency and blockchain technology, you can also provide information about other subjects like technology, science, history, and more. Keep responses concise and informative."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
  } catch (error: any) {
    console.error('Error generating ChatGPT response:', error);
    
    // Check for quota exceeded error
    if (error?.message?.includes('quota exceeded') || error?.status === 429) {
      return "QUOTA_EXCEEDED";
    }
    
    // Check for API key configuration error
    if (error?.message?.includes('API key is not configured')) {
      return "API_KEY_MISSING";
    }
    
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
}