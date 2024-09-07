import { Image, Container, Title, Text } from '@mantine/core';
import { aboutUs } from '@/app/constants/constants';
import classes from './About.module.css';

interface AboutSectionProps {
    title: string;
    text: string;
    image: string;
}

export function AboutSection({title, text, image}: AboutSectionProps) {
    const split = title.split(" ");
    let before, highlight, after = "";
    if (split.length > 0) {
        before = split[0];
    }
    if (split.length > 1) {
        highlight = split[1];
    }
    for (let i=2; i<split.length; ++i) {
        after += split[i];
    }

    return (
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {before}<span className={classes.highlight}>{highlight}</span>{after}
            </Title>
            <Text c="dimmed" mt="md">
            {text}  
            </Text>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    );
  }

export function About() {
return (
    <>
        <Title order={1} ta="center" mt={100}>About</Title>
        {aboutUs.map(element => {
            return <AboutSection title={element.title} text={element.text} image={element.image} />
        })}
    </>
);
}
