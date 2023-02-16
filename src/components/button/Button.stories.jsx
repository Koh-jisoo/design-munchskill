import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Component | Button',
	component: [Button, IconButton],
	argTypes: {
		label: {
			control: {
				type: 'text',
				options: 'BUTTON'
			}
		},
		theme: {
			control: {
				type: 'radio',
				options: [
					'grey',
					'blue',
					'borderGrey',
					'borderBlue'
				]
			}
		},
		size: {
			control: {
				type: 'radio',
				options: [
					'small',
					'medium'
				]
			}
		},
		width: {
			control: {
				type: 'text',
			}
		},
		isDisabled: {
			control: 'boolean'
		},
		color: {
			control: {
				type: 'color',
				presetColors: ['#2e3338', '#3294ee']
			}
		},
		radius: {
			control: {
				type: 'number',
			}
		},
		border: {
			control: {
				type: 'text'
			}
		},
		frontIcon: {
			control: {
				type: 'file',
			}
		},
		backIcon: {
			control: {
				type: 'file',
			}
		}
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} onClick={action('onClick')} />;

// export const Primary = (args) => <Button {...args} onClick={action('onClick')}></Button>;
export const Primary = Template.bind({});
Primary.args = {
	label: 'Button',
	size: 'small',
	theme: 'grey',
	width: 'auto',
	radius: 4,
};

const IconTemplate = (args) => <IconButton {...args} onClick={action('onClick')} />;
export const Icon = IconTemplate.bind({});
Icon.args = {
	size: 'small',
	theme: 'grey',
	radius: 32,
}
