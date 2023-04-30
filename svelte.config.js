import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: 'index.html',
			precompress: true
		}),
	}
};
export default config;
