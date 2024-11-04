import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
} from "@mantine/core";
import logo from "/src/assets/logo.svg";
import { IconTerminal2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { navOverride } = props;

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={`${classes.header} ${navOverride}`}>
        <Group className={classes.container} justify="space-around" h="100%">
          <Group>
            <img className={classes.logo} src={logo} alt="Logo" />
            <h3>
              <Link to="/#home" className={classes.appName}>
                ZeroDay Alliance SNU
              </Link>
            </h3>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/#about" className={classes.link}>
              About
            </Link>
            <Link to="/#events" className={classes.link}>
              Events
            </Link>
            <Link to="/teams/#core" className={classes.link}>
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
          <Link to="/teams/#core" className={classes.link}>
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
