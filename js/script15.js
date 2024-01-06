const app = Vue.createApp({

});
app.component('ooo',{
    data(){
        return{
            users:[
            {firstname:'ivan', lastname: 'kuleshov', age: 23},
            {firstname:'aleks', lastname: 'korsky', age: 15},
            {firstname:'maks', lastname: 'popov', age: 54},
            ]
        }
    },
    template:`
        <div>
            <p v-for="user in users">
            <slot name="userdaetails" :userinfo="user"></slot>
            </p>
        </div>
    `
    // v-for="x in users" :key="x.name" :name="x.firstname" :last="x.lastname" :years="x.age"
});
app.mount('#flat')
