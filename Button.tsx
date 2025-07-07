import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  style,
  textStyle,
  disabled = false
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`]];
    
    switch (variant) {
      case 'secondary':
        return [...baseStyle, styles.buttonSecondary];
      case 'outline':
        return [...baseStyle, styles.buttonOutline];
      default:
        return [...baseStyle, styles.buttonPrimary];
    }
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText, styles[`buttonText${size.charAt(0).toUpperCase() + size.slice(1)}`]];
    
    switch (variant) {
      case 'secondary':
        return [...baseStyle, styles.buttonTextSecondary];
      case 'outline':
        return [...baseStyle, styles.buttonTextOutline];
      default:
        return [...baseStyle, styles.buttonTextPrimary];
    }
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), disabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[...getTextStyle(), disabled && styles.buttonTextDisabled, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonSmall: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonMedium: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonLarge: {
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#3B82F6',
  },
  buttonSecondary: {
    backgroundColor: '#10B981',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3B82F6',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonDisabled: {
    backgroundColor: '#374151',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  buttonTextSmall: {
    fontSize: 14,
  },
  buttonTextMedium: {
    fontSize: 16,
  },
  buttonTextLarge: {
    fontSize: 18,
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    color: '#FFFFFF',
  },
  buttonTextOutline: {
    color: '#3B82F6',
  },
  buttonTextDisabled: {
    color: '#6B7280',
  },
});