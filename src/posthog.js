import { PostHog } from "posthog-node";

let posthogClient = null;

export default function PostHogClient() {
  if (!posthogClient) {
    posthogClient = new PostHog(
      phc_1Q1HMBaLmmJdiyWJ0gVYAoklVOgZanJyOydTgllhCrJ,
      {
        host: "<ph_instance_address>",
      }
    );
  }
  return posthogClient;
}
