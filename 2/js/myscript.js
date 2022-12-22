
/*
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto,
altrimenti di accesso negato.
*/

const { createApp } = Vue;

createApp({
    data()  {
        return {
            invitati: [],
        }
    },
    methods: {
        getNumber(){
            for (i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then( (response) => {
                    invitato = response.data.response.toLowerCase()
                    this.invitati.push(invitato)
                })
            }
            console.log(this.invitati)
        },
        askForName(){
            const userName = prompt('scrivi il tuo nome').toLowerCase();
            if(this.invitati.includes(userName)){
                alert('Benvenuto')
            } else {
                alert('Vai via!!')
            }
        }
    },
    created(){
        
    }
}).mount('#app')

