import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
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
            <Link to="/#about" className={classes.link}>
              About
            </Link>
            <Link to="/#events" className={classes.link}>
              Events
            </Link>
            <Link to="/teams" className={classes.link}>
              Teams
            </Link>
            <Link to="/#faq" className={classes.link}>
              FAQs
            </Link>
            <Link to="/#contact" className={classes.link}>
              Contact
            </Link>
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
          <Link to="/#about" className={classes.link}>
            About
          </Link>
          <Link to="/#events" className={classes.link}>
            Events
          </Link>
          <Link to="/teams" className={classes.link}>
            Teams
          </Link>
          <Link to="/#faq" className={classes.link}>
            FAQs
          </Link>
          <Link to="/#contact" className={classes.link}>
            Contact
          </Link>

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
