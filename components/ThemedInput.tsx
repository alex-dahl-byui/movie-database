import { type TextInputProps, StyleSheet, TextInput } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  label?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  label,
  ...rest
}: ThemedInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <ThemedView>
      {label && <ThemedText type="defaultSemiBold">{label}</ThemedText>}
      <TextInput
        style={[{ color }, styles.input]}
        placeholderTextColor={color}
        {...rest}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
