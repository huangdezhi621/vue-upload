import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import devUploadUse from '@/dev/dev-upload'
import testUploadUse from '@/test/test-upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testUploadUse',
      component: testUploadUse
    },{
      path: '/dev-upload-use',
      name: 'devUploadUse',
      component: devUploadUse
    },{
      path: '/test-upload-use',
      name: 'testUploadUse',
      component: testUploadUse
    }
  ]
})
