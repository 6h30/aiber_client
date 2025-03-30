import { StyleSheet } from 'react-native';
import { spacing } from "@/theme/spacing";
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  moveContainer: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  searchBarWrapper: {
    padding: spacing.md,
    backgroundColor: Colors.background.primary,
  },
  sectionContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginBottom: spacing.md,
    color: Colors.text.primary
  }
});

export default styles;