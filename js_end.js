window.onload = function(){
	zmienLiczbeRoznic(poID("liczbaNawiasow").value,1)
	//setTimeout(function(){ zmienLiczbeRoznic(poID("liczbaRoznic").value); }, 100)
}
//to po to zeby bylo na starcie juz cos


let liczba_par = poID("liczbaNawiasow").value
//globalna zeby mozna bylo z niej korzystac w wielu funkcjach

function zmienLiczbeRoznic(n,m=0){
	let ile_zmienic = n - liczba_par
	if(m!=0 || Math.abs(ile_zmienic) != 1){
		//te abs() to jest po to ze jak sie wpisze
		//normalnie liczbe to sie psulo
		//te ponizej dzialaja tylko dla zmian wartosci +-1
		//tym samym zakladam ze jak ktos wpisuje recznie
		//ilosc nawiasow to robi to tylko na poczatku
		///0000000000000000000000000000000000000000000000000000000000000000
		let text = ""
		for(liczba_par = 0; liczba_par < n; liczba_par++) {
			text += "(<input type='number' placeholder='x"+liczba_par+"' id='l"+ liczba_par +"''>-<input type='number' placeholder='y"+liczba_par+"' id='r"+ liczba_par +"''>)<sup>2</sup>"
			if(liczba_par != n-1){
				text+="+<br>"
			}
		//li i ri to lewa i prawa z numerkiem
		}
		nadpisz(text,"liczenie")
	}
	//ile_zmienic = ile dodac wierszy, jezeli jest ujemne to sie odejmuje wiersze
	//alert(ile_zmienic)
	//jezeli ile_zmienic > 0 to dopisujemy
	//jezeli ile_zmienic < 0 to nadpisujemy mniej
	//jak = 0 to nic nie robimy to niemożliwe
	//XDXD
	//jest zero jak sie odpala stronke
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	else if(ile_zmienic>0){
		let wartosci = []
		//na parzystych bedzie lewa strona
		//na nieparz. prawa strona
		for(let i = 0; i<liczba_par; i++){
			wartosci.push(poID("l"+i).value)
			wartosci.push(poID("r"+i).value)
		}

		let text = ""
		for(let i = 0; i < ile_zmienic; i++) {
			text += "+(<input type='number' placeholder='x"+liczba_par+"' id='l"+ liczba_par +"''>-<input type='number' placeholder='y"+liczba_par+"' id='r"+ liczba_par +"''>)<sup>2</sup>"
			if(liczba_par != n-1){
				text+="+<br>"
			}
		}

		liczba_par++
		dopisz(text,"liczenie")
		//mimo tego ze jest "dopisz", to i tak nadpisuje
		//a raczej wartosci w inputach w divie sie zeruja nie mam pojecia dlaczego
		//dopisz korzysta z innerHTML += text
		//wiec dopisujemy wartosci po tym i tak
		//odwracamy bo uzywamy push() i to naklada wartosci na wartosci
		//a potem jak chcemy je zdjac w odpowiedniej kolejnosci
		//to trzeba to odwrocic, wtedy pierwszy element zapisany
		//bedzie pierwszym elementem do zabrania
		wartosci = wartosci.reverse()
		for (let i = 0; i < liczba_par; i++) {
			poID("l"+i).value = wartosci.pop()
			poID("r"+i).value = wartosci.pop()
		}
	}
	else if(ile_zmienic<0){
		//---------------------------------------------------------------
		let wartosci = []
		//na parzystych bedzie lewa strona
		//na nieparz. prawa strona
		for(let i = 0; i<liczba_par; i++){
			wartosci.push(poID("l"+i).value)
			wartosci.push(poID("r"+i).value)
		}

		let text = ""
		for(let i = 0; i < liczba_par + ile_zmienic; i++) {
			text += "(<input type='number' placeholder='x"+i+"' id='l"+ i +"''>-<input type='number' placeholder='y"+i+"' id='r"+ i +"''>)<sup>2</sup>"
			if(i != n-1){
				text+="+<br>"
			}
		//li i ri to lewa i prawa z numerkiem
		}
		liczba_par--
		nadpisz(text,"liczenie")

		wartosci = wartosci.reverse()
		for (let i = 0; i < liczba_par; i++) {
			poID("l"+i).value = wartosci.pop()
			poID("r"+i).value = wartosci.pop()
		}


	}

}


