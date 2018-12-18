import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts';
import RobotHeads from '../parts/RobotHeads';
import RobotArms from '../parts/RobotArms';
import RobotTorsos from '../parts/RobotTorsos';
import RobotBases from '../parts/RobotBases';
import SidebarStandard from '../sidebars/SidebarStandard';
import SidebarBuild from '../sidebars/SidebarBuild';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      }
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      }
    },
    {
      path: '/parts/browse',
      name: 'Browse',
      component: BrowseParts,
      children:[
        {
          name: 'RobotHeads',
          path: 'heads',
          component: RobotHeads
        },
        {
          name: 'RobotArms',
          path: 'arms',
          component: RobotArms
        },
        {
          name: 'RobotTorsos',
          path: 'torsos',
          component: RobotTorsos
        },
        {
          name: 'RobotBases',
          path: 'bases',
          component: RobotBases
        }
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter( to , from , next ) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      }
    },
  ],
});
