import { Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo from "/src/assets/logo.svg";

const Footer = () => {
  return (
    <div id="contact" className={classes.footer}>
      <div className={classes.inner}>
        <Link to="/#home">
          <img className={classes.image11} src={logo} alt="Logo" />
        </Link>
        <Group className={classes.links} gap="lg">
          <Link to="/blog" size="sm" lh={1} className={classes.link}>
            Blog
          </Link>
          <Link to="/code-of-conduct" size="sm" lh={1} className={classes.link}>
            Code of Conduct
          </Link>
          <Link
            to="/gallery"
            target="_blank"
            c="dimmed"
            size="sm"
            lh={1}
            className={classes.link}
          >
            Gallery
          </Link>
        </Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://github.com/ZeroDay-Alliance-SNU"
            aria-label="GitHub Link"
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
            aria-label="LinkedIn Link"
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
            href="https://www.instagram.com/zerodayalliancesnu"
            aria-label="Instagram Link"
          >
            <IconBrandInstagram
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
            href="https://www.x.com/zerodaysnu"
            aria-label="X Link"
          >
            <IconBrandX
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
