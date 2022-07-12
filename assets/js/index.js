const addUserForm = document.querySelector('#add_user_form');
const updateUserForm = document.querySelector('#update_user');

if(addUserForm) {
    addUserForm.addEventListener('submit',  (e) => {
        //e.preventDefault();
        alert('Utilisateur inseré avec succès !');
    });
}

if(updateUserForm) {
    updateUserForm.addEventListener('submit',  (e) => {
        e.preventDefault();
        
        let getData = {};
        let data = new URLSearchParams();
        let formData = new FormData(updateUserForm);
        for (let i of formData) {
            getData[i[0]] = i[1];
            data.append(i[0], i[1]);
        }
        console.log(getData.id);
    
        fetch(`user_api/${getData.id}`, {
            method: 'PATCH',
            body: data
        })
        .then(response => {
            console.log('reponse : ' + response);
        })
        .catch(err => {
            console.log(err);
        })
    });
}