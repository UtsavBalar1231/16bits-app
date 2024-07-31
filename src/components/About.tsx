import { Container, Heading, Text, Toast } from "nes-ui-react";
import Section from "./Section";

function About() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="translate-y-[5.25rem]"
      customPaddings=""
      id="about"
    >
      <div className="container relative p-[1rem] gap-[1rem]">
        <Heading size="large" centered>
          &lt;About Us&gt;
        </Heading>

        <Toast>
          <Text>
            Welcome to <span style={{ color: "#83a598" }}>16bits keyboards</span>, we sell the most <strong>affordable</strong> and <strong>high quality</strong> customizable mechanical keyboards.
          </Text>
        </Toast>
        <Toast id="foo" style={{ float: "right" }} bubblePostion="right">
          <Text size="small" centered>
            16bits keyboard has complete <strong>QMK</strong> and <strong>ZMK</strong> firmware support!
          </Text>
        </Toast>

        <Container title="&lt;A note for you, our customers&gt;">
          <Text>
            Welcome to <span style={{ color: "#83a598" }}>16bits</span>! We at 16bits are a bunch of misfits who are passionate about <span style={{ textDecoration: "underline" }}>engineering and technology</span>.
          </Text>

          <Text>
            Our passion is diving deep into the world of <strong>low-level software</strong>, and that means writing a ton of code every single day. But here's the thing: a coder's best friend is their <strong>keyboard</strong>. It's with you through every late-night coding session, every breakthrough, and every bug fix. Unfortunately, most keyboards out there are either way too pricey or just don't hit the mark for us.
          </Text>

          <Text>
            So, we took matters into our own hands. We decided to create a keyboard that's perfect for our needs and tastes. And that's how our journey began. We're excited to share our passion project with you and hope you'll love it as much as we do.
          </Text>

          <Text>
            <span style={{ color: "#ea6962" }}>16bits</span> began with a collective observation that good mechanical keyboards are expensive and cheap mechanical keyboards are not good. As techies, we thought to ourselves that this is a problem that can be solved by making keyboards from the ground-up keeping in mind what the community desires. The result of this is the <strong>16bits KR1</strong>, a <span style={{ color: "#7daea3" }}>65%</span> QMK/Vial Mechanical Keyboard.
          </Text>

          <Text>
            <span style={{ color: "#ea6962" }}>16bits</span> is a coalition of four passionate nerds trying to bring open-source, hackable, and user-friendly hardware to the masses. We believe that consumer electronics should not be locked down behind proprietary walls and every user must have access to use/modify their hardware and by extension, software as they see fit.
          </Text>

          <Text>Know us better:</Text>
          <Text>
            Shreeyash - <a href="https://x.com/b0jle" style={{ color: "#83a598" }}>x.com/b0jle</a><br />
            Utsav - <span style={{ color: "#7daea3" }}>your preferred media</span><br />
            Devang - <span style={{ color: "#7daea3" }}>your preferred media</span><br />
            Jeet - <span style={{ color: "#7daea3" }}>your preferred media</span><br />
          </Text>
        </Container>
      </div>
    </Section>
  );
}

export default About;
