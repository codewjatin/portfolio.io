// @refresh reload
import { For, Suspense } from "solid-js";
import {
  useLocation,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  A,
} from "solid-start";
import "./root.css";

export default function Root() {
  const meta = {
    title: "Jatin Kumar - Software Developer",
    description:
      "Software Developer learning and building applications, softwares and interfaces.",
    image: "/assets/cover.png",
    url: "https://nextjs-headstart.vercel.app",
    type: "website",
  };
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width" />
        <Title>{meta.title}</Title>
        <Meta name="description" content={meta.description} />

        <Meta property="og:url" content={meta.url} />
        <Meta property="og:type" content={meta.type} />
        <Meta property="og:title" content={meta.title} />
        <Meta property="og:description" content={meta.description} />
        <Meta property="og:image" content={`${meta.url}${meta.image}`} />

        <Meta name="twitter:card" content="summary_large_image" />
        <Meta property="twitter:domain" content={meta.url} />
        <Meta property="twitter:url" content={meta.url} />
        <Meta name="twitter:title" content={meta.title} />
        <Meta name="twitter:description" content={meta.description} />
        <Meta name="twitter:image" content={`${meta.url}${meta.image}`} />

        <link
          href="/assets/img/icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
          sizes="any"
        />
        <link
          href="/assets/img/icons/favicon.ico"
          rel="icon"
          type="image/png"
          sizes="any"
        />
        <Meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav class="topbar">
              <A href="/" end class="logo" tabindex={-1} />
              <div class="main-menu">
                <For each={["Home", "About", "Projects"]}>
                  {(item) => {
                    const itemLower = item.toLowerCase();
                    return (
                      <A
                        inactiveClass=""
                        end
                        class={`nav-item nav-item-${itemLower}`}
                        href={`/${itemLower !== "home" ? itemLower : ""}`}>
                        {item}
                      </A>
                    );
                  }}
                </For>
              </div>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
