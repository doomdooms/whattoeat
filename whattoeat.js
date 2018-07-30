// Menu objects
const chinese = {
    name : 'Chinese Food',
    description: 'Crispy, hearty Chinese food',
    img_src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?w968h681',
    dead: false
};
const japanese = {
    name: 'Japanese Food',
    description: 'Something light while treating yourself.',
    img_src: 'https://www.dailyscandinavian.com/wp-content/uploads/2017/03/210317-sushi-in-oslo.jpg',
    dead: false
};
const thai = {
    name: 'Thai Food',
    description: 'Fresh cilantro, fish sauce, ... Mmm!',
    img_src: 'https://www.recipetineats.com/wp-content/uploads/2018/05/Chicken-Pad-Thai_0.jpg',
    dead: false
};
const italian = {
    name: 'Italian Food',
    description: "His palms are sweaty, knees weak, Mom's spaghetti.",
    img_src: 'https://www.gimmesomeoven.com/wp-content/uploads/2015/10/Shrimp-Pasta-with-Spicy-Creamy-Tomato-Sauce-1.jpg',
    dead: false
};
const mexican = {
    name: 'Mexican Food',
    description: "What's today's menu? Wanna 'taco' bout it?",
    img_src: 'https://s3-us-east-2.amazonaws.com/thesaltymarshmallow/wp-content/uploads/2017/07/11121916/crockpot-taco-meat.jpg',
    dead: false
};
const american = {
    name: 'American Food',
    description: "Good ol' 'Murican cuisine",
    img_src:'https://img.taste.com.au/PtiuQI5j/w720-h480-cfill-q80/taste/2017/02/classic_american_grilled-cheeseburger_1980x1320-121130-1.jpg',
    dead: false
};
const coffee = {
    name: "Coffee and light meal",
    description: "Coffee is the one true love?",
    img_src: 'https://mona.net.au/resize/width/1000/media/37385/museum-cafe-coffee-mona-01.jpg',
    dead: false
};
const joker = {
    name: "Wildcard!",
    description: "I'll wait for the surprise.",
    img_src: 'https://media.istockphoto.com/photos/joker-on-vintage-playing-card-picture-id476210148?k=6&m=476210148&s=612x612&w=0&h=k8D6iWp5wcqRJ_P0NMgrzHgpWSsEZlNZ8l7dCJ6vG6Q=',
    dead: false
};

let menus = [chinese, italian, japanese, thai, joker, mexican, american, coffee ];


setCard();

function setCard() {
    document.getElementById('title0').textContent = menus[0].name;
    document.getElementById('title1').textContent = menus[1].name;
    document.getElementById('text0').textContent = menus[0].description;
    document.getElementById('text1').textContent = menus[1].description;
    document.getElementById('wrapper0').style.background= 'url('+menus[0].img_src+')';
    document.getElementById('wrapper1').style.background= 'url('+menus[1].img_src+')'
}
function randNum() {
    let num1 = Math.floor(Math.random()) * menus.length;
    let num2 = Math.floor(Math.random()) * menus.length;
    while (num1 === num2) {
        num2 = Math.floor(Math.random()) * menus.length;
    }
    return [num1, num2]
}

