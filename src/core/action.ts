import * as Form from '@dynamicforms/vue-forms';
import { isString } from 'lodash-es';

import { DisplayStyle } from './display-style';
import ResponsiveRenderOptions, { BreakpointsJSON } from './responsive-render-options';

export interface ActionJSON {
  // [key: `action${string}`]: ActionHandler;
  name?: string;
  label?: string;
  icon?: string;
  displayStyle?: BreakpointsJSON;
  field_name?: string;
}

export interface ActionsJSON {
  [key: string]: ActionJSON;
}

class Action {
  public readonly name: string;

  public displayStyle: ResponsiveRenderOptions;

  public formAction: Form.Action;

  constructor(data: ActionJSON, formAction: Form.Action) {
    if (data.name == null) throw new Error(`Action name must not be empty ${data}`);
    // any non-string or empty string must resolve as null for label
    const label = !isString(data.label) || data.label.length === 0 ? undefined : data.label;
    // any non-string or empty string must resolve as null for icon
    const icon = !isString(data.icon) || data.icon.length === 0 ? undefined : data.icon;

    this.name = data.name;
    this.displayStyle = new ResponsiveRenderOptions(data.displayStyle, label);
    this.formAction = formAction;

    this.formAction.icon = icon;
    this.formAction.label = label;
  }

  get label() {
    return this.formAction?.label;
  }

  get labelAvailable() {
    return this.formAction.label !== undefined;
  }

  get icon() {
    return this.formAction?.icon;
  }

  get iconAvailable() {
    return this.formAction.icon !== undefined;
  }

  static actionFormName(actionName: string): string {
    return `$action${actionName.charAt(0).toUpperCase()}${actionName.slice(1)}`;
  }

  private static makeFormAction(actionOrExecuteHandler?: Form.Action | Form.ExecuteAction): Form.Action {
    let fa: Form.Action;
    if (actionOrExecuteHandler instanceof Form.ExecuteAction) {
      fa = new Form.Action().registerAction(actionOrExecuteHandler);
    } else if (actionOrExecuteHandler === undefined) {
      fa = new Form.Action();
    } else if (actionOrExecuteHandler instanceof Form.Action) {
      fa = actionOrExecuteHandler;
    } else {
      throw new Error('actionOrExecuteHandler is not of any of supported types');
    }
    return fa;
  }

  static closeAction(data: ActionJSON, actionOrExecuteHandler?: Form.Action | Form.ExecuteAction) {
    return new Action(
      {
        name: 'close',
        label: 'Close', // TODO: needs translation
        icon: 'close-outline',
        displayStyle: { renderAs: DisplayStyle.BUTTON, showLabel: true, showIcon: true },
        ...data, // any properties in data should overwrite properties in the constant
      },
      this.makeFormAction(actionOrExecuteHandler),
    );
  }

  static yesAction(data: ActionJSON, actionOrExecuteHandler?: Form.Action | Form.ExecuteAction) {
    return new Action(
      {
        name: 'yes',
        label: 'Yes', // TODO: needs translation
        icon: 'thumbs-up-outline',
        displayStyle: { renderAs: DisplayStyle.BUTTON, showLabel: true, showIcon: true },
        ...data, // any properties in data should overwrite properties in the constant
      },
      this.makeFormAction(actionOrExecuteHandler),
    );
  }

  static noAction(data: ActionJSON, actionOrExecuteHandler?: Form.Action | Form.ExecuteAction) {
    return new Action(
      {
        name: 'no',
        label: 'No', // TODO: needs translation
        icon: 'thumbs-down-outline',
        displayStyle: { renderAs: DisplayStyle.BUTTON, showLabel: true, showIcon: true },
        ...data, // any properties in data should overwrite properties in the constant
      },
      this.makeFormAction(actionOrExecuteHandler),
    );
  }
}

export default Action;
