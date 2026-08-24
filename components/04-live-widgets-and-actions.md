# 🎧 04. Live Widgets & Automated Actions

Interactive widgets including animated snake contribution games, daily dev quotes, Spotify music cards, and WakaTime stats.

---

## 1. Snake Game Eating Your Contribution Graph 🐍

Add this markdown snippet to your `README.md` (and enable the GitHub Action workflow in `.github/workflows/snake-game.yml`):

```html
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-contribution-grid-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-contribution-grid-snake.svg">
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-contribution-grid-snake.svg">
  </picture>
</div>
```

---

## 2. Dynamic Daily Developer Quote

```html
<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" alt="Daily Dev Quote" />
</div>
```

---

## 3. Spotify Playing Now Aesthetic Widget

```html
<div align="center">
  <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=YOUR_SPOTIFY_UID&cover_image=true&theme=novatorem&show_offline=true&background_color=0d1117&interchange=false">
    <img src="https://spotify-github-profile.kittinanx.com/api/run?uid=YOUR_SPOTIFY_UID&cover_image=true&theme=novatorem&show_offline=true&background_color=0d1117&interchange=false" alt="Spotify Currently Playing" />
  </a>
</div>
```

---

## 4. WakaTime Coding Activity Card

```html
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=YOUR_WAKATIME_USERNAME&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=38bdf8&text_color=94a3b8" alt="WakaTime Stats" />
</div>
```

---

## 5. Profile Views Counter

```html
<div align="center">
  <img src="https://komarev.com/ghpvc/?username=YOUR_USERNAME&label=PROFILE+VIEWS&color=0e7490&style=for-the-badge" alt="Profile Views" />
</div>
```
