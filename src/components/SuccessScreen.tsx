import { Check, Star } from "lucide-react";
import { Member } from "@/services/memberService";
import { format } from "date-fns";

interface SuccessScreenProps {
  member: Member;
}

export function SuccessScreen({ member }: SuccessScreenProps) {
  const expiryDate = format(new Date(member.membership_expiry), "d MMMM yyyy");

  return (
    <div className="text-center animate-fade-in">
      {/* Success Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto bg-daisy-gold rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-daisy-black" />
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Daisy's Social Club</h1>
        <p className="text-2xl text-daisy-gold">Welcome to the club.</p>
      </div>

      {/* Member Name */}
      <div className="mb-8 py-4 px-6 bg-secondary/50 rounded-lg border border-border inline-block">
        <p className="text-sm text-muted-foreground mb-1">Member</p>
        <p className="text-xl font-semibold">{member.name}</p>
      </div>

      {/* Benefits Card */}
      <div className="bg-secondary/50 rounded-lg border border-border p-6 mb-8">
        <p className="text-sm text-muted-foreground mb-4">
          Your 12-month Membership is now active. Show this message at the door for:
        </p>

        <div className="space-y-3 text-left max-w-xs mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-daisy-gold flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-daisy-black" />
            </div>
            <span>Priority Entry +1</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-daisy-gold flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-daisy-black" />
            </div>
            <span>No Cover Charge For You +1</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-daisy-gold flex items-center justify-center flex-shrink-0">
              <Star className="w-3 h-3 text-daisy-black fill-daisy-black" />
            </div>
            <span>$60 Welcome Drinks On Your First Visit</span>
          </div>
        </div>
      </div>

      {/* Validity Notice */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Valid until {expiryDate}
        </p>
        <p className="text-sm font-medium text-daisy-gold">
          Valid for 24+ only.
        </p>
      </div>

      {/* Screenshot Hint */}
      <p className="mt-8 text-xs text-muted-foreground">
        Take a screenshot of this page to show at the door
      </p>
    </div>
  );
}
