import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Form from "../components/Form";
import Radio from "../components/Radio";
import Checkbox from "../components/Checkbox";
import Switch from "../components/Switch";
import Select from "../components/Select";
import Cascader from "../components/Cascader";
import Datepicker from "../components/Datepicker";
import Validator from "../components/Validator";
import testform from "../components/testform";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Dialog from "../components/Dialog";




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path: '/layout', component: Layout},
        {path: '/button', component: Button},
        {path: '/icon', component: Icon},
        {path: '/input', component: Input},
        {path: '/form', component: Form},
        {path: '/radio', component: Radio},
        {path: '/checkbox', component: Checkbox},
        {path: '/switch', component: Switch},
        {path: '/select', component: Select},
        {path: '/cascader', component: Cascader},
        {path: '/datepicker', component: Datepicker},
        {path: '/validator', component: Validator},
        {path: '/testform', component: testform},
        {path: '/table', component: Table},
        {path: '/pagination', component: Pagination},
        {path: '/dialog', component: Dialog}
      ]
    }
  ]
})
