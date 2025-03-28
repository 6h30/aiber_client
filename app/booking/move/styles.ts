import { StyleSheet } from 'react-native';
import { spacing } from "@/theme/spacing";
import { theme } from "@/theme/colors";

export default StyleSheet.create({
  moveContainer: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  searchBarWrapper: {
    padding: spacing.md,
    backgroundColor: theme.background.primary,
  },
  sectionContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginBottom: spacing.md,
    color: theme.text.primary
  }
});