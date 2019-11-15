import * as Sentry from "@sentry/browser";
import { DSN } from "./SentryDSN";

export const SentryCredentials = {
  dsn: DSN,
  integrations: [
    new Sentry.Integrations.Breadcrumbs({
      beacon: true,
      console: false,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true,
      axios: true
    })
  ]
};
