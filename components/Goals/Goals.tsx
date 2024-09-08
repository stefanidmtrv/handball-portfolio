import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    useMantineTheme,
    Group,
    Stack,
  } from '@mantine/core';
  import classes from './Goals.module.css';
  import { goals } from '@/app/constants/constants';

interface GoalsCardProps {
    index: number;
    text: string;
}

export function ServicesCard( {index, text}: GoalsCardProps) {
    return (
        <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
            <Stack align='center'>
            <div className={classes.goalNumber}>
                {index}
            </div>
            <Text fz="sm">
                {text}
            </Text>
            </Stack>
        </Card>
        );
}

export function Goals() {
return (
    <>
        <Title order={1} ta="center" mt={100}>Goals</Title>
        <Stack ta="center" mx="auto" mt="xl" p="xl" maw="900px">
            {goals.map((goal, index) => {
                return <ServicesCard index={index+1} text={goal.text}/>
            })}
        </Stack>
    </>
);
}
