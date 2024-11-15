import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, useColorScheme } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

export default function HomeHeader() {
  const theme = useColorScheme();
  const today = new Date();

  const date = today.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.dateContainer}>
        <ThemedText type="default16" color="gray500">
          {date}
        </ThemedText>
        <ThemedText type="heading24">{day}</ThemedText>
      </ThemedView>
      <ThemedView>
        <IconSymbol
          name="bell.fill"
          size={28}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateContainer: {
    gap: 4,
  },
});
