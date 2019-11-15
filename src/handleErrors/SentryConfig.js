import * as Sentry from "@sentry/browser";

//Alltags : "Default Log", "getpublicdata-api-call", "getprivatedata-api-call"

//Sentry function to get logs of event handlers
export const sentryDefaultLog = error => {
  Sentry.configureScope(scope =>
    scope.setLevel("Error").setTag("Custom-Tag", "Default Log")
  );
  return Sentry.captureException(error);
};

//Sentry function to get logs with user Info:

export const sentryUserILog = (error, user) => {
  const user_data = {
    id: user.id,
    username: user.name
  };
  Sentry.configureScope(scope =>
    scope
      .setLevel("Error")
      .setUser(user_data)
      .setTag("Custom-Tag", "user Info Log")
  );
  return Sentry.captureException(error);
};
