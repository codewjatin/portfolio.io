import { A } from "solid-start";

export default function NotFound() {
  return (
    <div class="error-wrapper">
      <div class="error-content">
        <h1 class="error-code">404</h1>
        <p class="error-summary text-large">
          The page you’re looking for doesn’t exist. Perhaps it never really
          did? Your best option from here is to head to the homepage, which I
          (almost certainly) promise won’t 404.
        </p>
        <A class="btn" href="/">
          Return home
        </A>
      </div>
    </div>
  );
}
