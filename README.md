# nova-catch

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Skyzo07/nova-catch-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Skyzo07/nova-catch-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

**NOVA CATCH** — a tiny browser game built from one prompt. Pilot a little ship along
the bottom of the screen, catch falling stars for points, dodge meteors, grab golden
comets for bonus. Three lives, 60 seconds, speed ramps up, score and best score, title
screen, game-over screen, keyboard and mouse/touch controls, sound blips, particles.
One HTML file, plain Canvas 2D, no libraries, no network.

The game was posted on X as a video; `POST.json` names the post.

## Play it

Open `index.html` in any browser — no build step, no server needed:

```sh
# or: python3 -m http.server 8000  # then open http://localhost:8000/
open index.html
```

Controls: `←` `→` or `A` `D` to fly, mouse or touch to steer, `Space` to start,
`R` to play again after game over.

- ⭐ Star: +10 points
- ☄️ Golden comet: +50 points
- 🪨 Meteor: −1 life (you have 3)
- 60-second timer — when it hits zero, the run ends

## Deterministic modes (for captures)

- `index.html?demo=1` — autoplay: the ship flies itself with a seeded RNG, and
  the game restarts itself after game over, so gameplay footage can be captured
  hands-free.
- `index.html?shot=title|play|over` — frozen title screen, mid-gameplay frame, or
  game-over screen, for screenshots.

## How the entry runs

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`,
where the gate reads the post's address:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The one prompt

> "Build me a tiny browser game from one prompt: NOVA CATCH — a 60-second arcade
> catcher. Pilot a little ship along the bottom of the screen, catch falling stars
> for points, dodge meteors, grab golden comets for bonus. Three lives, speed ramps
> up, score and best score, title screen, game-over screen, keyboard and mouse/touch
> controls, sound blips, particles. One HTML file, plain Canvas 2D, no libraries, no
> network. Make it juicy and fun."

## License

MIT — see [LICENSE](LICENSE).
