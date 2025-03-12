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
});
