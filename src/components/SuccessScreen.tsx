import { Check } from "lucide-react";
import { Member } from "@/services/memberService";

interface SuccessScreenProps {
  member: Member;
}

export function SuccessScreen({ member }: SuccessScreenProps) {
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
        <p className="text-2xl text-daisy-gold">Welcome to the club</p>
      </div>

      {/* Member Name */}
      <div className="mb-8 py-6 px-10 bg-secondary/50 rounded-lg border border-border inline-block">
        <p className="text-sm text-muted-foreground mb-2">Member</p>
        <p className="text-3xl font-semibold">{member.name}</p>
      </div>

      {/* Instructions */}
      <p className="text-lg text-muted-foreground">
        Show your ID at the door to get access
      </p>
    </div>
  );
}
