
var app = new Vue({
    el: '#app',
    data: {
        resume: {
            avaater: 'zhx.png',
            name: '庄海鑫',
            age: '22',
            job_title: '前端工程师',
            phone: '13604903685',
            weixin: 'zhxzuishuai0515',
            email: '649308293@qq.com',
            github: 'https://github.com/zhuanghaixin',
            website: 'https://zhuanghaixin.cn/',
            jianshu: 'https://www.jianshu.com/u/8e88e609ebe8',
            yuque: 'https://www.yuque.com/zhuanghaixin',
            skill_description: '掌握HTML5/CSS3，熟悉传统布局、Flex布局、Grid布局、移动端适配等',
            skill: 'JavaScript',
            skill_bar: '30%',
            hobby: '画画',
            school_name: '沈阳市第二十七中学',
            major: '软件工程',
            school_date: '09/2015~07/2019',
            school_experience: '辽宁省计算机设计大赛二等奖---《舒乘网》',
            personal_comment: '对前端有着浓厚的兴趣，很喜欢网页界面设计，会经常下载各种app和浏览一些网页，关注产品的用户体验。 未来三年规划，希望自己可以成长为独当一面的以产品为方向的前端工程师 每天学习英语半小时以上，我深知英语对前端的重要性，不论是对新技术的学习还是技术的深挖 会经常写博客总结自己所学。',
            project_name: '基于Vue的UI组件库的设计与实现',
            project_date: '09/2015~07/2019',
            project_description: '该项目的是参考目前流行的前端UI组件库Ant Design,iView进而设计的一款属于自己的组件库，实现了常有组件类型，基础组件，布局组件，导航组件，表单组件，视图组件\n' +
                '                            。项目使用Vue技术栈，组件库文档使用的是VuePress。',
            project_keywords: 'xxxx,xxxx,xxx',
            project_link: 'https://github.com/zhuanghaixin/hisen'

        }
    },
    methods: {
        x(e) {
            console.log(e.target.innerText)
            this.resume.job_title = e.target.innerText
        },
        onEdit(key,value){
            this.resume[key]=value
        }

    }
})
