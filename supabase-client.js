import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://jyykdolqrmxyjgqdlnhi.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eWtkb2xxcm14eWpncWRsbmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODU2MzIsImV4cCI6MjA4MjU2MTYzMn0.S4S_PCHMpKpBCzrbMJQLYXfzomRRkNPFcV43dL0PpTw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Convenience helper
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}

