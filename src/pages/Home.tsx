import { useState } from "react";
import { SignupModal } from "@/components/SignupModal";
import { SuccessScreen } from "@/components/SuccessScreen";
import { Member } from "@/services/memberService";

export default function Home() {
  const [member, setMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (member) {
    return (
      <div className="h-screen bg-[#1a1a1a] overflow-hidden">
        {/* Background image */}
        <div
          className="fixed inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backdrop-no-text.png')" }}
        />
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <SuccessScreen member={member} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Background image without text */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backdrop-no-text.png')" }}
      />
      {/* Fade overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main heading */}
        <div className="text-center select-none">
          <h1
            className="font-display font-black text-[#e8e4a8] leading-none tracking-tight"
            style={{
              fontSize: "clamp(4rem, 20vw, 16rem)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            DAISY'S
          </h1>
          <h2
            className="font-display font-black text-[#e8e4a8] leading-none tracking-tight mt-1 sm:-mt-2 md:-mt-4"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 10rem)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            SOCIAL CLUB
          </h2>
          <p
            className="font-display italic text-white mt-4"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Curated for Leederville
          </p>
        </div>

        {/* Join button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-8 py-3 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-display italic text-lg transition-all duration-200 hover:scale-105"
          style={{
            boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
          }}
        >
          Join The Club
        </button>
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
