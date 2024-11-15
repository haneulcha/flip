import { ThemedText } from "@/components/ThemedText";
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
    <View style={[styles.wrapper, { width: width * 0.8 }]}>
      <View style={styles.container}>
        <ThemedText type="default16" color="gray500" style={styles.subText}>
          {text.sub}
        </ThemedText>
        <ThemedText type="default32">{text.main}</ThemedText>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "red",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 16,
  },
  container: {
    padding: 24,
    borderRadius: 48,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 1,
  },
  subText: {
    marginBottom: 4,
  },
  imageContainer: {
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    marginTop: 16,
    height: "68%",
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
