import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  color?: keyof typeof Colors.light | keyof typeof Colors.dark;
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "default12"
    | "default16"
    | "default24"
    | "default32"
    | "heading24";
};

export function ThemedText({
  style,
  color,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const fallbackColor = useThemeColor(
    {
      light: color ? Colors.light[color] : lightColor,
      dark: color ? Colors.dark[color] : darkColor,
    },
    "text"
  );

  return (
    <Text
      style={[
        { color: fallbackColor },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "heading24" ? styles.heading24 : undefined,
        type === "default12" ? styles.default12 : undefined,
        type === "default16" ? styles.default16 : undefined,
        type === "default24" ? styles.default24 : undefined,
        type === "default32" ? styles.default32 : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heading24: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
  },
  default16: {
    fontSize: 16,
    fontWeight: "400",
  },
  default12: {
    fontSize: 12,
    fontWeight: "400",
  },
  default24: {
    fontSize: 24,
    fontWeight: "400",
  },
  default32: {
    fontSize: 32,
    fontWeight: "400",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
