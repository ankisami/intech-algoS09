const critics = {
    'Lisa Rose': {
        'Lady in the Water': 2.5,
        'Snakes on a Plane': 3.5,
        'Just My Luck': 3.0,
        'Superman Returns': 3.5,
        'You, Me and Dupree': 2.5,
        'The Night Listener': 3.0
    },
    'Gene Seymour': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 3.5,
        'Just My Luck': 1.5,
        'Superman Returns': 5.0,
        'The Night Listener': 3.0,
        'You, Me and Dupree': 3.5
    },
    'Michael Phillips': {
        'Lady in the Water': 2.5,
        'Snakes on a Plane': 3.0,
        'Superman Returns': 3.5,
        'The Night Listener': 4.0
    },
    'Claudia Puig': {
        'Snakes on a Plane': 3.5,
        'Just My Luck': 3.0,
        'The Night Listener': 4.5,
        'Superman Returns': 4.0,
        'You, Me and Dupree': 2.5
    },
    'Mick LaSalle': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 4.0,
        'Just My Luck': 2.0,
        'Superman Returns': 3.0,
        'The Night Listener': 3.0,
        'You, Me and Dupree': 2.0
    },
    'Jack Matthews': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 4.0,
        'The Night Listener': 3.0,
        'Superman Returns': 5.0,
        'You, Me and Dupree': 3.5
    },
    'Toby': { 'Snakes on a Plane': 4.5, 'You, Me and Dupree': 1.0, 'Superman Returns': 4.0 }
}


const findCommunFilms = (allFilms, person1, person2) => {
    const commonFilms = [];

    for (const p1 in allFilms[person1]) {
        for (const p2 in allFilms[person2]) {
            if (p1 === p2) commonFilms.push(p1)
        }
    }
    console.log("function commonFilms", commonFilms)
    return commonFilms;
}

const algo1 = (allFilms, person1, person2) => {
    const commonFilms = findCommunFilms(allFilms, person1, person2)

    let somme = 0;
    commonFilms.map((item) => {

        somme += Math.pow((allFilms[person1][item] - allFilms[person2][item]), 2)
        console.log(allFilms[person1][item], " - ", allFilms[person2][item], " = ", somme)
    })
    somme = Math.sqrt(somme)
    console.log("somme", somme)

    const normalization = 1 / (1 + somme)
    console.log("Function algo1 : normalization", normalization)
    return normalization;
}



const algo2 = (allFilms, person1, person2) => {
    const commonFilms = findCommunFilms(allFilms, person1, person2);

    let length = commonFilms.length;
    let sommeFilms = 0;
    let sommeX = 0;
    let sommeXsup = 0;
    let sommeY = 0;
    let sommeYsup = 0;
    commonFilms.map((film) => { sommeFilms += allFilms[person1][film] * allFilms[person2][film] })
    console.log(sommeFilms)

    commonFilms.map(film => sommeX += allFilms[person1][film]);
    commonFilms.map(film => sommeY += allFilms[person2][film]);
    commonFilms.map(film => sommeXsup += Math.pow(allFilms[person1][film], 2));
    commonFilms.map(film => sommeYsup += Math.pow(allFilms[person2][film], 2));
    console.log("length ", length);
    console.log("sommeFilms", sommeFilms);
    console.log("sommeX", sommeX);
    console.log("sommeXsup", sommeXsup);
    console.log("sommeY", sommeY);
    console.log("sommeYsup", sommeYsup);

    const lignSup = length * (sommeFilms) - (sommeX * sommeY);
    console.log("lignSup", lignSup);

    const lignInf = Math.sqrt((length * sommeXsup - (Math.pow(sommeX, 2))) * (length * sommeYsup - (Math.pow(sommeY, 2))))
    console.log("lignInf", lignInf);

    const result = lignSup / lignInf;
    console.log("Function algo2 : ", result);

}


// algo1(critics, 'Lisa Rose', 'Gene Seymour');
algo2(critics, 'Lisa Rose', 'Gene Seymour');