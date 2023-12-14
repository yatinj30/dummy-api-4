const { promises: fs } = require("fs");

const fileData = require('./test.json');

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

async function main() {
    // console.log(fileData.mainScreenContent.mainListView);

    // const newJson = 
    // await fs.writeFile("test2.json", readme);

    fileData.mainScreenContent.mainListView.forEach((item) => {
        if (item.isShuffle) {
            let data = item.songs
            shuffle(data);
            console.log("-------");
            console.log(JSON.stringify(data));
        }
    });

    // const newJson = 
    await fs.writeFile("test.json", JSON.stringify(fileData));
}

main(); 