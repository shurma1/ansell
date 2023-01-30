

function login_render(form){
    document.querySelector('body').append(form)
    let authButton = document.querySelector('.form button')

    authButton.onclick = () =>{
        let login = document.getElementById('login')
        let password = document.getElementById('password')
        if(login.value.length > 0 && password.value.length > 0){
            remove_auth_error()
            let authButtonLabel = authButton.querySelector('span')
            authButtonLabel.classList.add('hide')
            authButton.disabled = true
            data = JSON.stringify({
                login : login.value,
                password: password.value
             }) 
            setTimeout(() => {
                authButton.innerHTML = '<span class="loader show"></span>'
                $.ajax({
                    url: 'http://'+host+'/auth',
                    method: 'POST',
                    dataType: 'JSON',
                    contentType: "application/json; charset=utf-8",
                    data: data,
                    success: function(data){
                        authButton.innerHTML = '<span>Войти</span>'
                        sessionStorage['token'] = data.token;
                        sessionStorage['status'] = data.status;
                        render_workspace(create_workspace())
                    },
                    error: function (jqXHR, exception) {
                        if (jqXHR.status === 0) {
                            show_auth_error('Нет соеденения с интернетом')
                            authButton.innerHTML = '<span>Войти</span>'
                            authButton.disabled = false
                        } else if (jqXHR.status == 401) {
                            show_auth_error('Неправильный логин или пароль')
                            authButton.innerHTML = '<span>Войти</span>'
                            authButton.disabled = false
                        }

                    }
                });
    
            },200)
    
        }
        else{
            show_auth_error('Зполните все поля')
        }
        
    }
}


