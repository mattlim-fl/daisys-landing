import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  itemDescription?: string;
  dateLost?: string;
  message?: string;
  queryDescription?: string;
  incidentDate?: string;
  requestedAction?: string;
  needsFollowUp?: boolean;
}

interface BusinessHoursViewProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  needsFollowUp: boolean;
  onFollowUpChange: (checked: boolean) => void;
}

export function BusinessHoursView({
  register,
  needsFollowUp,
  onFollowUpChange,
}: BusinessHoursViewProps) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-[#2a2a2a] border border-neutral-700 rounded-xl">
        <h3 className="font-display text-xl text-[#e8e4a8] mb-4">
          Our Opening Hours
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-neutral-700">
            <span className="text-neutral-200">Friday</span>
            <span className="text-[#f97316]">9pm - 3am</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-neutral-700">
            <span className="text-neutral-200">Saturday</span>
            <span className="text-[#f97316]">9pm - 3am</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-neutral-500">Other days</span>
            <span className="text-neutral-500">Members events only</span>
          </div>
        </div>
        <p className="text-sm text-neutral-500 mt-4">
          We host private members events on select dates. Contact us for more
          information.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="needsFollowUp"
          checked={needsFollowUp}
          onCheckedChange={onFollowUpChange}
        />
        <label
          htmlFor="needsFollowUp"
          className="text-sm text-neutral-200 cursor-pointer"
        >
          I still need to contact someone about my question
        </label>
      </div>

      {needsFollowUp && (
        <div>
          <label className="block text-sm font-medium text-neutral-200 mb-1">
            How can we help?
          </label>
          <Textarea
            {...register("message")}
            placeholder="Let us know what you need and we'll get back to you"
            className="bg-[#2a2a2a] border-neutral-700 text-white placeholder:text-neutral-500"
            rows={3}
          />
        </div>
      )}
    </div>
  );
}
