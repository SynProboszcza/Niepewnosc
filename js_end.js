window.onload = function(){
	zmienLiczbeRoznic(poID("liczbaNawiasow").value)
	//setTimeout(function(){ zmienLiczbeRoznic(poID("liczbaRoznic").value); }, 100)
}
//to po to zeby bylo na starcie juz cos


let liczba_par = 0
//globalna zeby mozna bylo z niej korzystac w wielu funkcjach

function zmienLiczbeRoznic(n){
	text = ""
	for(liczba_par = 0; liczba_par < n; liczba_par++) {
		text += "(<input type='number' placeholder='x"+liczba_par+"' id='l"+ liczba_par +"''>-<input type='number' placeholder='y"+liczba_par+"' id='r"+ liczba_par +"''>)<sup>2</sup>"
		if(liczba_par != n-1){
			text+="+<br>"
		}
	//li i ri to lewa i prawa z numerkiem
	}
	nadpisz(text,"liczenie")
}


//sqrt((l0-r0)^2+(l1+r1)^2+...+(li-ri)^2)
function policz(){
	id = ""
	suma = 0
	for(let i = 0; i<liczba_par; i++){
		roznica_pary = poID("l"+i).value - poID("r"+i).value
		kwadrat_roznicy = roznica_pary*roznica_pary
		suma += kwadrat_roznicy
	}
	//tutaj mamy sume wszystkich kwadratow
	//dzielimy ja przez dzielnik
	gotowe_n = poID("dzielnik").value*(poID("dzielnik").value-1)
	podzielona_suma = suma/gotowe_n
	pierwiastek_podzielonej_sumy = Math.sqrt(podzielona_suma)
	//wyswietlanie wyniku
	nadpisz(pierwiastek_podzielonej_sumy+"<br>","wynik")
	//wyswietlanie zaokrągleń
	//7 i 3 to tak naprawde ile sie chce zaokrągleń
	for(let i = 7; i>=3; i--){
		zaokrlaganeDoI = pierwiastek_podzielonej_sumy.toFixed(i)+"<br>"
		dopisz(zaokrlaganeDoI,"wynik")
	}



	/*zaokrlaganeDo7 = pierwiastek_podzielonej_sumy.toFixed(7)+"<br>"
	zaokrlaganeDo6 = pierwiastek_podzielonej_sumy.toFixed(6)+"<br>"
	zaokrlaganeDo5 = pierwiastek_podzielonej_sumy.toFixed(5)+"<br>"
	zaokrlaganeDo4 = pierwiastek_podzielonej_sumy.toFixed(4)+"<br>"
	zaokrlaganeDo3 = pierwiastek_podzielonej_sumy.toFixed(3)+"<br>"

	dopisz(zaokrlaganeDo7,"wynik")
	dopisz(zaokrlaganeDo6,"wynik")
	dopisz(zaokrlaganeDo5,"wynik")
	dopisz(zaokrlaganeDo4,"wynik")
	dopisz(zaokrlaganeDo3,"wynik")*/
	//poID("wynik").innerHTML = Math.sqrt(suma)
}

function wypelnijKolumne(ch){
	if(ch=="l") {
		for (let i = 0; i < liczba_par; i++) {
			poID("l"+i).value = poID("doKopiowania").value
		}
	} 
	else if(ch=="r"){
		for (let i = 0; i < liczba_par; i++) {
			poID("r"+i).value = poID("doKopiowania").value
		}
	}
}




//TODO:
// owinąć to w formularz - da to pamiętanie danych
// 		do przemyslenia
// kopiowanie wartosci kolumnami
//		trzeba dodac dwa nowe inputy do tego
// zamienic nazwy w kodzie na angielskie
// kolorki wg Alicji
// bardziej rozwinac instrukcje
// 		strona instrukcji
//* "Policz" niżej
//* mniejsza liczba wynikowa
// nigdy: aktualizacja na bieżąco wzoru
// napisac z jakiego wzoru sie korzysta
//* obrazek ze wzorem
//* żeby zaczynało się z 5 liniami, które są prawidłowo wypełnione id
// ostatnia para bez plusa
// poparować w nawiasy
// kopiowanie wiecej niz jednej wartosci z excela
	//trzeba zparsowac wartosci po znaku nowej linii i taba
	//dodatkowe pole na to by musialo byc

//wzor to nie jest c tylko n(n-1)
// zaokrąglić do x miejsc po przecinku
//przy zmienianiu ilosci nawiasow nie czysc wartosci
//0, zeby dalo sie przekopiowac











