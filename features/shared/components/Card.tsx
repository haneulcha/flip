import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
  useWindowDimensions,
} from "react-native";

type CardProps = {
  text: {
    main: string;
    sub: string;
  };
  image: ImageSourcePropType;
};

export default function Card({ text, image }: CardProps) {
  const { width } = useWindowDimensions();

  return (
    <ThemedView style={[styles.container, { width: width * 0.8 }]}>
      <View style={styles.textContainer}>
        <ThemedText type="default16" color="gray500">
          {text.sub}
        </ThemedText>
        <ThemedText type="default32">{text.main}</ThemedText>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 48,
    // shadowColor: "#000",
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 1,
  },
  textContainer: {
    gap: 4,
  },
  imageContainer: {
    width: "100%",
    height: "66%",
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
