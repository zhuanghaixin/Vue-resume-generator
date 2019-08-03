
Vue.component('editable-span', {
    props:['value'],
    template: `
        <span style="border:1px solid red" class="editableSpan">
            <span v-show="!editing">{{value}}</span>
            <input v-show="editing"  @input="triggerEdit"></input>
            <button @click="editing=!editing ">编辑</button>
        </span>

        `,
    data() {
        return {
            editing: false
        }

    },
    methods:{
        triggerEdit(e){
            this.$emit('edit',event.target.value)
        }

    }
})


