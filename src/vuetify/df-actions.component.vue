<template>
  <div v-if="actions.length > 0" class="text-end">
    <v-btn
      v-for="(action, idx) in actions"
      :key="idx"
      variant="tonal"
      :elevation="0"
      :class="idx === 0 ? '' : 'ms-3'"
      :size="buttonSize"
      @click.stop="(event: MouseEvent) => action.formAction.execute(event)"
    >
      <IonIcon v-if="displayIcon(action)" class="action-icon" :name="<string> action.formAction.icon"/>
      <span v-if="displayIcon(action) && displayLabel(action)" style="width: .5rem"/>
      <span v-if="displayLabel(action)">{{ labelText(action) }}</span>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IonIcon from 'vue-ionicon';
import { useDisplay } from 'vuetify';

import { Action, BreakpointJSON, BreakpointNames } from '@/core';

interface ActionComponentProps {
  actions: Action[];
  buttonSize: string | number; // see https://vuetifyjs.com/en/api/v-btn/#props-size
}

const props = withDefaults(defineProps<ActionComponentProps>(), { buttonSize: 'default' });

function getBreakpointName(dp: ReturnType<typeof useDisplay>): BreakpointNames {
  if (dp.xlAndUp.value) return 'xl';
  if (dp.lgAndUp.value) return 'lg';
  if (dp.mdAndUp.value) return 'md';
  if (dp.smAndUp.value) return 'sm';
  return 'xs';
}

const display = useDisplay();
const displayStyle = computed(() => {
  const res: Record<string, BreakpointJSON> = {};
  for (const action of props.actions) {
    res[action.name] = action.displayStyle.getOptionsForBreakpoint(getBreakpointName(display));
  }
  return res;
});

/*
function asText(action: Action) {
  return displayStyle.value[action.name].renderAs !== ActionDisplayStyle.BUTTON;
}

function buttonVariant(action: Action) {
  return displayStyle.value[action.name].renderAs === ActionDisplayStyle.BUTTON ? 'info' : 'link';
}
*/

function displayIcon(action: Action): boolean {
  return (displayStyle.value[action.name].showIcon && action.iconAvailable) ?? true;
}

function displayLabel(action: Action): boolean {
  if (displayStyle.value[action.name].showLabel && action.labelAvailable) return true;
  return !displayIcon(action);
}

function labelText(action: Action): string {
  if (action.labelAvailable) return action.formAction.label ?? '';
  return action.name;
}
</script>

<style scoped>
.action-icon {
  width:  1.5em;
  height: 1.5em;
}
</style>
