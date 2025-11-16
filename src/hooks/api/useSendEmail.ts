import { useMutation } from "@tanstack/react-query";
import { sendEmail, type EmailRequest, type EmailResponse } from "@/lib/api.ts";

// React Query hook for sending emails via contact form
export const useSendEmail = () =>
  useMutation<EmailResponse, Error, EmailRequest>({
    mutationFn: sendEmail,
    retry: 1, // Retry once on failure
  });
