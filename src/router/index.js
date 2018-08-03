import About from '@/views/pages/About';
import Classes from '@/views/pages/Classes';
import Coaches from '@/views/pages/Coaches';
import Workouts from '@/views/pages/Workouts';
import Vue from 'vue';
import Router from 'vue-router';

/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
/*
    Extends Vue to use Vue Router
*/
Vue.use(Router);

/*
    Makes a new VueRouter that we will use to run all of the routes
    for the app.
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: Workouts
    },
    {
      path: '/classes',
      name: 'classes',
      component: Classes
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: Coaches
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
