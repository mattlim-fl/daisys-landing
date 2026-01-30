import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { memberService, Member } from "@/services/memberService";
import { differenceInYears, parse } from "date-fns";
import { Loader2 } from "lucide-react";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
}).refine((data) => {
  const dob = parse(data.date_of_birth, "yyyy-MM-dd", new Date());
  const age = differenceInYears(new Date(), dob);
  return age >= 24;
}, {
  message: "You must be 24 or older to join Daisy's Social Club",
  path: ["date_of_birth"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSuccess: (member: Member) => void;
}

export function SignupForm({ onSuccess }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const member = await memberService.signup({
        name: data.name,
        phone: data.phone,
        date_of_birth: data.date_of_birth,
      });
      onSuccess(member);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-neutral-200">Full Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name")}
            className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-[#f97316] ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-neutral-200">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="04XX XXX XXX"
            {...register("phone")}
            className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-[#f97316] ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date_of_birth" className="text-neutral-200">Date of Birth</Label>
          <Input
            id="date_of_birth"
            type="date"
            {...register("date_of_birth")}
            className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-[#f97316] focus:ring-[#f97316] [color-scheme:dark] ${errors.date_of_birth ? "border-red-500" : ""}`}
          />
          {errors.date_of_birth && (
            <p className="text-sm text-red-400">{errors.date_of_birth.message}</p>
          )}
          <p className="text-xs text-neutral-500">
            Members must be 24 years or older
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-md bg-red-900/30 border border-red-800">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-display italic text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </span>
          ) : (
            "Join Daisy's Social Club"
          )}
        </button>

        <p className="text-xs text-center text-neutral-500">
          By joining, you agree to our terms and conditions.
        </p>
      </form>
    </div>
  );
}
