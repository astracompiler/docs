// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			head: [
				{tag: 'script', attrs: {src: 'https://buttons.github.io/buttons.js', defer: true}},
			],
			favicon: '/favicon.svg',
			title: 'Astra',
			social: {
				npm: 'https://www.npmjs.com/package/astra-cli',
				github: 'https://github.com/astracompiler',
			},
			customCss: [
				'./root.css',
			],
			sidebar: [
				{
					label: 'CLI',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'cli/introduction' },
						{ label: 'Installation', slug: 'cli/installation' },
						{ label: 'Usage', slug: 'cli/usage' },
						{ label: 'Commands', slug: 'cli/commands' },
						{ label: 'Configuration', slug: 'cli/configuration' },
						{ label: 'FAQ', slug: 'cli/faq' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/astracompiler/docs/edit/main/',
			},
		}),
	],
});
