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
          width: width * 0.3,
          borderColor: theme ? Colors[theme].gray300 : "transparent",
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <ThemedText type="default16">{text}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.4,
    gap: 4,
    padding: 8,
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
