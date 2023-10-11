import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface LmpWelcomeEmailProps {
  fullName: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';

export const LmpWelcomeEmail = ({ fullName }: LmpWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Gateway to Digital Success!</Preview>
    <Body style={main}>
      <Container style={container}>
        <img
          src={`https://lmp.com.ng/assets/images/lmplogo.png`}
          width="100"
          height="50"
          alt="lmp"
          style={logo}
        />
        <Text style={paragraph}>Hi {fullName},</Text>
        <Text style={paragraph}>
           This is Tunde from Learning Manifest Pod.
          <br />
          <p>
            We are excited to offer you our free e-book that explores how
            understanding your self-attributes can guide you toward a successful
            and satisfying career in the tech industry.
          </p>
          <p>
            Our e-book, "Using Your Self-Attribute to Choose Your Tech Career
            Path," delves into identifying your unique traits, including
            personality and intelligence types, helping you find the perfect
            niche within the vast world of technology.
          </p>
          In this e-book, you will discover:
          <ul>
            <li>Various personality and intelligence types</li>
            <li>Job roles that best fit each type</li>
            <li>Reasons for choosing a specific type</li>
            <li>What it's like working in such roles</li>
          </ul>
            <p>

            Additionally, upon discovering the tech path you wish to explore,
            you can receive free training from us. Visit www.lmp.com.ng to
            access these opportunities:
          <ul>
            <li>Join our free Product Management classes</li>
            <li>
              Participate in the Design to Web Development Challenge, where we
              train you to transition your design background to web development
              and provide a chance to win a 50,000 Naira prize
            </li>
            <li>
              Registering on Learning Matchmaker allows you to choose other
              tech courses, and we will work on finding free training courses
              with real-life trainers.
            </li>
          </ul>
            </p>
          We hope you enjoy it! <br />
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href={`https://mail.google.com/mail/u/1?ui=2&ik=cdfc85e1f1&attid=0.0.1&permmsgid=msg-f:1779398136034606496&th=18b1b12d5455bda0&view=att&disp=inline`}
          >
            Download PDF
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The LMP team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Suite A, Basement Floor, Favos Building, Favos Junction, Bodija,
          Ibadan
        </Text>
      </Container>
    </Body>
  </Html>
);

export default LmpWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
