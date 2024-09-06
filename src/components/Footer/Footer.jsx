import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import logo from "/src/assets/logo1.jpg";

const Footer = () => {
  return (
    <div id="contact" className={classes.footer}>
      <div className={classes.inner}>
        <img className={classes.image11} src={logo} alt="Logo" />

        <Group className={classes.links}>
          <Anchor href="#" c="dimmed" size="sm" lh={1}>
            Blog
          </Anchor>
          <Anchor href="#" c="dimmed" size="sm" lh={1}>
            Code of Conduct
          </Anchor>
          <Anchor
            href="https://drive.google.com/drive/folders/17pwTqJqdBc6Fugv_H53eCNE8SzXkoKcw"
            target="_blank"
            c="dimmed"
            size="sm"
            lh={1}
          >
            Gallery
          </Anchor>
        </Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/ZeroDay-Alliance-SNU"
          >
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://www.linkedin.com/company/zeroday-alliance-snu/"
          >
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://www.instagram.com/zerodayalliance"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
