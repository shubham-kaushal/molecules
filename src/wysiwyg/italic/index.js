import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsItalic };

const config = {
	name: 'I',
	description: {
		en: 'Italic text',
		ru: 'Наклонный текст',
	},
	propInfo: {},
};

export const Em = atomize.em(config, defaults);
export const I = atomize.i(config, defaults);
