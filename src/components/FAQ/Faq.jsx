import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./Faq.module.css";

const faqs = [
  {
    question: "What is the purpose of the Cybersecurity Community?",
    answer:
      "The community aims to bring together students interested in cybersecurity to learn, share knowledge, and work on projects focused on protecting information systems and networks.",
  },
  {
    question: "Who can join the community?",
    answer:
      "Any student from our college, regardless of major or experience level, can join. We welcome both beginners and advanced members.",
  },
  {
    question: "How do I join the community?",
    answer:
      "You can join by attending our events, signing up on our official website, or contacting one of the community leaders.",
  },
  {
    question: "What activities does the community organize?",
    answer:
      "We organize workshops, hackathons, guest lectures, and Capture The Flag (CTF) competitions.",
  },
  {
    question: "Do I need prior experience in cybersecurity to participate?",
    answer:
      "No prior experience is needed! Our events cater to all skill levels, so beginners are welcome.",
  },
];

const Faq = () => {
  return (
    <div className={classes.wrapper} id="faq">
      <Container size="sm">
        <Title ta="center" className={classes.title} order={1}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: {
              border: 0,
              backgroundColor: "white", // Add white background here
              borderRadius: rem(8),
              padding: `${rem(12)} ${rem(16)}`, // Add padding for a better look
            },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              className={classes.item}
              value={`faq-${index}`}
              key={index}
            >
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
