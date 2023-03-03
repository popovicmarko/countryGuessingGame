const app= Vue.createApp({
    data(){
        return {
            gameState: 0,
            ranks: ["GULAG", "WORKER", "PEASENT", "CAPITALIST", "COMRADE"],
            rank: "",
            
            availCountries: [],
            currCountry: {},

            isHintOn: [false, false, false],
            hints: [" ", " ", " "],
            
            text: "",
            currPoints: new Number(),
            imgFlag: "https://flagcdn.com/w320/hk.png",

            counter: 10,
        }
    },
    async created(){
        const res= await fetch("https://restcountries.com/v2/all")
        const data= await res.json()
        this.availCountries= data
        console.log(this.gameState)
    },
    methods: {
        StartGame(){
            this.gameState=1
            this.counter=10
            this.currPoints=0
            this.SelectRandom()
        },

        SetRank(){
            this.rank= this.ranks[Math.floor(this.currPoints/20)]
        },

        SelectRandom(){
            let index= Math.floor(Math.random()*1000)%250
            this.currCountry= this.availCountries[index]
            this.imgFlag= this.currCountry.flags.svg
            this.isHintOn=[false, false, false]
            this.hints[0]= this.currCountry.region
            this.hints[1]= this.currCountry.capital
            this.hints[2]= this.currCountry.name.charAt(0)
            console.log(this.currCountry.name)
        },

        GiveHint(place){
            this.isHintOn[place]=true
            if(this.currPoints!=0)
            this.currPoints--
        },

        CheckAnswer(){
            if(this.text.toLowerCase()==this.currCountry.name.toLowerCase()){
                this.currPoints+=10
            }

            else{
                if(this.currPoints!=0)
                this.currPoints=this.currPoints-5
            }

            this.text=""
            this.SelectRandom()
            this.counter--

            if (this.counter==1)
            {
                this.gameState=2
                this.SetRank()
            }
        },

        Skip(){
            this.SelectRandom()
            this.counter--
            if(this.counter==1)
            {
                this.gameState=2
                this.SetRank()
            }
        },


    },
})

app.mount('#app')

//Dodaci

let helpbuttons= document.querySelectorAll(".HeroHelp")
helpbuttons.forEach((item)=>{
    item.addEventListener("click", e=>{
        item.classList.add("buttonClicked")
    })
})


let navText=document.querySelector("ul")

document.querySelector(".phoneNav").addEventListener("click", e=>{
    navText.classList.toggle("on")
})