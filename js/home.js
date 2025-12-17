// js/home.js
import { sampleGames, sampleUsers } from './games.js';

export function getFeed(user) {
  // Mock logic; replace with backend queries later
  const recent = [...sampleGames]
    .sort((a,b) => (b.lastPlayedAt||0) - (a.lastPlayedAt||0))
    .slice(0, 8);

  const tagsOfInterest = new Set(['platformer','puzzle','adventure']);
  const recommended = [...sampleGames]
    .filter(g => g.tags?.some(t => tagsOfInterest.has(t)))
    .slice(0, 8);

  const friends = sampleUsers.filter(u => u.id !== user.id).slice(0, 8);
  return { recent, recommended, friends };
}
