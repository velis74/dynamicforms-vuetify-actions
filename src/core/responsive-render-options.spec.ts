import { DisplayStyle } from './display-style';
import ResponsiveRenderOptions from './responsive-render-options';

describe('ResponsiveRenderOptions', () => {
  it('check parsing and correct breakpoint resolution', () => {
    const options = new ResponsiveRenderOptions({
      renderAs: 'BUTTON' as unknown as DisplayStyle, // hack to still pass it as string
      showIcon: true,
      sm: { showLabel: false },
      md: {
        showIcon: false,
        showLabel: true,
      },
      xl: { renderAs: 'TEXT' as unknown as DisplayStyle }, // hack to still pass it as string
    });

    expect(options.getOptionsForBreakpoint('xs')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: true,
      label: undefined,
    });

    expect(options.getOptionsForBreakpoint('sm')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: false,
      label: undefined,
    });

    expect(options.getOptionsForBreakpoint('lg')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: false,
      showLabel: true,
      label: undefined,
    });
  });
  it('check correct breakpoint carry-over between breakpoints', () => {
    const options = new ResponsiveRenderOptions({
      renderAs: 'BUTTON' as unknown as DisplayStyle, // hack to still pass it as string
      showIcon: true,
      sm: { showLabel: false },
      lg: {
        showIcon: false,
        showLabel: true,
      },
      xl: { renderAs: 'TEXT' as unknown as DisplayStyle }, // hack to still pass it as string
    });

    // should carry-over from "global" settings
    expect(options.getOptionsForBreakpoint('xs')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: true,
      label: undefined,
    });

    // should carry-over from sm
    expect(options.getOptionsForBreakpoint('md')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: false,
      label: undefined,
    });

    // should carry-over from lg
    expect(options.getOptionsForBreakpoint('xl')).toEqual({
      renderAs: DisplayStyle.BUTTON,
      showIcon: false,
      showLabel: true,
      label: undefined,
    });
  });
});
