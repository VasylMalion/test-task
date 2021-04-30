const obj = {
    cap:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        sausage: 2,
        mashroom: 3,
        cheese: 1,
    },
    onions:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        meat: 1,
        cheese: 1,
    },
    king_one:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        mayo: 1,
        mashroom: 3,
        tomato: 2,
        cheese: 3,
        dill: 2,
        parsley: 2
    },
    gavay:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        ananas: 1,
        cheese: 2,
    },
    tonno:{
        dough: 1,
        tomato_sauce: 1,
        tuna: 2,
        kappers: 1,
        cheese: 1,
    },
    vegeterian:{
        dough: 1,
        tomato_sauce: 1,
        tomato: 2,
        kappers: 1,
        cucumber: 2,
        onion: 2,
        cheese: 1,
    }
}

export const getPizzaInfo = arr => {
    let objPopular = {};
    let objIngridients = {};

    let arrPopular = [];
    let arrIngridients = [];

    for (let i = 0; i < arr.length; i++) {
        objPopular[arr[i]] = 1 + (objPopular[arr[i]] || 0);
    }

    for (let key in objPopular) {
        arrPopular.push(key);
    }

    let sortArr = arrPopular.sort( (a, b) => objPopular[b] - objPopular[a]).slice(0, 5);

    for (let i = 0; i < sortArr.length; i++) {
        for (let key in obj[sortArr[i]]){
            if (objIngridients.hasOwnProperty(key)) {
                objIngridients[key] = objIngridients[key] + obj[sortArr[i]][key];
                continue;
            }
            objIngridients[key] = obj[sortArr[i]][key];
        }
    }

    for (let key in objIngridients) {
        arrIngridients.push(key);
    }

    return {
        popular: sortArr,
        ingridients: arrIngridients.sort( (a, b) => objIngridients[b] - objIngridients[a])
    }
}

console.log(getPizzaInfo(['cap','cap','onions','gavay','cap', 'tonno','vegeterian', 'king_one']))
