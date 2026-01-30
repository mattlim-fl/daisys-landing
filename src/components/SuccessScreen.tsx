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
        <div className="w-20 h-20 mx-auto bg-[#f97316] rounded-full flex items-center justify-center shadow-lg shadow-[#f97316]/30">
          <Check className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="font-display font-black text-[#e8e4a8] text-4xl mb-2">
          Daisy's Social Club
        </h1>
        <p className="font-display italic text-white text-2xl">
          Welcome to the club
        </p>
      </div>

      {/* Member Name */}
      <div className="mb-8 py-6 px-10 bg-neutral-800/80 rounded-xl border border-neutral-700 inline-block">
        <p className="text-sm text-neutral-400 mb-2 uppercase tracking-wider">Member</p>
        <p className="text-3xl font-display font-bold text-white">{member.name}</p>
      </div>

      {/* Instructions */}
      <p className="text-lg text-neutral-400 font-display italic">
        Show your ID at the door to get access
      </p>
    </div>
  );
}
