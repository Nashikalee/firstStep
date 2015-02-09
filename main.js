window.onload = function(){
	var monForm = document.getElementById('formulaire');
	monForm.addEventListener('submit', addStudent);

	var afficheEtudiants = document.getElementById('nomEtudiants');
	var nbEtudiant = document.getElementById('nbEtudiant');
	var compteurEtudiant = 0, nomEntier;
	var classe = [];

	function addStudent(e){
		e.preventDefault();
		afficheEtudiants.innerHTML = "";

		compteurEtudiant++;
		if (compteurEtudiant <= 1) {
			nbEtudiant.innerHTML = "Il y a " + compteurEtudiant + " etudiant";
		}
		else{
			nbEtudiant.innerHTML = "Il y a " + compteurEtudiant + " etudiants";
		}

		var nom = document.getElementById('nom').value;
		var prenom = document.getElementById('prenom').value;
		nomEntier = "<b>" + nom + "</b> " + prenom;

		nom = "";
		prenom = "";
		
		classe.push(nomEntier);
		console.log(classe);
		classe.sort();
		console.log(classe);

		for (var i = 0, c = classe.length; i < c; i++) {
			afficheEtudiants.innerHTML += classe[i] + "<br />";
		}
	}
}