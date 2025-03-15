---
layout: home
hero:
  name: DynamicForms Vuetify Actions
  text: Responsive action rendering for Vue.js applications
  tagline: Build flexible, responsive action interfaces with Vuetify and @dynamicforms/vue-forms
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/velis74/dynamicforms-vuetify-actions
features:
  - title: Responsive Design
    details: Automatically adapt action display based on screen size breakpoints (xs, sm, md, lg, xl)
  - title: Display Flexibility
    details: Toggle between button and text display styles for optimal user experience
  - title: Vuetify Integration
    details: Seamlessly works with Vuetify UI components for consistent styling
  - title: TypeScript Support
    details: Full type definitions for an excellent developer experience
---

# @dynamicforms/vuetify-actions

A responsive library for rendering actions (buttons, links) in Vue.js applications with Vuetify, 
integrated with @dynamicforms/vue-forms.

## Introduction

`@dynamicforms/vuetify-actions` provides a powerful yet simple way to manage responsive actions in forms built 
with Vue.js, Vuetify, and @dynamicforms/vue-forms. The library focuses on separating action logic from UI
representation, giving you control over how actions render across different screen sizes.

## Interactive Demo

Below is a simple demonstration of the DfActions component showing how actions adapt based on screen size:

<ActionsDemo />

Try resizing your browser window to see how the actions change based on screen size.

## Basic Usage Example

```typescript
import { Action, DisplayStyle } from '@dynamicforms/vuetify-actions';
import { DfActions } from '@dynamicforms/vuetify-actions';
import { Action as FormAction } from '@dynamicforms/vue-forms';

// Create responsive actions
const actions = [
  new Action({
    name: 'save',
    label: 'Save',
    icon: 'save-outline',
    displayStyle: {
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: true,
      sm: { showLabel: false } // On small screens, only show icon
    }
  }, new FormAction()),
  
  new Action({
    name: 'cancel',
    label: 'Cancel',
    icon: 'close-outline',
    displayStyle: {
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: true,
      sm: { showLabel: false }, // On small screens, only show icon
      lg: { renderAs: DisplayStyle.TEXT } // On large screens, show as text
    }
  }, new FormAction())
];
```

Then in your template:

```vue
<template>
  <df-actions :actions="actions" button-size="default" show-as-group="no" />
</template>
```

## Next Steps

Check out the [Getting Started](/guide/getting-started) guide to learn how to install and use the library, 
or explore the [Component Example](/examples/component-example) to see more detailed usage.
