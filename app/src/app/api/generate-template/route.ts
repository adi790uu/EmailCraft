import { ChatOpenAI } from "@langchain/openai";
import { NextRequest, NextResponse } from "next/server";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

const generateTemplateFromLLM = async (
  recipientName: string,
  emailPurpose: string,
  keyPoints: string
) => {
  const prompt = `You are a professional email writer specializing in crafting clear and polite business communication. Based on the following inputs, 
      generate a professional email. Ensure the tone is formal yet approachable, the content is concise, and the message aligns with the purpose.

      Inputs:
        - Recipient Name: ${recipientName}
        - Email Purpose: ${emailPurpose ? emailPurpose : "No Purpose provided"}
        - Key Points: ${keyPoints ? keyPoints : "No key points provided"}
        
      Output:
        - Begin with an appropriate greeting.
        - Clearly address the purpose of the email in the first line.
        - Expand on the provided key points in a logical, cohesive manner.
        - Conclude with a professional closing and call to action if applicable.
        - Use a polite and professional tone throughout.
    `;

  const response = await llm.invoke([{ role: "user", content: prompt }]);
  return response.content;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const recipientName = body?.recipientName;
    const emailPurpose = body?.emailPurpose;
    const keyPoints = body?.keyPoints;

    const emailTemplate = await generateTemplateFromLLM(
      recipientName,
      emailPurpose,
      keyPoints
    );

    return NextResponse.json({
      success: true,
      message: "Template generated successfully",
      data: emailTemplate,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Some error occurred!",
    });
  }
}
