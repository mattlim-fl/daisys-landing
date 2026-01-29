import { useState } from "react";
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
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backdrop.png')" }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 px-4">
        <span
          onClick={() => setIsModalOpen(true)}
          className="text-white/90 hover:text-white cursor-pointer transition-colors duration-200 text-xl font-medium italic px-6 py-2 rounded-full bg-black/30 backdrop-blur-sm"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Join The Club
        </span>
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
