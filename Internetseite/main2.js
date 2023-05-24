import data from './rezepte.json' assert { type: 'json' };
let rezepte = data;
const element1 = document.getElementById('container');
let rezepte2 = rezepte['rezepte'].length;
let searchedrezept;
for (let i = 0; i < rezepte2; i++) {
	if (localStorage.getItem('rezept') == rezepte['rezepte'][i]['Name']) {
		searchedrezept = i;
	}
}
element1.innerHTML += '<h1 class="überschrift">' + rezepte['rezepte'][searchedrezept]['Name'] + '</h1>';
element1.innerHTML +=
	'<img class="cover" src="' + rezepte['rezepte'][searchedrezept]['Cover'] + '">';

element1.innerHTML += '<p class="zubereitung">' + rezepte['rezepte'][searchedrezept]['Zubereitung'] + '</p>';
element1.innerHTML += '<p class="zutaten">' + rezepte['rezepte'][searchedrezept]['Zutaten'] + '</p>';

