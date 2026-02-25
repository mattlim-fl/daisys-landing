import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-display font-black text-[#e8e4a8]">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-400 font-display italic">
            Have a question? We're here to help.
          </DialogDescription>
        </DialogHeader>

        <ContactForm venue="daisys" />
      </DialogContent>
    </Dialog>
  );
}