function login_create(){
    let main = document.createElement('section')
    main.className = 'main'

    let form = document.createElement('div')
    form.className = 'form'

    let logo = document.createElement('div')
    logo.className = 'logo' 
    logo.innerHTML = '<svg height="45" viewBox="0 0 189 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5576 43.2016H26.0939L28.9574 33.5694H40.8841L43.7476 43.2016H52.5177L39.7152 2.51127H30.8871L17.5576 43.2016ZM33.1086 19.2656C33.8681 16.2308 35.0383 11.4431 35.0383 11.4431C35.0383 11.4431 36.2667 16.7571 36.6748 18.6247C37.5504 22.5366 38.8963 26.7954 38.8963 26.7954H30.9465C31.8222 24.1114 32.3478 22.1858 33.1086 19.2656Z" fill="#1A65B7"/><path d="M54.3149 14.5373L61.2715 12.5536C61.9742 13.7789 62.3837 15.0622 62.3837 16.2888C64.1958 15.0055 64.5472 14.7707 65.8336 14.0704C67.412 13.2526 69.4579 12.7857 71.2105 12.7857C74.5456 12.7857 77.4671 14.5373 78.4023 17.1066C78.8117 18.2158 78.9874 19.4991 78.9874 21.368V43.2016H71.27V23.7605C71.27 20.3762 70.6849 19.383 68.639 19.383C67.0606 19.383 65.0161 20.4342 63.2026 22.067V43.2016H55.3676V21.5434C55.3676 18.9742 55.0176 16.5223 54.3149 14.5373Z" fill="#1A65B7"/><path d="M106.565 15.297L103.992 20.5503C101.008 19.0322 98.8477 18.3899 96.6261 18.3899C94.3437 18.3899 92.8248 19.5585 92.8248 21.3086C92.8248 22.8281 93.8194 23.6445 96.5666 24.3448L100.191 25.2786C103.873 26.2138 105.103 27.323 106.154 28.6643C107.266 30.0664 107.792 31.7599 107.792 33.7435C107.792 39.9319 102.648 44.1354 94.9883 44.1354C91.3046 44.1354 87.2709 42.9668 82.8872 40.6917L85.6926 34.9701C88.0898 36.4302 92.2411 38.3558 95.6315 38.3558C97.8531 38.3558 99.6071 36.8971 99.6071 34.9701C99.6071 32.9271 98.145 31.8759 94.9883 31.293L91.4816 30.6507C89.4925 30.2998 87.0371 28.8991 85.9858 27.6145C84.9331 26.3298 84.2899 24.1708 84.2899 22.2438C84.2899 16.4049 88.9087 12.4943 95.864 12.4943C100.66 12.4943 103.815 13.953 106.565 15.297Z" fill="#1A65B7"/><path d="M125.915 38.2398C121.882 38.2398 119.602 35.6125 119.602 31.0002V30.7667H136.906V28.9571C136.906 22.7107 135.68 18.6827 132.93 15.8799C131.002 13.8949 127.727 12.7277 124.28 12.7277C120.303 12.7277 117.322 14.0123 114.865 16.7571C112.236 19.6758 111.125 23.2356 111.125 28.6063C111.125 38.0063 116.679 44.0774 125.272 44.0774C129.481 44.0774 133.107 42.7347 136.556 39.9319L133.515 35.2616C131.118 37.2466 128.606 38.2398 125.915 38.2398ZM119.719 24.9278C119.719 20.7837 121.415 18.4492 124.395 18.4492C125.973 18.4492 127.084 19.0322 127.844 20.1994C128.546 21.3086 128.78 22.4772 128.78 24.6957V25.0452H119.719" fill="#1A65B7"/><path d="M149.529 3.3008e-06C149.821 1.6355 149.939 3.56247 149.939 7.7659V31.0582C149.939 36.1968 149.997 36.8971 150.466 37.7135C150.756 38.2398 151.401 38.5299 152.044 38.5299C152.336 38.5299 152.51 38.5299 152.92 38.4139L154.264 43.0855C152.92 43.6105 151.285 43.9019 149.589 43.9019C146.255 43.9019 143.566 42.3258 142.631 39.8159C142.047 38.2978 141.928 37.3627 141.928 33.1026V10.8021C141.928 6.89013 141.812 4.49626 141.52 1.80957" fill="#1A65B7"/><path d="M165.256 3.3008e-06C165.548 1.6355 165.664 3.56247 165.664 7.7659V31.0582C165.664 36.1968 165.723 36.8971 166.191 37.7135C166.483 38.2398 167.126 38.5299 167.771 38.5299C168.061 38.5299 168.237 38.5299 168.646 38.4139L169.991 43.0855C168.646 43.6105 167.01 43.9019 165.314 43.9019C161.982 43.9019 159.291 42.3258 158.356 39.8159C157.771 38.2978 157.655 37.3627 157.655 33.1026V10.8021C157.655 6.89013 157.538 4.49626 157.247 1.80957" fill="#1A65B7"/><path d="M0 56.2477L0.0337831 57.778C0.0337831 57.778 21.4563 52.7824 42.8085 53.0213C66.1972 53.2777 106.463 57.3786 141.202 56.9157C170.86 56.5136 189 46.6588 189 46.6588L188.995 45.4646C188.995 45.4646 176.122 50.1119 145.991 49.9743C111.917 49.8191 86.3617 45.3188 50.0705 47.1756C19.3712 48.7423 0 56.2477 0 56.2477Z" fill="#19B19E"/></svg>'
    
    let login = document.createElement('input')
    login.id = 'login'
    login.type = 'text'
    login.placeholder = 'Логин'

    let password = document.createElement('input')
    password.id = 'password'
    password.type = 'password'
    password.placeholder = 'Пароль'

    let span = document.createElement('span')
    span.innerHTML = 'Войти'

    let authButton = document.createElement('button')
    authButton.append(span)

    let errorBlock = document.createElement('div')
    errorBlock.className = 'error__container'
    
    form.append(logo, login, password, authButton, errorBlock)
    main.append(form)

    return main
}




function show_auth_error(message){
    let error_block = document.querySelector('.error__container')
    error_block.innerHTML = '<p>'+message+'</p>'
}

function remove_auth_error(){
    document.querySelector('.error__container').innerHTML = ''
}