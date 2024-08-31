import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import logo from "/src/assets/logo1.jpg";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={80}>
      <header className={classes.header}>
        <Group justify="space-around" h="100%">
          <Group>
            <img className={classes.image11} src={logo} alt="Logo" />
            <h3>
              <a href="/" className={classes.header1}>
                ZERODAY ALLIANCE
              </a>
            </h3>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Events
            </a>
            <a href="#" className={classes.link}>
              Team
            </a>
            <a href="#" className={classes.link}>
              FAQS
            </a>
            <a href="#" className={classes.link}>
              Contact
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">CLI</Button>
          </Group>

          <Burger
            className={classes.change}
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        className={classes.draw}
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Zeroday Alliance"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Events
          </a>
          <a href="#" className={classes.link}>
            Team
          </a>
          <a href="#" className={classes.link}>
            FAQS
          </a>
          <a href="#" className={classes.link}>
            Contact
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">CLI</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
