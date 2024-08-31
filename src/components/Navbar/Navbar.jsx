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
import { IconTerminal2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Group className={classes.container} justify="space-around" h="100%">
          <Group>
            <img className={classes.logo} src={logo} alt="Logo" />
            <h3>
              <a href="/" className={classes.appName}>
                ZERODAY ALLIANCE
              </a>
            </h3>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/#home" className={classes.link}>
              Home
            </a>
            <a href="/#about" className={classes.link}>
              About
            </a>
            <a href="/#events" className={classes.link}>
              Events
            </a>
            <a href="/#teams" className={classes.link}>
              Teams
            </a>
            <a href="/#faq" className={classes.link}>
              FAQs
            </a>
            <a href="/#contact" className={classes.link}>
              Contact
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Link to="/cli">
              <Button
                leftSection={<IconTerminal2 />}
                variant="default"
                className={classes.cliButton}
              >
                CLI
              </Button>
            </Link>
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
        title="ZeroDay Alliance"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea>
          <Divider my="sm" />
          <a href="/#home" className={classes.link}>
            Home
          </a>
          <a href="/#about" className={classes.link}>
            About
          </a>
          <a href="/#events" className={classes.link}>
            Events
          </a>
          <a href="/#teams" className={classes.link}>
            Teams
          </a>
          <a href="/#faq" className={classes.link}>
            FAQs
          </a>
          <a href="/#contact" className={classes.link}>
            Contact
          </a>

          <Divider my="sm" />

          <Group grow justify="center" pb="xl">
            <Link to="/cli">
              <Button
                leftSection={<IconTerminal2 />}
                variant="default"
                className={classes.cliButton}
              >
                CLI
              </Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
