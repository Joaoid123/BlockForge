// js/studio.js
import { sampleGames } from './games.js';

const DRAFT_KEY = (uid) => `bf_draft_${uid}`;
const PUBLISHED_KEY = 'bf_published_games';

export function saveDraft(userId, code) {
  localStorage.setItem(DRAFT_KEY(userId), code);
}

export function loadDraft(userId) {
  return localStorage.getItem(DRAFT_KEY(userId));
}

export function publishGame({ title, code, authorId }) {
  const list = JSON.parse(localStorage.getItem(PUBLISHED_KEY) || '[]');
  const id = 'g_' + Math.random().toString(36).slice(2);
  const game = {
    id, title, authorId, code,
    thumbnailUrl: '/assets/img/thumbs/default.png',
    tags: ['user'],
    playCount: 0,
    lastPlayedAt: Date.now()
  };
  list.push(game);
  localStorage.setItem(PUBLISHED_KEY, JSON.stringify(list));
  return id;
}

export function getPublishedGames() {
  const list = JSON.parse(localStorage.getItem(PUBLISHED_KEY) || '[]');
  return [...sampleGames, ...list];
}
