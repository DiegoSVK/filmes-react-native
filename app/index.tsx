import { Redirect } from 'expo-router';

export default function Index() {
  // Isso manda o usuário direto para a tela Home que está dentro das (tabs)
  return <Redirect href="/Home" />;
}