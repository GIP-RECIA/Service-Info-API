// Création de l'éditeur wysiwyg Quill
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'link'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ]
    }
});

// Event pour mettre à jour la partie droite quand on intéragit avec l'éditeur wysiwyg
quill.on('text-change', majDroite);

// Partie gestion des tuto
// Ajout d'un nouveau tuto
function ajouterTuto() {
    const container = document.getElementById('liens-container');
    const div = document.createElement('div');
    div.className = 'lien-item';
    div.innerHTML = `
    <input type="text" name="name" placeholder="Titre">
    <input type="text" name="href" placeholder="Lien">
    `;
    container.appendChild(div);
    addEventToTuto();
    majDroite();
}

// Suppression du dernier tuto
function enleverDernierTuto() {
    const container = document.getElementById('liens-container');
    const tutos = container.querySelectorAll('.lien-item');
    if (tutos.length > 0) {
        const dernier = tutos[tutos.length - 1];
        container.removeChild(dernier);
    }
    majDroite();
}

// Marquage des tutos
function addEventToTuto(){
    const elements = gauche.querySelectorAll('input');
    elements.forEach(el => {
        if(el.name === 'name' || el.name === 'href') {
            el.addEventListener('input', majDroite);
        }
    });
}

// Remise à zéro du formulaire
function resetFormulaire() {
  const form = document.getElementById('createJsonForm');
  form.reset();
  document.getElementById('liens-container').innerHTML = "";
  document.getElementById('description').value = '';
  quill.setContents([]);
  document.getElementById('resultat').innerHTML = ""
}

// Le système de stopUpdate permet de gérer correctement la maj dynamique de la partie droite lorsqu'on charge
// les champs à partir d'un fichier
let stopUpdate=0;

const fnameInput = document.getElementById('fname');
fnameInput.addEventListener('change', async () => {
    stopUpdate=1;
    appelerApiEtRemplir();
    await new Promise(r => setTimeout(r, 100));
    stopUpdate=0;
    majDroite();
});


// Marquage de autres input
const gauche = document.getElementById('gauche');
gauche.querySelectorAll('input').forEach(el => {
    if(el.type === 'checkbox' || el.type === 'radio') {
        el.addEventListener('change', majDroite);
    } else {
        el.addEventListener('input', majDroite);
    }
});

const category = document.getElementById('category');
category.addEventListener('change', async () => {
    majDroite();
});

// Remplissage des champs à partir d'un fichier existant
function appelerApiEtRemplir() {
    fetch('/service-info-api/api/serviceInfo/'+fnameInput.value)
    .then(response => {
        resetFormulaire();
        if (!response.ok){
            console.log(err);
            throw new Error('Service inconnu. Création d\'une nouvelle fiche info...');
        } else {
            return response.json();
        }
    })
    .then(data => {
        // Lien vidéo
        document.getElementById('video_link').value = data.video_link || '';

        // Lien turoriel
        document.getElementById('resource_link').value = data.resource_link || '';

        // Populations cible
        if(data.populations_cible) {
            data.populations_cible.forEach(val => {
                const checkbox = document.querySelector(`input[name="population"][value="${val}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }

        // Contextes cible
        if(data.contextes_cible) {
            data.contextes_cible.forEach(val => {
                const checkbox = document.querySelector(`input[name="contexte"][value="${val}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }

        // Catégorie
        const category = document.getElementById("category");
        category.value = data.categorie_principale;

        // Responsable
        const responsable = document.getElementById("responsable");
        responsable.value = data.responsable;

        // Description
        quill.clipboard.dangerouslyPasteHTML(data.description);

        // Tutoriels
        const container = document.getElementById('liens-container');
        container.innerHTML = "";
        data.tutorials.forEach(val => {
            console.log(val);
            const div = document.createElement('div');
            div.className = 'lien-item';
            div.innerHTML = `
            <input type="text" name="name" placeholder="Titre" value="${val.name}">
            <input type="text" name="href" placeholder="Lien" value="${val.href}">
            `;
            container.appendChild(div);
        });
        addEventToTuto();
    })
    .catch(err => {
        console.log(err);
        resetFormulaire();
        throw new Error('Service inconnu. Création d\'une nouvelle fiche info...');
    });
}

// Remplissage de la prévisualisation (composant web) à partir des champs gauche
function majDroite() {
    if(stopUpdate==0){
        const formData = new FormData(document.getElementById("createJsonForm"));
        formData.set('fname', document.getElementById('fname').value)
        formData.set('description', quill.root.innerHTML);
        fetch('/service-info-api/api/generateFile', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const layout = document.querySelector('r-service-info-layout');
            console.log(data)
            layout.setAttribute('name', document.getElementById('fname').value);
            layout.setAttribute('description', data.description);
            layout.setAttribute('video', data.video_link)
            layout.setAttribute('category', data.categorie_principale)
            if(data.resource_link != ""){
                layout.setAttribute('tutorials-link', JSON.stringify({ "href": data.resource_link }))
            } else {
                layout.setAttribute('tutorials-link', "")
            }
            layout.setAttribute('tutorials', JSON.stringify(data.tutorials));
            document.getElementById('resultat').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Erreur lors de l’envoi :', error);
        });
    }
}

// Sauvegarde d'un fichier JSON en brouillon
function saveJsonFile() {
    fetch('/service-info-api/api/saveFile', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            fname: document.getElementById('fname').value,
            json: document.getElementById('resultat').innerHTML
        })
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Erreur lors de l’envoi :', error);
    });

}