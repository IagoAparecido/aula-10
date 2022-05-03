$("#login").click(
    function(){

        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/posts',
            success:function(data){
                console.log(data)

            },
            error:function(data){

            }

        })
    })



    
//     login = 
//     {
//         'usuario'   :    document.getElementById('email').value,
//         'senha' :   document.getElementById('senha').value,
//         'tipo_login' : 'site'
//     };

//     if(login.senha == '1234'){
//         document.getElementById('resultado').innerHTML= '<b>Bem Vindo!</b>'

//       }   else { 
//         document.getElementById('resultado').innerHTML= '<b>Errado!</b>'
//       }

    
//     console.log(login);

//     console.log(login.usuario);
//     console.log(login.senha);
//     console.log(login.tipo_login);
//     }

//    )