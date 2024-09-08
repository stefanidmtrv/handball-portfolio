'use client';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Image } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { About } from '@/components/About/About';
import { Achievements } from '@/components/Achievements/Achievements';
import { Coaches } from '@/components/Coaches/Coaches';
import { Gallery } from '@/components/Gallery/Gallery';
import { Goals } from '@/components/Goals/Goals';
import { Partners } from '@/components/Partners/Partners';
import { Services } from '@/components/Services/Services';
import { Navbar } from '@/components/Navbar/Navbar';

export default function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" w="100%" px="md">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            {/* <Image src='logo.png' w="xl" h="xl"/>  */}
          </Group>
          <Group ml="auto">
            {/* <ColorSchemeToggle /> */}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md"><Navbar opened={opened} toggle={toggle} /></AppShell.Navbar>
      {/* <AppShell.Footer p="md">Footer</AppShell.Footer> */}

      <AppShell.Main>
        <section id="welcome">
          <Welcome />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="coaches">
          <Coaches />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="goals">
          <Goals />
        </section>
      </AppShell.Main>
    </AppShell>
  );
}
