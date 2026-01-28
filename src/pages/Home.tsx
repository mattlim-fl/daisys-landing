import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignupModal } from "@/components/SignupModal";
import { SuccessScreen } from "@/components/SuccessScreen";
import { Member } from "@/services/memberService";

export default function Home() {
  const [member, setMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (member) {
    return (
      <div className="h-screen bg-background overflow-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pointer-events-none" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <SuccessScreen member={member} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Daisy's Social Club
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Perth's exclusive members club
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="text-lg px-10 py-6 h-auto"
          >
            Join as a Member
          </Button>
        </div>
      </div>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(newMember) => {
          setIsModalOpen(false);
          setMember(newMember);
        }}
      />
    </div>
  );
}
