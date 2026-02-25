import { CheckCircle } from "lucide-react";

interface SuccessStateProps {
  referenceCode: string;
  category: string;
  onReset: () => void;
}

const categoryMessages: Record<string, { title: string; description: string }> =
  {
    lost_property: {
      title: "Lost Property Inquiry Submitted",
      description:
        "We'll check our lost property storage and get back to you within 2-3 business days.",
    },
    skantech: {
      title: "Inquiry Submitted",
      description:
        "Your inquiry has been logged and will be reviewed by our security team. We aim to respond within 5-7 business days.",
    },
    business_hours: {
      title: "Message Sent",
      description: "We've received your question and will get back to you soon.",
    },
    something_else: {
      title: "Message Sent",
      description:
        "Thanks for reaching out! We'll get back to you as soon as possible.",
    },
  };

export function SuccessState({
  referenceCode,
  category,
  onReset,
}: SuccessStateProps) {
  const message = categoryMessages[category] || categoryMessages.something_else;

  return (
    <div className="text-center py-6 space-y-6">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
      </div>

      <div>
        <h3 className="font-display text-2xl text-[#e8e4a8] mb-2">
          {message.title}
        </h3>
        <p className="text-neutral-400">{message.description}</p>
      </div>

      <div className="p-6 bg-[#2a2a2a] border border-neutral-700 rounded-xl">
        <p className="text-sm text-neutral-500 mb-2">Your reference code</p>
        <p className="font-mono text-2xl text-[#f97316] tracking-wider">
          {referenceCode}
        </p>
        <p className="text-xs text-neutral-500 mt-2">
          Keep this code for your records. You'll also receive it by email.
        </p>
      </div>

      <button
        onClick={onReset}
        className="px-6 py-2 rounded-full border border-neutral-600 text-neutral-200 hover:bg-neutral-800 transition-colors"
      >
        Submit Another Inquiry
      </button>
    </div>
  );
}
