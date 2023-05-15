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
element1.innerHTML += rezepte['rezepte'][searchedrezept]['Name'];
element1.innerHTML += rezepte['rezepte'][searchedrezept]['Zubereitung'];
element1.innerHTML += rezepte['rezepte'][searchedrezept]['Zutaten'];
element1.innerHTML +=
	'<img src="' + rezepte['rezepte'][searchedrezept]['Cover'] + '">';
