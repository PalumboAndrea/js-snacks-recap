/*
Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo
ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence)
aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer.
*/

const { createApp } = Vue;

createApp({
    data()  {
        return {

            userIput: '',
            userMessage: '',
            messages: [],
        }
    },
    methods: {
        addNewMessage() {
            this.userMessage = this.userIput;
            this.messages.push(
                {
                    message: this.userMessage,
                    status: 'user'
                });
            this.userIput = '';
          
            setTimeout(this.APIMessage, 1000);
            
        },
        APIMessage(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then( (response) => {
                this.messages.push(
                    {
                        message: response.data.response,
                        status: 'computer',
                    }
                );
                })
        }
    },
    created(){
        
    }
}).mount('#app')

