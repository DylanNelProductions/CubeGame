import { supabase } from './supabase.js';

export const LeaderboardManager = {
  // Fetch top 50
  async getLeaderboard() {
    try {
      const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('level', { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error fetching leaderboard:", error);
        return [];
      }
      return data;
    } catch (e) {
      console.error("Supabase exception:", e);
      return [];
    }
  },

  // Update or Add player score
  async updateScore(gamertag, level) {
    if (!gamertag) return;

    try {
      // Check if user exists
      const { data: existingUser, error: fetchError } = await supabase
        .from('leaderboard')
        .select('*')
        .eq('gamertag', gamertag)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = not found
        console.error("Error checking user:", fetchError);
        return;
      }

      if (existingUser) {
        // Update only if level is higher
        if (level > existingUser.level) {
          const { error: updateError } = await supabase
            .from('leaderboard')
            .update({ level: level, updated_at: new Date() })
            .eq('id', existingUser.id);
          
          if (updateError) console.error("Error updating score:", updateError);
        }
      } else {
        // Insert new
        const { error: insertError } = await supabase
          .from('leaderboard')
          .insert([{ gamertag, level }]);
        
        if (insertError) console.error("Error inserting score:", insertError);
      }
    } catch (e) {
      console.error("Supabase update exception:", e);
    }
  },

  async isGamertagTaken(gamertag) {
    try {
      const { data, error } = await supabase
        .from('leaderboard')
        .select('gamertag')
        .ilike('gamertag', gamertag) // Case-insensitive check
        .maybeSingle();

      if (error) {
        console.error("Error checking gamertag:", error);
        return false;
      }
      return !!data;
    } catch (e) {
      console.error("Gamertag check exception:", e);
      return false;
    }
  },

  async resetLeaderboard() {
    // In a real app, you typically don't allow a client to wipe the whole DB table
    // For this demo, we'll assume we only want to clear the local view or do nothing.
    // Use the SQL tool if you really want to truncate the table.
    console.warn("Remote leaderboard reset requires admin privileges.");
  }
};
