import { createClient } from '@supabase/supabase-js';

// Credentials provided by user
const SUPABASE_URL = 'https://bmtakltiolhxzcfigezu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdGFrbHRpb2xoeHpjZmlnZXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2Njc0MjksImV4cCI6MjA4MDI0MzQyOX0.36i3gjYj_GABawB06aNAepSKHr8acNjeO2Fkc3VayH0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

