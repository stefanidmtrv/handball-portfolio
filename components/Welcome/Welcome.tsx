import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { welcomeText } from '@/app/constants/constants';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {welcomeText.title}{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {welcomeText.clubName}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
       {welcomeText.text}
      </Text>
    </>
  );
}
