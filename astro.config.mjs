// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astra',
			social: {
				github: 'https://github.com/astracompiler',
			},
			sidebar: [
				{
					label: 'CLI',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'cli/introduction' },
						{ label: 'Installation', slug: 'cli/installation' },
					],
				},
			],
		}),
	],
});
