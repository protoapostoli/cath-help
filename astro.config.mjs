import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://help.catholicoffice.com',
	integrations: [
		starlight({
			title: 'Catholic Office',
			favicon: '/images/company.ico',
			logo: {
				src: './src/assets/logo_new.png',
			  },
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides & How To\'s',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Master Calendar', autogenerate: { directory: '/guides/master_calendar' }, },
					],
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Back to the App',
					link: 'https://catholicoffice.com/dashboard',
				},
			],
		}),
	],
});
