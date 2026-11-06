import '@mantine/core/styles.css';
import {
  Anchor, AppShell, Avatar, Badge, Burger, Button, Card, Container, Group, Image,
  MantineProvider, SimpleGrid, Stack, Tabs, Text, TextInput, Title, Switch, Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const items = [
  { title: 'ベースプレート', tag: 'パーツ', desc: '汎用の取り付けプレート。M3ネジ穴付き。', color: 'blue' },
  { title: 'ケーブルクリップ', tag: '小物', desc: 'デスク裏の配線整理に便利なクリップ。', color: 'teal' },
  { title: 'スマホスタンド', tag: 'ガジェット', desc: '角度調整できる折りたたみ式スタンド。', color: 'grape' },
  { title: 'ミニ収納ボックス', tag: '収納', desc: '積み重ねできる小型ボックス。', color: 'orange' },
  { title: 'ヘッドホンフック', tag: 'ガジェット', desc: '机の天板に挟んで使うフック。', color: 'grape' },
  { title: 'ギアセット', tag: 'パーツ', desc: '工作用の歯車セット(6種)。', color: 'blue' },
];

function Content() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={3}>3dyasan Archive</Title>
          </Group>
          <Group gap="lg" visibleFrom="sm">
            <Anchor href="#works">作品</Anchor>
            <Anchor href="#about">について</Anchor>
            <Anchor href="#contact">お問い合わせ</Anchor>
          </Group>
          <Avatar color="blue" radius="xl">3D</Avatar>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg" py="xl">
          <Stack gap="xl">
            <Stack gap="xs" ta="center" py="xl">
              <Badge variant="light" size="lg" mx="auto">Design Sample</Badge>
              <Title order={1} fz={{ base: 28, sm: 44 }}>3Dプリント作品アーカイブ</Title>
              <Text c="dimmed" maw={520} mx="auto">
                Mantineのコンポーネントを使ったデザインサンプルです。
              </Text>
              <Group justify="center" mt="md">
                <Button size="md">作品を見る</Button>
                <Button size="md" variant="default">詳しく</Button>
              </Group>
            </Stack>

            <Stack id="works" gap="md">
              <Title order={2}>作品</Title>
              <Tabs defaultValue="all">
                <Tabs.List>
                  <Tabs.Tab value="all">すべて</Tabs.Tab>
                  <Tabs.Tab value="parts">パーツ</Tabs.Tab>
                  <Tabs.Tab value="gadget">ガジェット</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                {items.map((i) => (
                  <Card key={i.title} withBorder shadow="sm" radius="md" padding="lg">
                    <Card.Section>
                      <Image
                        src={`https://placehold.co/600x320/e7f5ff/1c7ed6?text=${encodeURIComponent(i.title)}`}
                        h={160}
                        alt={i.title}
                      />
                    </Card.Section>
                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={600}>{i.title}</Text>
                      <Badge color={i.color}>{i.tag}</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">{i.desc}</Text>
                    <Button fullWidth mt="md" radius="md" variant="light">詳細</Button>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>

            <Card id="contact" withBorder radius="md" padding="xl">
              <Title order={2} mb="md">お問い合わせ</Title>
              <Stack maw={480}>
                <TextInput label="お名前" placeholder="山田 太郎" />
                <TextInput label="メール" placeholder="you@example.com" />
                <Textarea label="メッセージ" minRows={3} autosize />
                <Switch label="返信を希望する" defaultChecked />
                <Button>送信</Button>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default function DesignSample() {
  return (
    <MantineProvider>
      <Content />
    </MantineProvider>
  );
}
