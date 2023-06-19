import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wnjrnryubhgcvfnjiklc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduanJucnl1YmhnY3Zmbmppa2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMzE4MDIsImV4cCI6MTk4NzgwNzgwMn0.ln3ucOcWN5LfVXXN-CRjknT2eFDiqlb1lpFIxTtKG6U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
