import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedBadgeProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedBadge({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedBadgeProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const badgeColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "badgeBackground"
  );

  return (
    <Text
      style={[{ color, backgroundColor: badgeColor }, style, styles.text]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 8,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
