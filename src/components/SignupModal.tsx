import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { SignupForm } from "@/components/SignupForm";
import { Member } from "@/services/memberService";

const privileges = [
  { id: "priority-entry", text: "Priority Entry +1 Every Week" },
  { id: "no-cover", text: "No Cover Charge For You +1 Every Week" },
  { id: "welcome-drinks", text: "$60 Welcome Drinks On Your First Visit" },
];

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (member: Member) => void;
}

export function SignupModal({ isOpen, onClose, onSuccess }: SignupModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-display font-black text-[#e8e4a8]">
            Become a Member
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-400 font-display italic">
            12-month membership &middot; 24+ only
          </DialogDescription>
        </DialogHeader>

        {/* Benefits */}
        <div className="space-y-2 py-2">
          {privileges.map((privilege) => (
            <div key={privilege.id} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-neutral-200">{privilege.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700" />

        {/* Form */}
        <SignupForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
