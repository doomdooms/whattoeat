// Menu objects
const chinese = {
    name : 'Chinese Food\n',
    description: 'Crispy, hearty Chinese food',
    img_src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?w968h681',
    dead: false
};
const japanese = {
    name: 'Japanese Food\n',
    description: 'Something light while treating yourself.',
    img_src: 'https://www.dailyscandinavian.com/wp-content/uploads/2017/03/210317-sushi-in-oslo.jpg',
    dead: false
};
const thai = {
    name: 'Thai Food\n',
    description: 'Fresh cilantro, fish sauce, ... Mmm!',
    img_src: 'https://www.recipetineats.com/wp-content/uploads/2018/05/Chicken-Pad-Thai_0.jpg',
    dead: false
};
const italian = {
    name: 'Italian Food\n',
    description: "His palms are sweaty, knees weak, Mom's spaghetti.",
    img_src: 'https://www.gimmesomeoven.com/wp-content/uploads/2015/10/Shrimp-Pasta-with-Spicy-Creamy-Tomato-Sauce-1.jpg',
    dead: false
};
const mexican = {
    name: 'Mexican Food\n',
    description: "What's today's menu? Wanna 'taco' bout it?",
    img_src: 'https://s3-us-east-2.amazonaws.com/thesaltymarshmallow/wp-content/uploads/2017/07/11121916/crockpot-taco-meat.jpg',
    dead: false
};
const american = {
    name: 'American Food\n',
    description: "Good ol' 'Murican cuisine",
    img_src:'https://img.taste.com.au/PtiuQI5j/w720-h480-cfill-q80/taste/2017/02/classic_american_grilled-cheeseburger_1980x1320-121130-1.jpg',
    dead: false
};
const coffee = {
    name: "Coffee and light meal\n",
    description: "Coffee is the one true love.",
    img_src: 'https://mona.net.au/resize/width/1000/media/37385/museum-cafe-coffee-mona-01.jpg',
    dead: false
};
const joker = {
    name: "Wildcard!\n",
    description: "I'll wait for the surprise.",
    img_src: 'https://media.istockphoto.com/photos/joker-on-vintage-playing-card-picture-id476210148?k=6&m=476210148&s=612x612&w=0&h=k8D6iWp5wcqRJ_P0NMgrzHgpWSsEZlNZ8l7dCJ6vG6Q=',
    dead: false
};

let menus = [chinese, italian, japanese, thai, joker, mexican, american, coffee ];
let quartF = [];
let final = [];
let currentCard = [0,1];
let roundNum = 0;
const numlineup = [0,1,2,3,4,5,6,7,0,1,2,3,0,1];



setCard(0,1);

document.getElementById('option-0').addEventListener('click', function () {
    console.log(roundNum);


    if (roundNum <= 4) {
        quartF.push(menus[currentCard[0]]);
    } else if (roundNum <= 6) {
        final.push(quartF[currentCard[0]]);
    }
    console.log('QF='+quartF);
    console.log('F='+final);


    let a = numlineup[roundNum*2];
    let b = numlineup[roundNum*2+1];


    setCard(a,b);
    currentCard = [a,b];
    roundNum++;

});

document.getElementById('option-1').addEventListener('click', function () {


    console.log(roundNum);


    if (roundNum <= 4) {
        quartF.push(menus[currentCard[1]]);
    } else if (roundNum <= 6) {
        final.push(quartF[currentCard[1]]);
    }
    console.log('QF='+quartF);
    console.log('F='+final);


    let a = numlineup[roundNum*2];
    let b = numlineup[roundNum*2+1];


    setCard(a,b);
    currentCard = [a,b];
    roundNum++;

});

function init() {
    for (let i = 0; i < menus.length; i++) {
        menus[i].dead = false;
    }
}

function setCard(a,b) {
    if (roundNum <= 4) {
        document.getElementById('title0').textContent = menus[a].name;
        document.getElementById('title1').textContent = menus[b].name;
        document.getElementById('text0').textContent = menus[a].description;
        document.getElementById('text1').textContent = menus[b].description;
        document.getElementById('wrapper0').style.background = 'url(' + menus[a].img_src + ')';
        document.getElementById('wrapper1').style.background = 'url(' + menus[b].img_src + ')';
    } else if (roundNum <= 6) {
        document.getElementById('title0').textContent = quartF[a].name;
        document.getElementById('title1').textContent = quartF[b].name;
        document.getElementById('text0').textContent = quartF[a].description;
        document.getElementById('text1').textContent = quartF[b].description;
        document.getElementById('wrapper0').style.background = 'url(' + quartF[a].img_src + ')';
        document.getElementById('wrapper1').style.background = 'url(' + quartF[b].img_src + ')';
    } else {
        document.getElementById('title0').textContent = final[a].name;
        document.getElementById('title1').textContent = final[b].name;
        document.getElementById('text0').textContent = final[a].description;
        document.getElementById('text1').textContent = final[b].description;
        document.getElementById('wrapper0').style.background = 'url(' + final[a].img_src + ')';
        document.getElementById('wrapper1').style.background = 'url(' + final[b].img_src + ')';
    }
}

