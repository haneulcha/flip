import { Image, StyleSheet, ScrollView, FlatList, View } from "react-native";

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
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const bottomHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={[styles.container]}
      contentInsetAdjustmentBehavior="automatic" // 상태바까지 컨텐츠 보이도록 설정
      contentContainerStyle={{
        // contentContainerStyle을 잘 써야 함
        paddingBottom: bottomHeight,
      }}
    >
      <HomeHeader />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          padding: 36,
        }}
      >
        {recommended.map((item) => (
          <Card key={item.text.main} text={item.text} image={item.image} />
        ))}
      </ScrollView>

      <View style={styles.section}>
        <ThemedText type="heading16" color="gray500" style={styles.heading}>
          {bodyParts.title}
        </ThemedText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            data={bodyParts.data}
            numColumns={Math.ceil(bodyParts.data.length / 2)}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: "flex-start",
              gap: 12,
            }}
            columnWrapperStyle={{ gap: 8 }}
            renderItem={({ item }) => (
              <FlatCard key={item.id} image={item.image} text={item.name} />
            )}
          />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <ThemedText type="heading16" color="gray500" style={styles.heading}>
          {singleThemes.title}
        </ThemedText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
        >
          {singleThemes.data.map((item) => (
            <SingleThemeCard
              key={item.text.main}
              text={item.text}
              image={item.image}
            />
          ))}
        </ScrollView>
      </View>

      {/* refactor: 재사용 가능 */}
      <View style={styles.section}>
        <ThemedText type="heading16" color="gray500" style={styles.heading}>
          {recommendSingleThemes.title}
        </ThemedText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
        >
          {recommendSingleThemes.data.map((item) => (
            <SingleThemeCard
              key={item.text.main}
              text={item.text}
              image={item.image}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <ThemedText type="heading16" color="gray500" style={styles.heading}>
          {series.title}
        </ThemedText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
        >
          {series.data.map((item) => (
            <SeriesCard key={item.id} text={item.text} images={item.images} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  section: {
    paddingBottom: 36,
  },
  heading: {
    paddingHorizontal: 20,
  },
  content: {
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
