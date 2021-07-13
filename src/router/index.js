import { createRouter, createWebHistory } from 'vue-router';

let routes = [
	{
		path: '/',
		component: () => import('src/view/Home/index.vue'),
	},
	{
		path: '/:notfound(.*)?',
		component: () => import('src/view/Not/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to, from, savedPosition) => ({ top: 0 }),
});

export default router;
