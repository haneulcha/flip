import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomeHeader from "@/features/shared/components/HomeHeader";
import Card from "@/features/shared/components/Card";
import { bodyParts, recommended, series } from "@/features/shared/mock";
import { SeriesCard } from "@/features/shared/components/SeriesCard";
import { FlatCard } from "@/features/shared/components/FlatCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {recommended.map((item) => (
          <Card key={item.text.main} text={item.text} image={item.image} />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.gridContentContainer}
      >
        <FlatList
          data={bodyParts}
          numColumns={Math.ceil(bodyParts.length / 2)}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          style={styles.gridContainer}
          contentContainerStyle={styles.gridContentContainer}
          columnWrapperStyle={styles.gridColumn}
          renderItem={({ item }) => (
            <FlatCard key={item.id} image={item.image} text={item.name} />
          )}
        />
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {series.map((item) => (
          <SeriesCard key={item.id} text={item.text} images={item.images} />
        ))}
      </ScrollView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  scrollViewContentContainer: {
    gap: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  gridContainer: {
    paddingHorizontal: 16,
  },
  gridContentContainer: {
    alignSelf: "flex-start",
    gap: 12,
  },
  gridColumn: {
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
