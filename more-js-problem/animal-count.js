function animalCount(miles) {
    const animalDesnsityFirst10Miles = 10;
    const animalDesnsitySecond10Miles = 50;
    const animalDesnsityThird10Miles = 20;
    const animalDesnsitylast10Miles = 5;

    if (miles <= 10) {
        const count = miles * animalDesnsityFirst10Miles;
        return count;
    } else if (miles <= 20) {
        const first10Miles = 10 * animalDesnsityFirst10Miles;
        const restMiles = miles - 10;
        const countTest = restMiles * animalDesnsitySecond10Miles;
        const total = first10Miles + countTest;
        return total;
    } else if (miles <= 30) {
        const first10Miles = 10 * animalDesnsityFirst10Miles;
        const first20Miles = 10 * animalDesnsitySecond10Miles;
        const restMiles = miles-20;
        const first30Miles = restMiles* animalDesnsityThird10Miles;
        const total = first10Miles + first20Miles + first30Miles;
        return total;
    }
    else {
        const first10Miles = 10 * animalDesnsityFirst10Miles;
        const first20Miles = 10 * animalDesnsitySecond10Miles;
        const first30Miles = 10 * animalDesnsityThird10Miles;
        const restMiles = miles-30;
        const last = restMiles*animalDesnsitylast10Miles;
        const total = first10Miles+ first20Miles + first30Miles + last;
        return total;
    }
}
const animals = animalCount(40);
console.log(animals);