export interface TextStyle {
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  bgColor: string;
}

export const DEFAULT_TEXT_STYLE: TextStyle = {
  fontSize: 16,
  bold: false,
  italic: false,
  underline: false,
  bgColor: 'transparent',
};
