// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { METHODS } from 'http';
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
// })


//#####计算属性缓存对比方法 （computed 对比 methods）

// var vm = new Vue({
//   el: '#app',
//   data:{
//     message:"Hello World!"
//   },
//   computed: {
//     reversedMessage: function () {
//       return this.message.split('').reverse().join('')
//     }
//   },
// })

// console.log(vm.reversedMessage)

// vm.message = 'Goodbye'

// console.log(vm.reversedMessage)


// var vm = new Vue({
//   el: '#app',
//   data: {
//     message: "Hello World!"
//   },
//   methods: {
//     reversedMessage:function () {
//       return this.message.split('').reverse().join('')
//     }
//   }
// })


//####计算属性对比侦听属性（computed 对比 watch）

// var vm = new Vue ({
//   el: '#app',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar',
//     fullName: 'Foo Bar'
//   },
//   watch: {
//     firstName: function (val) {
//       this.fullName = val + ' ' + this.lastName
//     },
//     lastName: function (val) {
//       this.fullName = this.firstName + ' ' + val
//     }
//   }
// })

// var vm = new Vue ({
//   el: '#app',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
// })


//###计算属性的setter
// var vm = new Vue({
//   el: '#app',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: {
//       //getter
//       get: function () {
//         console.log(this)
//         return this.firstName + ' ' + this.lastName
//       },
//       set: function (newValue) {
//         var names = newValue.split(' ')
//         this.firstName = names[0]
//         this.lastName = names[names.length - 1]
//       }
//     }
//   }
// })

//#####侦听

// import axios from "axios"
// import lodash from "lodash"

// var vm = new Vue ({
//   el: '#app',
//   data: {
//     question: '',
//     answer: " I Can't give you an answer until you ask a question! "
//   },
//   watch: {
//     question: function (newQuestion, oldQuestion) {
//       this.answer = "Waiting for you to stop typing ... "
//       this.debouncedGetAnswer()
//     }
//   },
//   created: function () {

//     // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
//     // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
//     // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
//     // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
//     // 请参考：https://lodash.com/docs#debounce

//     this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
//   },qqqqqqqq
//   methods: {
//    getAnswer: function () {
//      if (this.question.indexOf('?') === -1){
//        this.answer = 'Questions usually contain a question mark.  ;-)'
//        return
//      }
//      this.answer = 'Thinking...'
//      var vm = this
//       axios.get('https://yesno.wtf/api')
//       .then(function(response){
//         vm.answer = _.capitalize(response.data.answer)
//       })
//       .catch(function (error) {
//         vm.answer = "Error! Could not reach the API." + error
//       })
//    } 
//   }
// })

// ############# class 与 style 绑定 #############
var vue = new Vue({
  el: '#app',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})