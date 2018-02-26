const jsonData = require('../team.json');
import { PersonInterface } from './interfaces/Person';

export const shufflearray = (array: Array<object>) => array.sort(() => .5 - Math.random());

export const selectFirstFive = (array: Array<object>) => array.slice(0, 5);

// Method to select new racers when game is reset
export const selectNewRacers = () => {
    const shuffleArray: Array<object> = shufflearray(jsonData);
    const newRandoms: Array<object> = selectFirstFive(shuffleArray);
    
    return newRandoms.map((person: PersonInterface, i: number) => (
        { login: person.login, avatar_url: person.avatar_url, complete: false, color: '#E57373' }
    ));
};