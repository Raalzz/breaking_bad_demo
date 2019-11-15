import React from "react";
import * as Sentry from "@sentry/browser";
import FullscreenFallBack from "../components/FullscreenFallBack"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      scope.setTag("Custom-Tag", "ErrorBoundary");
      scope.setLevel("warning");
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (<FullscreenFallBack />);
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
