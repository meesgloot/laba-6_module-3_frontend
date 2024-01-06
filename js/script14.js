const App = Vue.createApp({

});
App.component('box',{
    
    data(){
        return{
         
        }
    },
   template:`
        <div>
           <slot>
                Что я люблю кушать:
                <ul>
                    <li>пироженки</li>
                    <li>конфетки</li>
                    <li>тортики</li>
                </ul>
           </slot>        
                        
        </div>`

    ,
    methods:{
    
    }
});
App.mount('#field')
