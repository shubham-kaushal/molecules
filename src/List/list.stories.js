import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import List from './index';

const stories = storiesOf('List', module);

stories.addDecorator(withKnobs);

stories.add('ul default', () => (
	<Theme>
		<List { ...getKnobs() }>
			<li>{ text('Item 1', 'Item 1') }</li>
			<li>{ text('Item 2', 'Item 2') }</li>
			<li>{ text('Item 3', 'Item 3') }</li>
			<li>{ text('Item 4', 'Item 4') }</li>
		</List>
	</Theme>
));

stories.add('ul circle', () => (
	<Theme>
		<List { ...getKnobs({ 'list-style-type': 'circle' }) }>
			<li>{ text('Item 1', 'Item 1') }</li>
			<li>{ text('Item 2', 'Item 2') }</li>
			<li>{ text('Item 3', 'Item 3') }</li>
			<li>{ text('Item 4', 'Item 4') }</li>
		</List>
	</Theme>
));

stories.add('ol default', () => (
	<Theme>
		<List { ...getKnobs({ as: 'ol' }) }>
			<li>{ text('Item 1', 'Item 1') }</li>
			<li>{ text('Item 2', 'Item 2') }</li>
			<li>{ text('Item 3', 'Item 3') }</li>
			<li>{ text('Item 4', 'Item 4') }</li>
		</List>
	</Theme>
));

stories.add('ol latin', () => (
	<Theme>
		<List { ...getKnobs({ as: 'ol', 'list-style-type': 'lower-latin' }) }>
			<li>{ text('Item 1', 'Item 1') }</li>
			<li>{ text('Item 2', 'Item 2') }</li>
			<li>{ text('Item 3', 'Item 3') }</li>
			<li>{ text('Item 4', 'Item 4') }</li>
		</List>
	</Theme>
));
