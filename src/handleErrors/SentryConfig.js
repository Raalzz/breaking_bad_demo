import * as Sentry from "@sentry/browser";

//Alltags : "api-call", "getpublicdata-api-call", "getprivatedata-api-call"

//Sentry function to get logs of event handlers
export const sentryDefaultLog = error => {
  Sentry.configureScope(scope =>
    scope.setLevel("Error").setTag("Custom-Tag", "api-call")
  );
  return Sentry.captureException(error);
};

//Sentry function to get logs of Public API calls
export const sentryPublicAPILog = error => {
  Sentry.configureScope(scope =>
    scope.setLevel("Error").setTag("Custom-Tag", "getpublicdata-api-call")
  );
  return Sentry.captureException(error);
};

//Sentry function to get logs of Private API calls
export const sentryPrivateAPILog = (error, user) => {
  const user_data = {
    id: user.sub,
    username: user.phone_number
  };
  Sentry.configureScope(scope =>
    scope
      .setLevel("Error")
      .setUser(user_data)
      .setTag("Custom-Tag", "getprivatedata-api-call")
  );
  return Sentry.captureException(error);
};
