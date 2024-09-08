import { Grid, Container, Title, Image, Text, Stack, Card } from "@mantine/core";
import { partners, partnersNoImage } from "@/app/constants/constants";

export function Partners() {
return (
    <>
        <Title order={1} ta="center" mt={100}>Partners</Title>
        <Container my="md">
            <Grid align="center" justify="center" ta="center">
                {
                    partners.map((partner) => {
                        return <Grid.Col span={{ base: 6, xs: 4 }}><Image src={partner.img}/></Grid.Col>
                    })
                }
                {
                partnersNoImage.map((partner) => {
                    return  <Grid.Col span={{ base: 6, xs: 4 }}><Card withBorder radius="md" padding="sm" bg="var(--mantine-color-body)">
                                <Text fz="lg" fw={500} mt="md">{partner.name}</Text>
                            </Card></Grid.Col>
                })
                }
            </Grid>
        </Container>
    </>
);
}
