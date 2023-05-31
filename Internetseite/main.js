import data from './rezepte.json' assert { type: 'json' };
let rezepte = data;
const element1 = document.getElementById('zum_Nachkochen');
const element2 = document.getElementById('gesunde_Rezepte');
let rezepte_laenge = rezepte['rezepte'].length;
let zum_Nachkochen = '';
let gesunde_Rezepte = '';
zum_Nachkochen += "<div class='twitch-boxen'>";
gesunde_Rezepte += "<div class='twitch-boxen'>";
for (let i = 0; i < rezepte_laenge; i++) {
	if (rezepte['rezepte'][i]['Kategorie'] == 'zum_Nachkochen') {
		zum_Nachkochen +=
			`<a onclick="setlocalstorage('` +
			rezepte['rezepte'][i]['Name'] +
			`')" href="./rezept.html"><div class="twitch-box"><div class="content">` +
			`<p class="dick">` + rezepte['rezepte'][i]['Name'] + `</p>` +
			`<img src="` +
			rezepte['rezepte'][i]['Cover'] +
			`">` +
			`<p>` +
			rezepte['rezepte'][i]['Beschreibung'] +
			`</div><div class="twitch-border-effect"><div class="top-corner"></div><div class="bottom-corner"></div></div></div></a>`;
	} else if (rezepte['rezepte'][i]['Kategorie'] == 'gesunde_Rezepte') {
		gesunde_Rezepte +=
			`<a onclick="setlocalstorage('` +
			rezepte['rezepte'][i]['Name'] +
			`')"  href="./rezept.html"><div class="twitch-box"><div class="content">` +
			rezepte['rezepte'][i]['Name'] +
			`<img src="` +
			rezepte['rezepte'][i]['Cover'] +
			`">` +
			`<p>` +
			rezepte['rezepte'][i]['Beschreibung'] +
			`</div><div class="twitch-border-effect"><div class="top-corner"></div><div class="bottom-corner"></div></div></div></a>`;
	}
}
zum_Nachkochen += '</div>';
gesunde_Rezepte += '</div>';
element1.innerHTML += zum_Nachkochen;
element2.innerHTML += gesunde_Rezepte;

const hamburger_menu = document.querySelector('.hamburger-menu');

const container = document.querySelector('.container');

hamburger_menu.addEventListener('click', () => {
	container.classList.toggle('active');
});
