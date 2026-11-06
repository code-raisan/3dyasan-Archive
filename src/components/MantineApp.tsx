import '@mantine/core/styles.css';
import { Button, Container, MantineProvider, Stack, Text, Title } from '@mantine/core';

export default function MantineApp() {
  return (
    <MantineProvider>
      <Container py="xl">
        <Stack align="flex-start">
          <Title order={1}>3dyasan Archive</Title>
          <Text c="dimmed">Mantine is set up and ready to use.</Text>
          <Button>Hello Mantine</Button>
        </Stack>
      </Container>
    </MantineProvider>
  );
}
