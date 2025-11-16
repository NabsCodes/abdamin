import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import { RefreshCw } from "lucide-react";
import Toast from "../ui/Toast";
import config from "../../utils/config";

interface ContactFormProps {
  className?: string;
}

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string().email("Please enter a valid email address").trim(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [toast, setToast] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // Validate on blur for better UX
  });

  const onSubmit = async (data: ContactFormData) => {
    setToast(null);

    try {
      const response = await fetch(`${config.apiUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setToast({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        reset(); // Reset form after successful submission
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Server responded with an error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
          isVisible={!!toast}
          duration={5000}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "mx-auto w-full space-y-4 rounded-2xl border border-solid border-neutral-10/50 bg-[#fafbfe] p-6 md:max-w-md",
          className,
        )}
        noValidate
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-bold text-neutral-base"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={clsx(
              "h-[52px] w-full rounded-3xl border border-solid bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none",
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-neutral-10",
            )}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-xs text-red-500"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-neutral-base"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="you@company.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={clsx(
              "h-[52px] w-full rounded-3xl border border-solid bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none",
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-neutral-10",
            )}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-xs text-red-500"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm font-bold text-neutral-base"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            placeholder="Subject"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={clsx(
              "h-[52px] w-full rounded-3xl border border-solid bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none",
              errors.subject
                ? "border-red-500 focus:border-red-500"
                : "border-neutral-10",
            )}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-xs text-red-500"
              role="alert"
            >
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-bold text-neutral-base"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Leave us a message..."
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={clsx(
              "h-[151px] w-full resize-none rounded-3xl border border-solid bg-white px-4 py-2 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none",
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-neutral-10",
            )}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-xs text-red-500"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
              <span>Submitting...</span>
            </div>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
