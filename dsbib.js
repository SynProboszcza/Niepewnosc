//dsbib.js wersja 1.5
function poID(id){
	//skrót do tego poniżej
	return document.getElementById(id);}
function zmienObrazNa(src,id){
	//zmienia źródło elementu znajdując go po ID
	poID(id).src=src;}
function nadpisz(text,id){
	//nadpisuje HTML danego elementu znajdując go po ID
	poID(id).innerHTML=text;}
function dopisz(text,id){
	//dopisuje do HTMLa danego elementu znajdując go po ID
	poID(id).innerHTML+=text;}
function nazwaDniaTygodnia(int){
	//przyjmuje liczbę i zwraca dany dzień tygodnia jako string
	switch(int){
		case 0:
		return 'niedziela';
		break;
		case 1:
		return 'poniedziałek';
		break;
		case 2:
		return 'wtorek';
		break;
		case 3:
		return 'środa';
		break;
		case 4:
		return 'czwartek';
		break;
		case 5:
		return 'piątek';
		break;
		case 6:
		return 'sobota';
		break;
	}}
function nazwaMiesiaca(int){	
	//przyjmuje liczbę i zwraca dany miesiąc jako string
	switch(int){
		case 0:
		return 'stycznia';
		break;
		case 1:
		return 'lutego';
		break;
		case 2:
		return 'marca';
		break;
		case 3:
		return 'kwietnia';
		break;
		case 4:
		return 'maja';
		break;
		case 5:
		return 'czerwca';
		break;
		case 6:
		return 'lipca';
		break;
		case 7:
		return 'sierpnia';
		break;
		case 8:
		return 'września';
		break;
		case 9:
		return 'października';
		break;
		case 10:
		return 'listopada';
		break;
		case 11:
		return 'grudnia';
		break;
	}}
String.prototype.pierwszaDuza = function(){
	/*
	let lmao='tekst';
	lmao.pierwszaDuza();
	console.log(lmao);//Tekst
	*/
	return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();}
function losuj(min,max){
	//może wylosować wartosci brzegowe
	//tylko int, float jest zaokrąglany w dół
	return Math.floor(Math.random()*(max-min+1)+min);}
function czasHMS(){
	//zwraca czas w formacie hh:mm:ss
	let teraz = new Date();
	let godziny = teraz.getHours();
	let minuty = teraz.getMinutes();
	let sekundy = teraz.getSeconds();
	if(godziny<10){
		godziny='0'+godziny.toString()
	}
	if(minuty<10){
		minuty='0'+minuty.toString()
	}
	if(sekundy<10){
		sekundy='0'+sekundy.toString()
	}
	return godziny+':'+minuty+':'+sekundy}
console.log("dsbib.js v1.5 zainicjalizowane");
/*
Changelog:
nwm.2:
	Dodano komentarze;
	Dodano changelog;
	Zmieniono kolejność deklarowanych funkcji tak, aby lepiej utylizować poID();
	Naprawiono czasHMS() - teraz zwraca godzinę w formacie HH:MM:SS a nie H:M:S;
	Dodano przykład przy pierwszaDuza();
nwm.3:
	Od teraz podczas używania biblioteki pokazuje ona swą obecność w konsoli i pokazuje aktualną wersję;
nwm.4:
	Usunięto opcję pauza(), ponieważ nie była bezpieczna i nie działała w zamierzony sposób. Zamiast tego powinno używać się setTimeout(); //setTimeout(function(){ alert("Hello"); }, 3000);
1.5:
	Dodano jako repozytorium na GitHub, dobrze
	Zmieniono nazewnictwo wersji
	Zmieniono nazewnictwo komend: nazwa_dnia_tygodnia(liczba) i nazwa_miesiaca(liczba) opdowiednio na nazwaDniaTygodznia(int) i nazwaMiesiaca(int)
	
*/