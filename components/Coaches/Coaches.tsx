import { Center, Stack, Title } from "@mantine/core";
import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './Coaches.module.css';
import { coaches, navLinks } from "@/app/constants/constants";

interface CoachesSectionProps {
    name: string;
    title: string;
    image: string;
    email: string;
    phone: string;
}

export function CoachesSection( {name, title, image, email, phone}: CoachesSectionProps ) {
    return (
      <div>
        <Group wrap="nowrap" w="275px">
          <Avatar
            src={image}
            size={94}
            radius="lg"
            className={classes.coachAvatar}
          />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {title}
            </Text>
  
            <Text fz="lg" fw={500} className={classes.name}>
              {name}
            </Text>
  
            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {email}
              </Text>
            </Group>
  
            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
      </div>
    );
  }

export function Coaches() {
return (
    <Stack align="center">
        <Title order={1} ta="center" mt={100}>{navLinks.map((item) => {if (item.id === 'coaches') return item.title;})}</Title>
        <Group className={classes.coachesContainer} gap="xl">
            {coaches.map((item) => {
                return <CoachesSection name={item.name} title={item.title} image={item.img} email={item.email} phone={item.phone}/>
            })}

        </Group>
        
    </Stack>
);
}
