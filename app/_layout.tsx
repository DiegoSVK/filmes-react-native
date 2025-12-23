import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* O nome AQUI deve ser igual ao nome da pasta */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="genero/[id]"
        options={{
          title: "",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="detalhesDoFilme/[id]"
        options={{
          title: "Voltar",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="search/[query]"
        options={{
          title: "Voltar",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
