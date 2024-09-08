import { Group, List, Stack, ThemeIcon, Title, rem } from "@mantine/core";
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots, IconCheck } from '@tabler/icons-react';
import { achievementsList, navLinks } from "@/app/constants/constants";
import classes from './Achievements.module.css';

interface AchievementText {
    achievement: string;
}

interface Achievement {
    date: string;
    achievements: AchievementText[];
}

interface AchievementList {
    title: string;
    dates: Achievement[];
}

export function AchievementTimeline({ title, dates }: AchievementList) {
    return (
        <Stack>
        <Title order={2} fz="lg" fw={500} maw="400px" className={classes.cardTitle}>{title}</Title>
        <Timeline bulletSize={24} lineWidth={2}>
        {
            dates.map((achievement: Achievement) => {
                return <Timeline.Item title={achievement.date}>
                        <List mt={15} spacing="sm" size="sm">
                            {
                                achievement.achievements.map((item) => {
                                    return <List.Item><Text fz="sm" c="dimmed" className={classes.achievementText}>{item.achievement}</Text></List.Item>
                                })
                            }
                        </List>
                    </Timeline.Item>
            })
        }
        </Timeline>
        </Stack>
    );
}

export function Achievements() {
return (
    <>
        <Title order={1} ta="center" mt={100}>{navLinks.map((item) => {if (item.id === 'achievements') return item.title;})}</Title>
            <Group justify="center" align="top" mt="xl" p="sm">
            {
                achievementsList.map((achievementLs) => {
                    return <AchievementTimeline title={achievementLs.title} dates={achievementLs.dates}/>
                })
            }
            </Group>
    </>
);
}
