import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header, type ShellIdentity } from './Header';
import { ShellPressable } from './ShellPressable';
import type { NappletDescriptor } from './workspace';
import { useShellStyles, type ShellPalette, type ShellFonts } from './theme';

export function WorkspaceHeader({ overview, focused, identity, disabled, onSettings, onOverview, onClose }: {
  overview: boolean; focused: NappletDescriptor | undefined; identity?: ShellIdentity; disabled: boolean;
  onSettings(): void; onOverview(): void; onClose(id: string): void;
}) {
  const { styles, isDark } = useShellStyles(createStyles);
  return <>
    <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
    <Header title={overview ? 'Hypergolic' : focused?.title ?? 'Hypergolic'} identity={identity} onSettings={onSettings} />
    {!overview && focused && <View style={styles.navigation}>
      <ShellPressable accessibilityRole="button" accessibilityLabel="All napplets" disabled={disabled} onPress={onOverview} testID="shell-overview" style={styles.navButton}><Text style={styles.navText}>‹ All napplets</Text></ShellPressable>
      <ShellPressable accessibilityRole="button" accessibilityLabel={`Close ${focused.title}`} disabled={disabled} onPress={() => onClose(focused.id)} testID="shell-close" style={styles.navButton}><Text style={styles.navText}>Close ×</Text></ShellPressable>
    </View>}
  </>;
}
const createStyles = (colors: ShellPalette, fonts: ShellFonts) => StyleSheet.create({
  navigation: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, borderTopWidth: 1, borderColor: colors.subtle },
  navButton: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 4 },
  navText: { fontFamily: fonts.medium, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.muted },
});
