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
import {
  bodyParts,
  recommended,
  recommendSingleThemes,
  series,
  singleThemes,
} from "@/features/shared/mock";
import { SeriesCard } from "@/features/shared/components/SeriesCard";
import { FlatCard } from "@/features/shared/components/FlatCard";
import { SingleThemeCard } from "@/features/shared/components/SingleThemeCard";

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
        {singleThemes.map((item) => (
          <SingleThemeCard
            key={item.text.main}
            text={item.text}
            image={item.image}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {recommendSingleThemes.map((item) => (
          <SingleThemeCard
            key={item.text.main}
            text={item.text}
            image={item.image}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {series.map((item) => (
          <SeriesCard key={item.id} text={item.text} images={item.images} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  scrollViewContentContainer: {
    gap: 16,
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
});
