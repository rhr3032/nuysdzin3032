// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	srcDark: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle:
		'NUYsDZ!N | UI/UX Design Agency — Crafting Digital Experiences That Convert',
	siteDescription:
		'NUYsDZ!N is a premium UI/UX design agency specializing in user-centered design, web & mobile interfaces, design systems, and conversion-focused digital experiences.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo-light.svg',
		srcDark: '/logo-dark.svg',
		alt: 'NUYsDZ!N logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
