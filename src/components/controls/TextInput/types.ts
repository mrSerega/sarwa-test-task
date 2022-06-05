export interface TextInputProps {
  value: string;

  label?: string;
  warning?: string;

  onChange: (value: string) => void;
}