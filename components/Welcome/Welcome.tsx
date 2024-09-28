import { Anchor, Stack, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { welcomeText } from '@/app/constants/constants';

export function Welcome() {
  return (
    <Stack align='center'>
      <Title className={classes.title} ta="center" mt={100} maw="1000px">
        {welcomeText.title}{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'cyan' }}>
          {welcomeText.clubName}
        </Text>
      </Title>
      {/* <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" p="sm">
       {welcomeText.text}
      </Text> */}
    </Stack>
  );
}
