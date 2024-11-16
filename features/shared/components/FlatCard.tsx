import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  useColorScheme,
} from "react-native";

type FlatCardProps = {
  image: ImageSourcePropType;
  text: string;
};

export const FlatCard = ({ image, text }: FlatCardProps) => {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        {
          width: width * 0.35,
          borderColor: theme ? Colors[theme].gray200 : "transparent",
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <ThemedText type="default12">{text}</ThemedText>
    </View>
  );
};

// theme을 가져올 수는 없나?
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.5,
    gap: 8,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1.5,
  },
  imageContainer: {
    width: "35%",
    aspectRatio: 1,
    backgroundColor: "#ABC8C7",
    borderRadius: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
