import { Container, Heading, Text, Toast } from "nes-ui-react";
import Section from "./Section";

function About() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="translate-y-[5.25rem]"
      customPaddings=""
      id="about">

      <Heading size="large" centered>
        &lt;About Us&gt;
      </Heading>

      <Toast>
        <Text>
          Welcome to 16bits keyboards, we sell the most affordable and high
          quality customizable mechanical keyboards.
        </Text>
      </Toast>
      <Toast id="foo" style={{ float: "right" }} bubblePostion="right">
        <Text size="small" centered>
          16bits keyboard has complete QMK and ZMK firmware support!
        </Text>
      </Toast>

      <Container title="&lt;A note for you, our customers&gt;">
        <Text>
          Welcome to 16bits! We at 16bits are a bunch of misfits who are
          passionate about engineering and technology.
        </Text>

        <Text>
          Our passion is diving deep into the world of low-level software, and
          that means writing a ton of code every single day. But here's the
          thing: a coder's best friend is their keyboard. It's with you
          through every late-night coding session, every breakthrough, and
          every bug fix. Unfortunately, most keyboards out there are either
          way too pricey or just don't hit the mark for us.
        </Text>

        <Text>
          So, we took matters into our own hands. We decided to create a
          keyboard that's perfect for our needs and tastes. And that's how our
          journey began. We're excited to share our passion project with you
          and hope you'll love it as much as we do.
        </Text>
      </Container>
    </Section>
  );
}

export default About;
