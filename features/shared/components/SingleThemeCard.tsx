import { ThemedText } from "@/components/ThemedText";
import {
  type ImageSourcePropType,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

interface SingleThemeCardProps {
  text: {
    main: string;
    sub: string;
  };
  image: ImageSourcePropType;
}

export const SingleThemeCard = ({ text, image }: SingleThemeCardProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width * 0.5 }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <ThemedText type="default20">{text.main}</ThemedText>
        <ThemedText type="default12" color="gray500">
          {text.sub}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1.35,
    gap: 12,
    padding: 24,
    borderRadius: 32,
    backgroundColor: "#fff",
    // re: shadow
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    width: "33%",
    aspectRatio: 1,
    backgroundColor: "#f5de8e",
    borderRadius: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
});
