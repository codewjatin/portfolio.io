import { json } from "solid-start";

export function GET() {
  return json({
    status: 200,
    data: [
      {
        name: "Chat App - Web",
        logo: "https://chat-withme.vercel.app/icons/apple-touch-icon.png",
        imageUrl:
          "https://github.com/codewjatin/chat-app/raw/main/public/cover.png",
        projectUrl: "https://chat-withme.vercel.app",
        sourceUrl: "https://github.com/codewjatin/chat-app",
        description:
          "A sleek and minimalistic chat app built with HTML, CSS, and JavaScript, powered by Firebase for seamless communication and a user-friendly interface.",
      },
      {
        name: "Music Player - Deno",
        logo: "https://deno.land/logo.svg",
        imageUrl:
          "https://github.com/codewjatin/deno-music-player/raw/main/assets/cover.png",
        projectUrl: "https://music-player.deno.dev",
        sourceUrl: "https://github.com/codewjatin/deno-music-player",
        description:
          "A Deno-powered music player with server-side query search and easy frontend integration for seamless listening experience.",
      },
    ],
  });
}
