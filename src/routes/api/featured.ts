import { json } from "solid-start";

export function GET() {
  return json({
    status: 200,
    data: [
      {
        name: "Chat App - Web",
        logo: "https://chat-withme.vercel.app/icons/apple-touch-icon.png",
        projectUrl: "https://chat-withme.vercel.app",
        description:
          "A sleek and minimalistic chat app built with HTML, CSS, and JavaScript, powered by Firebase for seamless communication and a user-friendly interface.",
      },
      {
        name: "Music Player - Deno",
        logo: "https://deno.land/logo.svg",
        projectUrl: "https://music-player.deno.dev",
        description:
          "A Deno-powered music player with server-side query search and easy frontend integration for seamless listening experience.",
      },
    ],
  });
}
