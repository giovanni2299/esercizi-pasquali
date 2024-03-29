//ESERCIZIO VUE
//CREARE UN CONVERTITORE DI VALUTA 


const { createApp } = Vue

createApp({
data() {
    return {
    userInput: '',
    convert:'',
    currency:''
    }
    
},
mounted(){
    
    
},
methods:{
    click(){
        const select = document.querySelector('#valuta').value;
        let otherCurrency;
        if(select === 'dollari'){
            otherCurrency = 1.08
            this.currency = '$'
        } else if(select === 'sterline'){
            otherCurrency = 0.85
           this.currency = '£'
        }
        this.convert = (this.userInput * otherCurrency).toFixed(2)
        this.userInput = ''
    }
}
}).mount('#app')



