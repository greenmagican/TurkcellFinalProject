# ChatGPT Integration Guide

## Overview
This project now includes integration with OpenAI's ChatGPT API to provide more intelligent responses in the chatbot feature. The integration allows users to ask questions about a wide range of topics including cryptocurrency, technology, science, history, and more, and receive AI-powered responses.

## Setup Instructions

### 1. Get an OpenAI API Key
1. Go to [OpenAI's platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API keys section
4. Create a new API key
5. Copy the API key (make sure to save it somewhere safe as OpenAI only shows it once)

### 2. Configure the API Key in the Project
1. Open the `.env.local` file in the root of the project
2. Replace `your_openai_api_key_here` with your actual OpenAI API key:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_actual_api_key_here
   ```
3. Save the file

### 3. Restart the Development Server
After updating the API key, restart the development server for the changes to take effect:
```bash
npm run dev
```

## Usage
1. Click on the chatbot icon in the navigation bar
2. Type your question about any topic in the input field
3. The system will send your question to ChatGPT and display the response

## Fallback Mechanism
If the OpenAI API call fails for any reason, the chatbot will automatically fall back to using predefined responses based on keywords in the user's question. The system handles these specific error cases:

1. **API Key Not Configured**: If the OpenAI API key is missing or not properly configured in the `.env.local` file, the system will display a message indicating this and fall back to local responses.

2. **Quota Exceeded**: If you've exceeded your OpenAI API quota limit, the system will display a message indicating this and fall back to local responses. To resolve this issue, you can:
   - Check your OpenAI account billing details at [platform.openai.com](https://platform.openai.com/account/billing/overview)
   - Upgrade your subscription plan if needed
   - Wait until your quota resets (typically at the start of the next billing cycle)

## Customization
- To modify the system prompt sent to ChatGPT, edit the `openaiService.ts` file
- To adjust the response parameters (temperature, max tokens, etc.), modify the configuration in the same file

## Troubleshooting
- If you see "API key is not configured" messages, double-check that your API key is correctly set in the `.env.local` file
- If responses are slow, this is normal as the system is making an API call to OpenAI's servers
- If you exceed your API quota, you'll need to upgrade your OpenAI plan or wait until the quota resets