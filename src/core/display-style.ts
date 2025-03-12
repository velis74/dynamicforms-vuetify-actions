/**
 * DisplayMode enum provides an enumeration for supported ways of rendering a particular object in the DOM
 */
enum DisplayStyle {
  // This enum is actually declared in dynamicforms.action.py
  BUTTON = 0, // action should render as a button
  TEXT = 1, // action should render as a link text
}

export const defaultDisplayStyle = DisplayStyle.BUTTON;

namespace DisplayStyle {
  export function fromString(mode: string): DisplayStyle {
    if (mode.toUpperCase() === 'BUTTON') return DisplayStyle.BUTTON;
    if (mode.toUpperCase() === 'TEXT') return DisplayStyle.TEXT;
    return defaultDisplayStyle;
  }

  export function fromAny(mode: any): DisplayStyle {
    const input = (typeof mode === 'number') ? mode : DisplayStyle.fromString(mode as string);
    if (Object.values(DisplayStyle).includes(input)) return input;
    return defaultDisplayStyle;
  }

  export function isDefined(mode: number | string): boolean {
    const check = (typeof mode === 'number') ? mode : DisplayStyle.fromString(mode as string);
    return Object.values(DisplayStyle).includes(check);
  }
}

Object.freeze(DisplayStyle);

export { DisplayStyle };
