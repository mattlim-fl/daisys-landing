import { Check } from "lucide-react";

const privileges = [
  { text: "Priority Entry +1", description: "Skip the line with a guest" },
  { text: "No Cover Charge For You +1", description: "Free entry for you and a friend" },
  { text: "$60 Welcome Drinks On Your First Visit", description: "Start the night right" },
];

export function MemberPrivileges() {
  return (
    <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-lg font-semibold text-center mb-6 text-daisy-gold">
        Member Benefits
      </h2>
      <div className="space-y-4">
        {privileges.map((privilege, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-daisy-gold flex items-center justify-center">
              <Check className="w-4 h-4 text-daisy-black" />
            </div>
            <div>
              <p className="font-medium">{privilege.text}</p>
              <p className="text-sm text-muted-foreground">{privilege.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
