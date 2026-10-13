import { StyleSheet, Text, View } from 'react-native';
import { ShellPressable as Pressable } from './ShellPressable';
import { Image, type ImageProps } from 'expo-image';
import { useState } from 'react';
import { useShellStyles, type ShellPalette, type ShellFonts } from './theme';

/** Supplied by the trusted identity service. This component never resolves profile URLs. */
export interface ShellIdentity { npub: string; avatar?: ImageProps['source']; avatarKey?: string }
interface Props { title: string; identity?: ShellIdentity; onSettings: () => void }

function Avatar({ identity }: { identity: ShellIdentity }) {
  const { styles } = useShellStyles(createStyles);
  const [failedSource, setFailedSource] = useState<ImageProps['source'] | null>(null);
  return identity.avatar && identity.avatar !== failedSource
    ? <Image source={identity.avatar} style={styles.avatar} cachePolicy="none" autoplay={false} onError={() => setFailedSource(identity.avatar ?? null)} accessible={false} />
    : <View style={styles.avatar} accessible={false}><Text style={styles.avatarText}>{identity.npub.slice(-2).toUpperCase()}</Text></View>;
}

export function Header({ title, identity, onSettings }: Props) {
  const { styles } = useShellStyles(createStyles);
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/brand/hypergolic-logo.png')} style={styles.logo} contentFit="contain" accessibilityLabel="Hypergolic" />
      <Text accessibilityRole="header" accessibilityLabel={title} numberOfLines={1} style={styles.title} testID="focused-napplet-name">{title}</Text>
      <Pressable accessibilityRole="button" accessibilityLabel={identity ? `Settings for ${identity.npub}` : 'Settings'} onPress={onSettings} testID="shell-settings" style={({ pressed }) => [styles.settings, pressed && styles.pressed]}>
        {identity ? <Avatar key={`${identity.npub}:${identity.avatarKey ?? ''}`} identity={identity} /> : <View style={styles.settingsMark} accessible={false}><View style={styles.settingsDot} /></View>}
        <Text numberOfLines={1} style={[styles.identity, identity && styles.npub]}>{identity ? `${identity.npub.slice(0, 8)}…${identity.npub.slice(-4)}` : 'Settings'}</Text>
      </Pressable>
    </View>
  );
}

const createStyles = (colors: ShellPalette, fonts: ShellFonts) => StyleSheet.create({
  header: { minHeight: 68, paddingHorizontal: 16, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10 },
  logo: { width: 32, height: 32 },
  title: { fontFamily: fonts.medium, flex: 1, fontSize: 16, color: colors.text, letterSpacing: 1.6, textTransform: 'uppercase' },
  settings: { minHeight: 48, maxWidth: '48%', paddingLeft: 8, paddingRight: 0, flexDirection: 'row', gap: 8, alignItems: 'center' },
  pressed: { backgroundColor: colors.raised },
  identity: { fontFamily: fonts.body, color: colors.text, fontSize: 12, flexShrink: 1 },
  npub: { fontFamily: fonts.mono, color: colors.muted },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.strong, fontSize: 11, color: colors.onAccent },
  settingsMark: { width: 30, height: 30, borderWidth: 1.5, borderColor: colors.muted, borderRadius: 0, alignItems: 'center', justifyContent: 'center' },
  settingsDot: { width: 8, height: 8, borderWidth: 1.5, borderColor: colors.muted, borderRadius: 0 },
});
