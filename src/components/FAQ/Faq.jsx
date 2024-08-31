import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './Faq.module.css';

const placeholder =
  'The community aims to bring together students interested in cybersecurity to learn, share knowledge, and work on projects focused on protecting information systems and networks.';
const placeholder2 =
  'Any student from our college, regardless of major or experience level, can join. We welcome both beginners and advanced members.';
const placeholder3 =
  'You can join by attending our events, signing up on our official website, or contacting one of the community leaders.';
const placeholder4 =
  'We organize workshops, hackathons, guest lectures, and Capture The Flag (CTF) competitions.';
const placeholder5 =
  'No prior experience is needed! Our events cater to all skill levels, so beginners are welcome';

const Faq = () => {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>What is the purpose of the Cybersecurity Community?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Who can join the community?</Accordion.Control>
            <Accordion.Panel>{placeholder2}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>How do I join the community?</Accordion.Control>
            <Accordion.Panel>{placeholder3}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>What activities does the community organize?</Accordion.Control>
            <Accordion.Panel>{placeholder4}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>Do I need prior experience in cybersecurity to participate?</Accordion.Control>
            <Accordion.Panel>{placeholder5}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq;
