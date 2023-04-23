// getItem
// setItem
// removeItem
// clear

// localStorage.setItem('group','P329');
// localStorage.setItem('count', 15)

// setTimeout(() => {
//     localStorage.removeItem('group');
    
// }, 5000);


// document.getElementById('text').innerHTML = localStorage.getItem('group')


// JSON
// XML

// stringify (stringe cevirir)
// parse (obyekte)

// if(localStorage.getItem('users') === null) {
//     localStorage.setItem('users',JSON.stringify([]));
// }


// let btn_add = document.querySelector('.btn-success');
// let btn_delete = document.querySelector('.btn-danger');
// let user_input = document.querySelector('.username')
// let email_input = document.querySelector('.email')

// btn_add.onclick = function() {
//     let username = user_input.value;
//     let email = email_input.value;
    
//     let user_list = JSON.parse(localStorage.getItem('users'));
//     user_list.push({
//         Name: username,
//         Email: email
//     })

//     localStorage.setItem('users',JSON.stringify(user_list))
//     alert(`${username} adlı istifadəçi əlavə olundu`)
//     GetUsers()
//     CheckUser()
// }



// function GetUsers() {
//     let users = JSON.parse(localStorage.getItem('users'));
//     console.log(users);

//     let x = '';
//     users.forEach(user => {
//         x += `
//         <div class="col-lg-3">
//             <div class="box">
//                 <h3>Username: ${user.Name}</h3>
//                 <p>Email: ${user.Email}</p>
//             </div>
//         </div>
//         `
//     })
//     document.getElementById('list').innerHTML = x;
// }
// GetUsers()


// function CheckUser() {
//     let users = JSON.parse(localStorage.getItem('users'))

//     if(users.length === 0) {
//         document.querySelector('.alert').classList.remove('d-none')
//         document.querySelector('.btn-danger').classList.add('d-none')
//     }
//     else{
//         document.querySelector('.alert').classList.add('d-none')
//         document.querySelector('.btn-danger').classList.remove('d-none')
//     }
// }

// CheckUser()


// function DeleteAllUsers() {
//     btn_delete.click();
// }

// btn_delete.onclick = function() {
//     localStorage.removeItem('users');
//     location.reload();
// }


// parentElement
// previousElementSibling
// nextElementSibling
// children



if(localStorage.getItem('products') === null) {
    localStorage.setItem('products',JSON.stringify([]))
}


let buttons = document.querySelectorAll('.btn');

for(let btn of buttons) {
    btn.onclick = function(e) {
        e.preventDefault();
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.previousElementSibling.src;
        let title = this.previousElementSibling.previousElementSibling.innerHTML
        let price = this.previousElementSibling.innerHTML;
       
        let product_list = JSON.parse(localStorage.getItem('products'));

        let existProd = product_list.find(item => item.Id == id);
        
        if(existProd === undefined) {
            product_list.push({
                Id: id,
                Title: title,
                Image: src,
                Price: price,
                Count: 1
            })
            document.querySelector('.toaster').innerHTML = 'Successfully added'
            document.querySelector('.toaster').style.backgroundColor = 'green'

        }
        else{
            existProd.Count += 1;
            document.querySelector('.toaster').innerHTML = 'Already added'
            document.querySelector('.toaster').style.backgroundColor = 'red'
        }

        

        localStorage.setItem('products',JSON.stringify(product_list))
        document.querySelector('.toaster').style.right = '5%'
        setTimeout(() => {
            document.querySelector('.toaster').style.right = '-20%'
        }, 1300);
        ShowCount()
    }
}


function ShowCount() {
    let items = JSON.parse(localStorage.getItem('products'))
    document.querySelector('#count').innerHTML = items.length;
}

ShowCount()