import config from "@/utils/config";

export interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  data?: {
    id: string;
  };
  error?: string;
}

// Send email via contact form API
export const sendEmail = async (data: EmailRequest): Promise<EmailResponse> => {
  const response = await fetch(`${config.apiUrl}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Server responded with an error");
  }

  return response.json();
};
