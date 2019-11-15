import React from "react";
import Router from "./Router";
import * as Sentry from "@sentry/browser";
import ErrorBoundary from "./handleErrors/ErrorBoundary";
import { SentryCredentials } from "./Config";

//Initialise Sentry
Sentry.init(SentryCredentials);

const App = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export default App;
