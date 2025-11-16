import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch React errors
 * Provides user-friendly error UI and error reporting
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-secondary-base/10 p-4">
                <AlertCircle className="h-12 w-12 text-secondary-base" />
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Something went wrong
            </h1>

            <p className="mb-8 text-lg">
              We&apos;re sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-8 rounded-lg bg-neutral-50/10 p-4 text-left text-sm text-neutral-50">
                <summary className="cursor-pointer font-semibold">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-4 overflow-auto whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={this.handleReset}
                className="btn btn-primary"
                aria-label="Try again"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary-outline"
                aria-label="Refresh page"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
