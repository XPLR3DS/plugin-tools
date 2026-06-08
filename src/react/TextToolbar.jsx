import { useState } from 'react';

const TOOLBAR_HEIGHT = 32;

// Background color options with contrasting text colors
const BG_COLORS = [
  { value: 'transparent', label: 'None', textColor: null },
  { value: '#ffff00', label: 'Yellow', textColor: '#000000' },
  { value: '#00ff00', label: 'Green', textColor: '#000000' },
  { value: '#00ffff', label: 'Cyan', textColor: '#000000' },
  { value: '#ff00ff', label: 'Magenta', textColor: '#ffffff' },
  { value: '#ffffff', label: 'White', textColor: '#000000' },
  { value: '#000000', label: 'Black', textColor: '#ffffff' },
];

// Get text color for a background color
export const getTextColorForBg = (bgColor) => {
  const colorOption = BG_COLORS.find((c) => c.value === bgColor);
  return colorOption?.textColor || null;
};

const TextToolbar = ({
  position,
  onFontSizeChange,
  onStyleToggle,
  onBgColorChange,
  onDelete,
  textStyle,
}) => {
  const [showBgPicker, setShowBgPicker] = useState(false);

  const toolbarStyle = {
    position: 'fixed',
    left: position.x,
    top: position.y - TOOLBAR_HEIGHT - 8,
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    padding: '4px 6px',
    background: '#232323',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    zIndex: 1001,
  };

  const buttonStyle = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    color: '#AAAFC3',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: '#ff00ba',
    color: 'white',
  };

  const dividerStyle = {
    width: '1px',
    height: '20px',
    background: '#444',
    margin: '0 4px',
  };

  const colorPickerStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '4px',
    display: 'flex',
    gap: '4px',
    padding: '6px',
    background: '#232323',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  };

  return (
    <div
      role="button"
      tabIndex={0}
      style={toolbarStyle}
      onMouseDown={(e) => e.preventDefault()}
    >
      {/* Font size decrease */}
      <button
        style={buttonStyle}
        onClick={() => onFontSizeChange(-2)}
        title="Decrease font size"
      >
        A-
      </button>
      {/* Font size increase */}
      <button
        style={buttonStyle}
        onClick={() => onFontSizeChange(2)}
        title="Increase font size"
      >
        A+
      </button>
      <div style={dividerStyle} />
      {/* Bold */}
      <button
        style={textStyle?.bold ? activeButtonStyle : buttonStyle}
        onClick={() => onStyleToggle('bold')}
        title="Bold"
      >
        B
      </button>
      {/* Italic */}
      <button
        style={{
          ...(textStyle?.italic ? activeButtonStyle : buttonStyle),
          fontStyle: 'italic',
        }}
        onClick={() => onStyleToggle('italic')}
        title="Italic"
      >
        I
      </button>
      {/* Underline */}
      <button
        style={{
          ...(textStyle?.underline ? activeButtonStyle : buttonStyle),
          textDecoration: 'underline',
        }}
        onClick={() => onStyleToggle('underline')}
        title="Underline"
      >
        U
      </button>
      <div style={dividerStyle} />
      {/* Background color */}
      <div style={{ position: 'relative' }}>
        <button
          style={{
            ...buttonStyle,
            flexDirection: 'column',
            gap: '1px',
            padding: '2px',
          }}
          onClick={() => setShowBgPicker(!showBgPicker)}
          title="Highlight color"
        >
          <span style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>
            A
          </span>
          <div
            style={{
              width: '14px',
              height: '4px',
              background:
                textStyle?.bgColor && textStyle.bgColor !== 'transparent'
                  ? textStyle.bgColor
                  : '#AAAFC3',
              borderRadius: '1px',
            }}
          />
        </button>
        {showBgPicker && (
          <div style={colorPickerStyle}>
            {BG_COLORS.map((color) => (
              <button
                key={color.value}
                style={{
                  width: '20px',
                  height: '20px',
                  background:
                    color.value === 'transparent'
                      ? 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)'
                      : color.value,
                  backgroundSize:
                    color.value === 'transparent' ? '8px 8px' : 'auto',
                  backgroundPosition:
                    color.value === 'transparent' ? '0 0, 4px 4px' : 'auto',
                  border:
                    textStyle?.bgColor === color.value
                      ? '2px solid #ff00ba'
                      : '1px solid #666',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  onBgColorChange(color.value);
                  setShowBgPicker(false);
                }}
                title={color.label}
              />
            ))}
          </div>
        )}
      </div>
      <div style={dividerStyle} />
      {/* Delete */}
      <button style={buttonStyle} onClick={onDelete} title="Delete">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </button>
    </div>
  );
};

export default TextToolbar;
