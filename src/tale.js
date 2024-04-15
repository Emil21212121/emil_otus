function kolobok(characterName) {
    switch (characterName) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Я встретил непонятного персонажа';
    }
}



function newYear(characterName) {
    return `${characterName}! ${characterName}! ${characterName}!`;
}


module.exports = {
    kolobok,
    newYear
};