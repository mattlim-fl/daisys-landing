import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MemberPrivileges } from "@/components/MemberPrivileges";
import { SignupForm } from "@/components/SignupForm";
import { SuccessScreen } from "@/components/SuccessScreen";
import { Member } from "@/services/memberService";

export default function Home() {
  const [member, setMember] = useState<Member | null>(null);

  const handleSuccess = (newMember: Member) => {
    setMember(newMember);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {member ? (
            <SuccessScreen member={member} />
          ) : (
            <>
              <HeroSection />
              <MemberPrivileges />
              <SignupForm onSuccess={handleSuccess} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
