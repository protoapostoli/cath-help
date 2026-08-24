import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://help.catholicoffice.com',
	server: {
		host: '0.0.0.0'
	  },
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
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Guides & How To\'s',
					items: [
						{ label: 'Sacramental & Event Files', collapsed: false, autogenerate: { directory: 'guides/sacramental_files' } },
						{ label: 'Finance & Accounts Receivable', collapsed: true, autogenerate: { directory: 'guides/finance' } },
						{ label: 'Pastoral Care & Homebound', collapsed: false, autogenerate: { directory: 'guides/pastoral_care' } },
						{ label: 'Liturgy & Mass Intentions', collapsed: true, autogenerate: { directory: 'guides/liturgy' } },
						{ label: 'Parish Tasks (Kanban)', collapsed: true, autogenerate: { directory: 'guides/tasks' } },
						{ label: 'Master Calendar', collapsed: true, autogenerate: { directory: 'guides/master_calendar' } },
						{ label: 'Front Desk & Reception', collapsed: true, autogenerate: { directory: 'guides/reception' } },
						{ label: 'Invites & RSVPs', collapsed: true, autogenerate: { directory: 'guides/rsvp_invites' } },
						{ label: 'Key Log', collapsed: true, autogenerate: { directory: 'guides/keylog' } },
						{ label: 'Communication & Mentions', collapsed: true, autogenerate: { directory: 'guides/communication' } },
						{ label: 'User Accounts & Settings', collapsed: true, autogenerate: { directory: 'guides/accounts' } },
					],
				},
				{
					label: 'FAQs',
					collapsed: true,
					autogenerate: { directory: 'faqs' },
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Back to the App',
					link: 'https://app.catholicoffice.com/dashboard',
				},
			],
		}),
	],
});
