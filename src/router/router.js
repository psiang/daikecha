import Vue from 'vue'
import Router from 'vue-router'
import Project from '../component/project/Project'
import Message from '../component/message/Message'
import Manage from '../component/manage/Manage'
import Person from '../component/person/Person'
import More from '../component/more/More'
import Create from '../component/create/Create'
import imgUpload from '../component/person/imgUpload'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/project',
            name: Project,
            component: Project
        },
        {
            path: '/message',
            name: Message,
            component: Message
        },
        {
            path: '/create',
            name: Create,
            component: Create
        },
        {
            path: '/manage',
            name: Manage,
            component: Manage
        },
        {
            path: '/person',
            name: Person,
            component: Person,
          children: [
            {
              path: '/',
              name: 'imgUpload',
              component: imgUpload
            }
          ]

        },
        {
            path: '/more',
            name: More,
            component: More
        }
    ]
})
