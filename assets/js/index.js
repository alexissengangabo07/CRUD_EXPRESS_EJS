const addUserForm = document.querySelector('#add_user_form');
const updateUserForm = document.querySelector('#update_user');
const btnsDelete = document.querySelectorAll('.delete');
const notificationError = document.querySelector('.notification-error');
const notificationSuccess = document.querySelector('.notification-success');
const notificationClose = document.querySelectorAll('.notification-close');
const tableBody = document.querySelector('#myTable');

if(addUserForm) {
    addUserForm.addEventListener('submit',  e => {
        e.preventDefault();
        let data = {};
        let formUrlEncoded= new URLSearchParams();
        for (const i of new FormData(addUserForm)) {
            data[i[0]] = i[1];
            formUrlEncoded.append(i[0], i[1]);
        }
        if (data.name != '' && data.email != '' && data.gender != '') {
            fetch('/user_api', {
                method: 'POST',
                body: formUrlEncoded
            })
            .then(response => {
                notificationSuccess.style.display = `block`;
                notificationError.style.display = `none`;
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            notificationError.style.display = `block`;
            notificationSuccess.style.display = `none`;
        }
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
        e.preventDefault();
       if(confirm('Voulez vous supprimer cet utilisateur?')) {
            fetch(`/user_api/${btn.dataset.id}`, {
                method: 'DELETE'
            })
            .then(response => {
                notificationSuccess.style.display = `block`;
                fetch(`/user_api/`, {method: 'GET'})
                .then(res => res.json()).then(data => {
                    tableBody.innerHTML = '';
                    for(let i = 0; i < data.length; i++) {
                        tableBody.innerHTML += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].gender}</td>
                            <td>${data[i].status}</td>
                            <td>
                                <a href="/update-user?id=${data[i]._id}" class="btn border-shadow update">
                                    <span class="text-gradient"><i class="fa fa-pencil-alt"></i></span>
                                </a>
                                <a href="javascript:void(0)" data-id="${data[i]._id}" class="btn border-shadow delete">
                                    <span class="text-gradient"><i class="fas fa-times"></i></span>
                                </a>
                            </td>
                        </tr>
                        `;
                    }
                })
                .catch(err => console.log('il y a erreur' + err));
            })
            .catch(err => {
                console.log(err);
            });
       }
    })
});

notificationClose.forEach(close => {
    close.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});