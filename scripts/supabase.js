const { createClient } = window.supabase;

const SUPABASE_URL = 'https://yokxhbqdsqzlpgxubpms.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlva3hoYnFkc3F6bHBneHVicG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MzE1NzgsImV4cCI6MjA2NDMwNzU3OH0.-UQLip7vWYlFrH62J3Hcn-ovj3hEQ5Y0x1qe1dQLpTA'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);