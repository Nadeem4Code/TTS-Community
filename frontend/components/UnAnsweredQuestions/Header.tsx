import { useTheme, Appbar } from 'react-native-paper';

export default function Header() {
  const theme = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.onPrimary }}>
      <Appbar.Content
        title="TTS Community"
        color={'white'}
        titleStyle={{ textAlign: 'center' }}
      />
    </Appbar.Header>
  );
}
