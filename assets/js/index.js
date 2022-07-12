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
        
        let data = {};
        let formData = new FormData(updateUserForm);
        for (let i of formData) {
            data[i[0]] = i[1];
        }
    
        fetch(`http://127.0.0.1:8080/user_api/${data.id}`, {
            method: 'patch',
            body: data
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    });
}