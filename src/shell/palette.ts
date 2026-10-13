/** Shared shell colors. Guest documents choose whether to use the theme service. */
export const darkPalette = {
  background: '#080F17', surface: '#111D29', raised: '#1C2B3B',
  text: '#EEF3F7', muted: '#AFBDCB', accent: '#F5A04B', border: '#3C4C5D',
  primary: '#EEF3F7', onPrimary: '#080F17', onAccent: '#18110B',
  subtle: '#263646', glass: 'rgba(17,29,41,0.92)', shade: 'rgba(2,6,10,0.76)',
} as const;

export type ShellPalette = { readonly [K in keyof typeof darkPalette]: string };

export const lightPalette: ShellPalette = {
  background: '#EEE6DA', surface: '#FAF6EF', raised: '#E3D7C6',
  text: '#2B211B', muted: '#68584C', accent: '#983C08', border: '#B1A08D',
  primary: '#2B211B', onPrimary: '#FAF6EF', onAccent: '#FFFFFF',
  subtle: '#D4C7B7', glass: 'rgba(250,246,239,0.94)', shade: 'rgba(31,24,18,0.48)',
};

export function shellPalette(scheme: string | null | undefined): ShellPalette {
  return scheme === 'light' ? lightPalette : darkPalette;
}
