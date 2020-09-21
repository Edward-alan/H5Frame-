import router from './index';

router.beforeEach((to, from, next) => {
  console.log('router start', new Date().getTime());
  console.log('router to', to);
  console.log('router from', from);
  next();
});

router.afterEach(() => {
  console.log('router end', new Date().getTime());
});
