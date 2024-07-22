import { Button } from "nes-ui-react";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12">
      <h1 className="text-9xl font-black text-gray-400">404</h1>
      <h2 className="text-6xl font-bold text-gray-700 mb-6">Page not found</h2>
      <p className="text-2xl font-medium text-gray-500 mb-8">
        We couldn't find the page you're looking for.
      </p>
      <Button color="warning" onClick={() => (window.location.href = "/")}>
        Go back home
      </Button>
    </div>
  );
}

export default Error404;
