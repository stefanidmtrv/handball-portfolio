import { Container, Grid, Title, Image } from "@mantine/core";
import { gallaryPhotos, navLinks } from "@/app/constants/constants";
import classes from './Gallery.module.css';

export function Gallery() {
return (
    <>
        <Title order={1} ta="center" mt={100}>{navLinks.map((item) => {if (item.id === 'gallery') return item.title;})}</Title>
        <Container my="md">
            <Grid align="center" justify="center" ta="center">
                {
                    gallaryPhotos.map((photo) => {
                        return <Grid.Col span={{ base: 10, xs: 6 }}>
                            <Image src={photo.img} className={classes.image} radius="lg"/>
                        </Grid.Col>
                    })
                }
            </Grid>
        </Container>
    </>
);
}
