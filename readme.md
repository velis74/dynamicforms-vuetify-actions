# @dynamicforms/vuetify-actions

A responsive library for rendering actions (buttons, links) in Vue.js applications with Vuetify, 
integrated with @dynamicforms/vue-forms.

## Introduction

`@dynamicforms/vuetify-actions` provides a powerful yet simple way to manage responsive actions in forms built 
with Vue.js, Vuetify, and @dynamicforms/vue-forms. The library focuses on separating action logic from UI
representation, giving you control over how actions render across different screen sizes.

Unlike other action management approaches, `@dynamicforms/vuetify-actions` provides a responsive solution that adapts
to different breakpoints, allowing actions to change their appearance based on screen size.

## Features

- **Responsive Design**: Automatically adapt action display based on screen size breakpoints (xs, sm, md, lg, xl)
- **Display Flexibility**: Toggle between button and text display styles
- **Icon Support**: Seamless integration with vue-ionicon for action icons
- **Customizable Display**: Control visibility of labels and icons at different breakpoints
- **Vuetify Integration**: Works with Vuetify UI components for consistent styling
- **TypeScript Support**: Full type definitions for excellent developer experience
- **@dynamicforms/vue-forms Integration**: Connects to the form library's action system

## Installation

```bash
npm install @dynamicforms/vuetify-actions
```

## Basic Usage Example

Here's a simple example of how to create and use actions with responsive rendering:

```typescript
import { Action } from '@dynamicforms/vuetify-actions';
import { Action as FormAction } from '@dynamicforms/vue-forms';

// Create a form action
const saveFormAction = new FormAction();

// Create a responsive action for the form action
const saveAction = new Action(
  {
    name: 'save',
    label: 'Save',
    icon: 'save-outline',
    displayStyle: {
      renderAs: 'BUTTON',
      showIcon: true,
      showLabel: true,
      // Responsive options for different breakpoints
      sm: { showLabel: false }, // On small screens, only show icon
      md: { showIcon: true, showLabel: true }, // On medium screens, show both
    }
  },
  saveFormAction
);
```

## Responsive Display Example

The library provides flexible control over how actions appear at different screen sizes:

```typescript
import { Action, DisplayStyle } from '@dynamicforms/vuetify-actions';
import { Action as FormAction } from '@dynamicforms/vue-forms';

const deleteAction = new Action(
  {
    name: 'delete',
    label: 'Delete',
    icon: 'trash-outline',
    displayStyle: {
      // Default style (used for xs and larger if not overridden)
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: true,
      // Specific breakpoint overrides
      xs: { showLabel: false }, // On extra small screens, only show icon
      sm: { showLabel: false }, // On small screens, only show icon
      md: { showLabel: true },  // On medium screens, show label
      lg: { renderAs: DisplayStyle.TEXT }, // On large screens, show as text
      xl: { renderAs: DisplayStyle.TEXT }, // On extra large screens, show as text
    }
  },
  new FormAction()
);
```

## Vue Component Usage

Using the actions in a Vue component with Vuetify:

```vue
<template>
  <DfActions :actions="actions" button-size="small" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Action } from '@dynamicforms/vuetify-actions';
import { DfActions } from '@dynamicforms/vuetify-actions';
import { Action as FormAction } from '@dynamicforms/vue-forms';

const actions = ref([
  Action.closeAction({}, new FormAction().registerAction(/* your execute handler */)),
  Action.yesAction({}, new FormAction().registerAction(/* your execute handler */)),
  Action.noAction({}, new FormAction().registerAction(/* your execute handler */))
]);
</script>
```

## TypeScript Support

The library is written in TypeScript and provides full type definitions:

```typescript
import { Action, ActionJSON, DisplayStyle } from '@dynamicforms/vuetify-actions';
import { Action as FormAction } from '@dynamicforms/vue-forms';

// Define your action with TypeScript
const actionData: ActionJSON = {
  name: 'submit',
  label: 'Submit Form',
  icon: 'checkmark-outline',
  displayStyle: {
    renderAs: DisplayStyle.BUTTON,
    sm: { showLabel: false }
  }
};

const submitAction = new Action(actionData, new FormAction());
```

## Conclusion

`@dynamicforms/vuetify-actions` provides a clean, flexible approach to managing responsive actions in Vue.js 
applications with Vuetify. By focusing on responsive design and separation of concerns, it offers the flexibility 
needed for modern web applications while maintaining a simple, intuitive API.

For more detailed documentation and examples, check out the 
[source code](https://github.com/velis74/dynamicforms-vuetify-actions) or reach out to the author for assistance.

## License

MIT
