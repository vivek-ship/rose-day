# Rose Day Surprise

A single-page, interactive Rose Day experience. It features a soft windy grass background, a guiding smiley character, a gift box interaction, and a photo reveal with falling petals.

## Structure

```
rose-day/
├── index.html
├── assets/
│   ├── images/
│   │   ├── background/grass-loop.webp
│   │   ├── photos/img1.jpg
│   │   ├── photos/img2.jpg
│   │   ├── photos/img3.jpg
│   │   └── ui/
│   │       ├── gift-box-closed.png
│   │       └── gift-box-open.png
│   └── audio/bg-music.mp3
├── css/
├── js/
└── README.md
```

## Customize the Surprise

1. Replace the placeholder files in `assets/images` with your real photos and graphics.
2. Drop a soft ambient track into `assets/audio/bg-music.mp3`.
3. Update the text in `index.html` to personalize the message.

## Run Locally

Open `index.html` directly in a browser or serve the folder with a simple server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
