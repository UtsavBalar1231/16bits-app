import { Button } from "nes-ui-react";

function Error404() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen p-16"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   minHeight: "100vh",
      //   padding: "4rem",
      // }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[10rem] leading-[10rem] md:text-[10rem] md:leading-[10rem] lg:text-[10rem] lg:leading-[10rem] xl:text-[10rem] xl:leading-[10rem] bg-clip-text text-transparent">
          404
        </h1>
      </div>
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "gray",
          marginBottom: "2rem",
        }}
      >
        Page not found
      </h2>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "gray",
          marginBottom: "4rem",
        }}
      >
        We couldn't find the page you're looking for.
      </p>
      <Button
        color="error"
        size="large"
        onClick={() => (window.location.href = "/")}
      >
        Go back home
      </Button>
    </div>
  );
}

export default Error404;
