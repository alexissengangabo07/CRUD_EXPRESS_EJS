const addUserForm = document.querySelector('#add_user_form');
const updateUserForm = document.querySelector('#update_user');
const btnsDelete = document.querySelectorAll('.delete');

if(addUserForm) {
    addUserForm.addEventListener('submit',  (e) => {
        alert('Utilisateur inseré avec succès !');
    });
}

if(updateUserForm) {
    updateUserForm.addEventListener('submit',  (e) => {
        
        let getData = {};
        let data = new URLSearchParams();
        let formData = new FormData(updateUserForm);
        for (let i of formData) {
            getData[i[0]] = i[1];
            data.append(i[0], i[1]);
        }
    
        fetch(`user_api/${getData.id}`, {
            method: 'PATCH',
            body: data
        })
        .then(response => {
            response.text();
        })
        .then(response => "Utisateur mis à jour avec succès")
        .catch(err => {
            console.log(err);
        })
    });
}

btnsDelete.forEach(btn => {
    btn.addEventListener('click', e => {
        
       if(confirm('Voulez vous supprimer cet utilisateur?')) {
            fetch(`/user_api/${btn.dataset.id}`, {
                method: 'DELETE'
            })
            .then(response => {
                return('Utilisateur supprimé avec succès !');
            })
            .catch(err => {
                console.log(err);
            })
       }
    })
})