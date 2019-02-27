import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Introduction from '@/components/Introduction'
import Biography from '@/components/Biography'
import Qualification from '@/components/Qualification'
import Skill from '@/components/skill'
import Productions from '@/components/Productions'
import Contact from '@/components/Contact'
import Hobby from '@/components/hobby'
import SelfAnalysis from '@/components/SelfAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/Biography',
      name: 'Biography',
      component: Biography
    },
    {
      path: '/Qualification',
      name: 'Qualification',
      component: Qualification
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Productions',
      name: 'Productions',
      component: Productions
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Hobby',
      name: 'Hobby',
      component: Hobby
    },
    {
      path: '/SelfAnalysis',
      name: 'SelfAnalysis',
      component: SelfAnalysis
    }
  ]
})
