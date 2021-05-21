let dan =  {
    datum: `2021/05/18`,
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18,21, 13, 11],
    // 1. Metoda: koja odredjuje prosecnu temperaturu tog dana
    prosecna: function(){
        let sum = 0;
        this.temperature.forEach(temp =>{
            sum+=temp;
        });
        return sum/this.temperature.length;
    },
    // 2. Zadatak Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna:function(){
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach(elem =>{
            if(elem > avg){
                br++;
            }
        });
        return br;
        
    },
    // 3.Zadatak Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna:function(){
        let maks = this.temperature[0];
        this.temperature.forEach(element =>{
            if(maks < element){
                maks = element
            }
        });
        return maks;
    },

    maxTemperatura: function (){
        let max = this.temperature[0];
        let br = 0;
        this.temperature.forEach(element => {
            if(max < element){
                max = element;
                
            }
        });
        this.temperature.forEach(element =>{
            if(max == element){
                br++;
            }
        });
        return br;
    },
    // maksimalna: function(){
    //     let maks = this.temperature[0];
    //     for(let i = 0; i<this.temperature.length; i++){
    //             if(maks < this.temperature[i]){                  /////////////// ovo je sa for etljom 
    //                 maks = this.temperature[i];
    //             }
    //     }
    //     return maks;
    // }
    //4. Zadatak Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    TemperaturaIzmedju: function (tem1, tem2){
        // Da je tem1 < tem2 (ako neko unese da je temp vece od temp 2  tem1= 20 a tem2 = -5 primer treba da zamene mesta)
        // if(tem1 > tem2){
        //     let tmp = tem1
        //     tem1 = tem2
        //     tem2 = tmp;   
//  ili tem1,tem2=tem2,tem1
        // pomocna 
        // }
        // let tem1 = 10;
        // let tem2 = 20;
        let br = 0;
        this.temperature.forEach(element =>{
            if(element > tem1 && element < tem2){
                br++;
            }
        });
        return br;
        
    },
    // 5. Zadatak Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function (){
        let prosek = this.prosecna();
        let iznad =0;
        let ispod =0;
    //     let iznad = this.natprosecna();
    //     let ispod = this.temperature.length - iznad;
    //     if(iznad > ispod){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

        this.temperature.forEach(element =>{
            if(element > prosek){
                iznad++;
            }
            if(element < prosek){
                ispod++;
            }
        });
        if (iznad > ispod){
            return true;
        }
        else {
            return false;
        }
    },
    // 6. Zadatak Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    ledenDan: function(){
        let leden = true; //kada stavimo true ili fals uvek jurimo suprotnu od one koju smo stavili
        this.temperature.forEach(element => {
            if(element > 0){
                leden =  false;
            }
        });
        return leden;
    },
    /* 
    2. nacin
    let leden = true
    for(let i = 0; i < this.temperatura.length; i++){
        if(this.temperature[i]>= 0){
            leden = false;
            break;
        }
        retur leden;
    }
    */
   // 7. Zadatak Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
//    tropska: function(){
//        let tropska = true;
//        this.temperature.forEach(element =>{
//            if(element > 24){
//                return false;
//            }

//        });
//        return tropska;
//    }
tropska: function(){
    let tropska = true;
    for(let i = 0; i < this.temperature.length ; i++){
        if(this.temperature[i] < 24){
            tropska = false;
            
        }
        
    }
    return tropska;
}

};
// 1. Metoda: koja odredjuje prosecnu temperaturu tog dana
console.log(dan.prosecna());
// 2. Zadatak Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());

// 3.Zadatak Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maxTemperatura());
console.log(dan.maksimalna());

//4. Zadatak Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.TemperaturaIzmedju(10,20));
// 5. Zadatak Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.iznadProseka());
// 6. Zadatak Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.ledenDan());
// 7. Zadatak Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropska())
// 8. Zadatak Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

// 9. Zadatak Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.