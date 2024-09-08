import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    useMantineTheme,
  } from '@mantine/core';
  import classes from './Services.module.css';
  import { services } from '@/app/constants/constants';
interface ServicesCardProps {
    title: string;
    text: string;
}

export function ServicesCard( {title, text}: ServicesCardProps) {
    return (
        <Card key={title} shadow="md" radius="md" className={classes.card} padding="xl">
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {text}
            </Text>
        </Card>
        );
}

export function Services() {
    const theme = useMantineTheme();
  
    return (
      <Container size="lg" py="xl">
        <Title order={1} ta="center" mt={100}>Services</Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {services.map((feature) => (
                <ServicesCard title={feature.title} text={feature.text}/>
            ))}
        </SimpleGrid>
      </Container>
    );
  }