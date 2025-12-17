// js/games.js
export const sampleUsers = [
  { id: 'u_alex', username: 'Alex', avatarUrl: '/assets/img/avatars/alex.png' },
  { id: 'u_rin', username: 'Rin', avatarUrl: '/assets/img/avatars/rin.png' },
];

export const sampleGames = [
  {
    id: 'g_jump',
    title: 'Jump Quest',
    authorId: 'u_alex',
    thumbnailUrl: '/assets/img/thumbs/jump.png',
    tags: ['platformer'],
    playCount: 1234,
    lastPlayedAt: Date.now() - 3600_000,
    code: `export default function start(api){ let x=0,y=0; api.drawRect(x,y,20,20,'#f44'); }`,
  },
  {
    id: 'g_blocks',
    title: 'Block Builder',
    authorId: 'u_rin',
    thumbnailUrl: '/assets/img/thumbs/blocks.png',
    tags: ['sandbox'],
    playCount: 532,
    lastPlayedAt: Date.now() - 7200_000,
    code: `export default function start(api){ api.text(10,10,"Hello BlockForge"); }`,
  },
];
