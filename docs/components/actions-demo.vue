<template>
  <div class="actions-demo pa-4">
    <p><strong>Current breakpoint:</strong> {{ currentBreakpoint }}</p>

    <div class="actions-container mt-4">
      <DfActions :actions="actions"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import { Action, DisplayStyle, DfActions } from '../../src';

// Mock FormAction class for documentation
class MockFormAction {
  public icon?: string;
  public label?: string;

  execute(event: MouseEvent) {
    console.log('Action executed', this.label, event);
    alert(`Action "${this.label}" clicked`);
  }
}

// Create actions
const saveAction = new Action(
  {
    name: 'save',
    label: 'Save',
    icon: 'save-outline',
    displayStyle: {
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: false,
      md: { showLabel: true, showIcon: false }, // Medium screen and bigger, show label, but not icon
      lg: { showIcon: true } // Large screen and bigger, show label (carried over from md), and icon
    }
  },
  new MockFormAction() as any
);

const deleteAction = new Action(
  {
    name: 'delete',
    label: 'Delete',
    icon: 'trash-outline',
    displayStyle: {
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: false,
      md: { showLabel: true, showIcon: false }, // Medium screen and bigger, show label, but not icon
      lg: { showIcon: true, renderAs: DisplayStyle.TEXT } // On large screens, show as text
    }
  },
  new MockFormAction() as any
);

const cancelAction = new Action(
  {
    name: 'cancel',
    label: 'Cancel',
    icon: 'close-outline',
    displayStyle: {
      renderAs: DisplayStyle.BUTTON,
      showIcon: true,
      showLabel: false,
      md: { showLabel: true, showIcon: false }, // On small screens, only show icon
      lg: { showIcon: true } // Large screen and bigger, show label (carried over from md), and icon
    }
  },
  new MockFormAction() as any
);

const actions = ref([saveAction, deleteAction, cancelAction]);

// Get current breakpoint
const display = useDisplay();
const currentBreakpoint = computed(() => {
  if (display.xlAndUp.value) return 'xl (Extra Large)';
  if (display.lgAndUp.value) return 'lg (Large)';
  if (display.mdAndUp.value) return 'md (Medium)';
  if (display.smAndUp.value) return 'sm (Small)';
  return 'xs (Extra Small)';
});
</script>

<style scoped>
.actions-demo {
  /* background-color: #f5f5f5; */
  border: .2em solid #ccc;
  border-radius: 1em;
}

.actions-container {
  border: .1em dashed #ccc;
  padding: 1em;
  border-radius: .5em;
  /* background-color: white; */
}
</style>
