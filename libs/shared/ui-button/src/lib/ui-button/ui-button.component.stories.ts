import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'Shared-ui/UiButtonComponent',
  argTypes: {
    config: {
      label: 'Submit',
      isDisabled: false,
    },
  },
};
export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
  args: {
    config: {
      label: 'Hello There',
      type: 'submit',
      isDisabled: true,
    },
  },
};

export const Secondary: Story = {
  args: {
    config: {
      label: 'Kapunka',
      type: 'submit',
      isDisabled: false,
    },
  },
};
export const Danger: Story = {
  args: {
    config: {
      label: 'Namaste',
      type: 'submit',
      isDisabled: false,
    },
  },
};
