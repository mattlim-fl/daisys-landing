import { supabase } from "@/lib/supabaseClient";

export interface MemberSignup {
  name: string;
  phone: string;
  date_of_birth: string;
}

export interface Member {
  id: string;
  venue: string;
  name: string;
  phone: string;
  date_of_birth: string;
  membership_start: string;
  membership_expiry: string;
  status: string;
  created_at: string;
}

export const memberService = {
  async signup(data: MemberSignup): Promise<Member> {
    const { data: member, error } = await supabase
      .from("members")
      .insert({
        venue: "daisy",
        name: data.name,
        phone: data.phone,
        date_of_birth: data.date_of_birth,
      })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        throw new Error("You already have a membership with this phone number.");
      }
      throw new Error(`Failed to create membership: ${error.message}`);
    }

    return member as Member;
  },
};
