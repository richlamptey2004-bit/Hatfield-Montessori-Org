import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://oobksegrumdohoocjpha.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYmtzZWdydW1kb2hvb2NqcGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0MjM2NjEsImV4cCI6MjEwOTk5OTY2MX0.AYWVxPt1N7pk4Y8oOP2Cw-7MFb978dnxNfeqSSrnvsM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
