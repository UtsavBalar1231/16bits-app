import { Button } from "nes-ui-react";

function Error404() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen p-16"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[4rem] leading-[4rem] md:text-[7rem] md:leading-[7rem] lg:text-[8rem] lg:leading-[8rem] xl:text-[10rem] xl:leading-[10rem] bg-clip-text text-transparent bg-code-09 dark:bg-code-18 ">
          404
        </h1>
      </div>
      <h2 className="font-semibold text-2xl leading-8 md:text-3xl md:leading-9 lg:text-3xl lg:leading-9 xl:text-4xl xl:leading-10">
        Page not found
      </h2>
      <p className="text-sm leading-8 md:text-md md:leading-9 lg:text-md lg:leading-9 xl:text-xl xl:leading-10 text-code-11 p-4">
        We couldn't find the page you're looking for.
      </p>
      <Button
        color="warning"
        size="large"
        onClick={() => (window.location.href = "/")}
      >
        Go back home
      </Button>
    </div>
  );
}

export default Error404;
