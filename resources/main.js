import App from '@/App.svelte';
import '@/assets/css/main.scss';

const app = new App({
    target: document.getElementById('app'),
    intro: true,
});

export default app;
