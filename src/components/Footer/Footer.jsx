import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import classes from './Footer.module.css';
import logo from "/src/assets/logo1.jpg";
const links = [
  { link: '#', label: 'Code Of conduct' },
  { link: '#', label: 'Gallery' },
  { link: '#', label: 'Blog' },
  // { link: 'https://zeroday-alliance.pages.dev/', label: 'Website' }, // Added website link
  { link: '#', label: 'Careers' },
];

const Footer = () => {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <MantineLogo  size={28} /> */}
        <img className={classes.image11} src={logo} alt="Logo" />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/ZeroDay-Alliance-SNU" 
          >
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://www.linkedin.com/company/zeroday-alliance-snu/"
          >
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://www.instagram.com/zerodayalliance"
          >
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

export default Footer;
