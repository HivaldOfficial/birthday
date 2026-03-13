/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Maulidaa",
  photo: "./img/3.jpg", // Place your photo in the img/ folder
  music: "./music/serana.mp3", // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6", // Main accent color (rose pink)
    accent: "#60a5fa", // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a", // Slate 900
      text: "#f1f5f9", // Slate 100
    },
    light: {
      background: "#fafaf9", // Stone 50
      text: "#1e293b", // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hiii",
      subtitle: "I really like your name btw! Hehe.",
    },
    {
      type: "countdown",
      from: 3, // Countdown from this number
      goText: "🎉", // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! :D",
    },
    {
      type: "chatbox",
      message: "Happy birthday to youu!! Di antara banyaknya hari yang datang dan pergi, hari ini tetap jadi penanda bahwa dunia pernah menghadirkan kamu ke dalam hidupku.",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "Dulu, aku pikir kamu adalah tempatku berpulang.",
        "Sejak ada kamu, banyak momen yang terasa lebih berarti.",
        "Tapi...",
        "Beberapa hal memang hanya ditakdirkan untuk jadi kenangan dan pelajaran.",
        "Bukan perjalanan yang abadi:')",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "Semoga langkahmu selalu dimudahkan dan kamu menemukan apa yang benar-benar kamu cari.",
      author: "for maul",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday, Maulidaa!❤️",
      wishText: "Untukmu yg berada difoto tersebut, Terima kasih untuk semua cerita yang pernah ada.<br><br>Tolong jaga dirimu baik-baik, karena ini adalah caraku untuk melepaskan dan melangkah pergi. Berbahagialah:)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Semoga kamu menemukan kebahagiaanmu, aku pamit ya.❤️‍🩹",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
