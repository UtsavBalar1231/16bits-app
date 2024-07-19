import { Text, Toast } from "nes-ui-react";


function Main() {
  return (
    <main>
      <div className="main-container">
        <Toast>
          <Text>
            Welcome to 16bits keyboards, we sell the most affordable and high
            quality customizable mechanical keyboards.
          </Text>
        </Toast>
        <Toast id="foo" style={{ float: "right" }} bubblePostion="right">
          <Text size="small" color="disabled">
            16bits keyboard has complete QMK and ZMK firmware support!
          </Text>
        </Toast>

        <div className="slider-container">{}</div>
      </div>
    </main>
  );
}

export default Main;
