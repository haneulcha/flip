import { ThemedText } from "@/components/ThemedText";
import {
  type ImageSourcePropType,
  View,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

type SeriesCardProps = {
  text: {
    main: string;
    sub: string;
  };
  images: ImageSourcePropType[];
};

export const SeriesCard = ({ text, images }: SeriesCardProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width * 0.65 }]}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image source={images[0]} style={styles.image} />
        </View>
        <View
          style={[
            styles.imageWrapper,
            { backgroundColor: "#F2C8C7", width: "30%" },
          ]}
        >
          <Image source={images[1]} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={images[2]} style={styles.image} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <ThemedText type="default32">{text.main}</ThemedText>
        <ThemedText type="default16" color="gray500">
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
    padding: 32,
    borderRadius: 36,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "22.5%",
    aspectRatio: 1,
    backgroundColor: "#ABC8C7",
    borderRadius: "100%",
    borderColor: "red",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 8,
    alignItems: "center",
    gap: 4,
  },
});