//sqrt((l0-r0)^2+(l1+r1)^2+...+(li-ri)^2)
function policz(){
	let id = ""
	let suma = 0
	for(let i = 0; i<liczba_par; i++){
		let roznica_pary = poID("l"+i).value - poID("r"+i).value
		let kwadrat_roznicy = roznica_pary*roznica_pary
		suma += kwadrat_roznicy
	}
	//tutaj mamy sume wszystkich kwadratow
	//dzielimy ja przez dzielnik
	let gotowe_n = poID("dzielnik").value*(poID("dzielnik").value-1)
	let podzielona_suma = suma/gotowe_n
	let pierwiastek_podzielonej_sumy = Math.sqrt(podzielona_suma)
	//wyswietlanie wyniku
	nadpisz(pierwiastek_podzielonej_sumy+"<br>","wynik")
	//wyswietlanie zaokrągleń
	//7 i 3 to tak naprawde ile sie chce zaokrągleń
	for(let i = 7; i>=3; i--){
		let zaokrlaganeDoI = pierwiastek_podzielonej_sumy.toFixed(i)+"<br>"
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

function wypelnijKolumnyExcel(){
	//let wklejone = poID("doParsowaniaExcel").value
	//sprawdzamy czy zostala wklejona jedna kolumna czy dwie
	//jezeli nie ma \t to znaczy ze jest jedna
	if(poID("doParsowaniaExcel").value.search("\t")==(-1)){
		//debugger;
		//skoro wiemy ze jest jedna tabela to wystarczy podzielic
		//po \n, zeby miec poszczegolne elementy
		let lewaStrona = poID("doParsowaniaExcel").value.split("\n")

		//usuwam puste wyrazy z tabeli
		//po wklejeniu z excela jest dodatkowy znak \n
		//i on zostaje, wiec pozbywam sie go
		//pozbywamy sie z dolu i z gory
		while(lewaStrona[lewaStrona.length-1] == ""){
			lewaStrona.pop()
		}
		while(lewaStrona[0] == ""){
			lewaStrona.shift()
		}
		//USELESS
		//wypelniamy lewaStrona wyrazami 
		/*for (let i = 0; i < text.length; i++) {
			lewaStrona.push(text[i])
		}*/
		
		zmienLiczbeRoznic(lewaStrona.length,1)

		//aktualizujemy liczbe nawiasow, to tylko dla usera
		poID("liczbaNawiasow").value = liczba_par

		//wypelniamy lewa strone nawiasow
		//nie wiem dlaczego ale nie mozna parsowac np "1,1" do floata
		//dlatego zamieniam "," na "." i dopiero parsuje
		for (let i = 0; i < liczba_par; i++) {
			poID("l"+i).value = parseFloat(lewaStrona[i].replace(',', '.'))
		}
	}
	else{
		//musza byc dwie bo tak jest we wzorze jak nie ma jeden
		let text = poID("doParsowaniaExcel").value.split("\n")
		let lewaStrona = []
		let prawaStrona = []
		while(text[text.length-1] == ""){
			text.pop()
		}
		while(text[0] == ""){
			text.shift()
		}
		for (let i = 0; i < text.length; i++) {
			lewaStrona.push(text[i].split("\t")[0])
			prawaStrona.push(text[i].split("\t")[1])
		}
		//sprawdzamy czy jest tyle samo liczb z lewej i z prawej
		//jezeli tak to ustawiamy liczbe par na tyle
		//i zmieniamy liczbe nawiasow
		//potem ustawiamy
		if(lewaStrona.length == prawaStrona.length){
			zmienLiczbeRoznic(lewaStrona.length,1)
			poID("liczbaNawiasow").value = liczba_par
			for (let i = 0; i < liczba_par; i++) {
				poID("l"+i).value = parseFloat(lewaStrona[i].replace(',', '.'))
				poID("r"+i).value = parseFloat(prawaStrona[i].replace(',', '.'))
			}
		}
	}

}

/*
1,1	5,654
2,2	5,654
3,3	5,654
4,4	5,654
5,5	5,654
6,6	5,654
7,7	5,654
8,8	5,654
9,9	5,654
11	5,654
*/











