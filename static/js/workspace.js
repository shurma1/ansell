const anim = lottie;
function lottieAccessError(){
  anim.loadAnimation({
      container: document.querySelector('.lottie_container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '../static/res/access.json',
      rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "lottie-svg-class",
          id: "lottie-svg-id"
        }
  })
}

function render_workspace(workspace){
  let body = document.querySelector('body')
  let main = body.querySelector('.main')
  if(main){
    main.remove()
  }
  body.append(workspace)
  render_reports(create_reports())
}


function create_workspace(){
    let workspace = document.createElement('section')
    workspace.className = 'workspace'

    let header = document.createElement('header')

    let header__logo = document.createElement('div')
    header__logo.className = 'header__logo'
    header__logo.innerHTML = '<svg height="35" viewBox="0 0 189 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5576 43.2016H26.0939L28.9574 33.5694H40.8841L43.7476 43.2016H52.5177L39.7152 2.51127H30.8871L17.5576 43.2016ZM33.1086 19.2656C33.8681 16.2308 35.0383 11.4431 35.0383 11.4431C35.0383 11.4431 36.2667 16.7571 36.6748 18.6247C37.5504 22.5366 38.8963 26.7954 38.8963 26.7954H30.9465C31.8222 24.1114 32.3478 22.1858 33.1086 19.2656Z" fill="#1A65B7"/><path d="M54.3149 14.5373L61.2715 12.5536C61.9742 13.7789 62.3837 15.0622 62.3837 16.2888C64.1958 15.0055 64.5472 14.7707 65.8336 14.0704C67.412 13.2526 69.4579 12.7857 71.2105 12.7857C74.5456 12.7857 77.4671 14.5373 78.4023 17.1066C78.8117 18.2158 78.9874 19.4991 78.9874 21.368V43.2016H71.27V23.7605C71.27 20.3762 70.6849 19.383 68.639 19.383C67.0606 19.383 65.0161 20.4342 63.2026 22.067V43.2016H55.3676V21.5434C55.3676 18.9742 55.0176 16.5223 54.3149 14.5373Z" fill="#1A65B7"/><path d="M106.565 15.297L103.992 20.5503C101.008 19.0322 98.8477 18.3899 96.6261 18.3899C94.3437 18.3899 92.8248 19.5585 92.8248 21.3086C92.8248 22.8281 93.8194 23.6445 96.5666 24.3448L100.191 25.2786C103.873 26.2138 105.103 27.323 106.154 28.6643C107.266 30.0664 107.792 31.7599 107.792 33.7435C107.792 39.9319 102.648 44.1354 94.9883 44.1354C91.3046 44.1354 87.2709 42.9668 82.8872 40.6917L85.6926 34.9701C88.0898 36.4302 92.2411 38.3558 95.6315 38.3558C97.8531 38.3558 99.6071 36.8971 99.6071 34.9701C99.6071 32.9271 98.145 31.8759 94.9883 31.293L91.4816 30.6507C89.4925 30.2998 87.0371 28.8991 85.9858 27.6145C84.9331 26.3298 84.2899 24.1708 84.2899 22.2438C84.2899 16.4049 88.9087 12.4943 95.864 12.4943C100.66 12.4943 103.815 13.953 106.565 15.297Z" fill="#1A65B7"/><path d="M125.915 38.2398C121.882 38.2398 119.602 35.6125 119.602 31.0002V30.7667H136.906V28.9571C136.906 22.7107 135.68 18.6827 132.93 15.8799C131.002 13.8949 127.727 12.7277 124.28 12.7277C120.303 12.7277 117.322 14.0123 114.865 16.7571C112.236 19.6758 111.125 23.2356 111.125 28.6063C111.125 38.0063 116.679 44.0774 125.272 44.0774C129.481 44.0774 133.107 42.7347 136.556 39.9319L133.515 35.2616C131.118 37.2466 128.606 38.2398 125.915 38.2398ZM119.719 24.9278C119.719 20.7837 121.415 18.4492 124.395 18.4492C125.973 18.4492 127.084 19.0322 127.844 20.1994C128.546 21.3086 128.78 22.4772 128.78 24.6957V25.0452H119.719" fill="#1A65B7"/><path d="M149.529 3.3008e-06C149.821 1.6355 149.939 3.56247 149.939 7.7659V31.0582C149.939 36.1968 149.997 36.8971 150.466 37.7135C150.756 38.2398 151.401 38.5299 152.044 38.5299C152.336 38.5299 152.51 38.5299 152.92 38.4139L154.264 43.0855C152.92 43.6105 151.285 43.9019 149.589 43.9019C146.255 43.9019 143.566 42.3258 142.631 39.8159C142.047 38.2978 141.928 37.3627 141.928 33.1026V10.8021C141.928 6.89013 141.812 4.49626 141.52 1.80957" fill="#1A65B7"/><path d="M165.256 3.3008e-06C165.548 1.6355 165.664 3.56247 165.664 7.7659V31.0582C165.664 36.1968 165.723 36.8971 166.191 37.7135C166.483 38.2398 167.126 38.5299 167.771 38.5299C168.061 38.5299 168.237 38.5299 168.646 38.4139L169.991 43.0855C168.646 43.6105 167.01 43.9019 165.314 43.9019C161.982 43.9019 159.291 42.3258 158.356 39.8159C157.771 38.2978 157.655 37.3627 157.655 33.1026V10.8021C157.655 6.89013 157.538 4.49626 157.247 1.80957" fill="#1A65B7"/><path d="M0 56.2477L0.0337831 57.778C0.0337831 57.778 21.4563 52.7824 42.8085 53.0213C66.1972 53.2777 106.463 57.3786 141.202 56.9157C170.86 56.5136 189 46.6588 189 46.6588L188.995 45.4646C188.995 45.4646 176.122 50.1119 145.991 49.9743C111.917 49.8191 86.3617 45.3188 50.0705 47.1756C19.3712 48.7423 0 56.2477 0 56.2477Z" fill="#19B19E"/></svg>'

    let header__logout = document.createElement('div')
    header__logout.className = 'header__logout'
    header__logout.innerHTML = '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 2.5C4.08152 2.5 4.39946 2.3683 4.63388 2.13388C4.8683 1.89946 5 1.58152 5 1.25C5 0.918479 4.8683 0.600537 4.63388 0.366117C4.39946 0.131696 4.08152 0 3.75 0H1.25C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25V18.75C0 19.0815 0.131696 19.3995 0.366117 19.6339C0.600537 19.8683 0.918479 20 1.25 20H3.75C4.08152 20 4.39946 19.8683 4.63388 19.6339C4.8683 19.3995 5 19.0815 5 18.75C5 18.4185 4.8683 18.1005 4.63388 17.8661C4.39946 17.6317 4.08152 17.5 3.75 17.5H2.5V2.5H3.75ZM21.025 9.275L17.5 4.275C17.3088 4.00551 17.0187 3.82268 16.6932 3.76646C16.3676 3.71025 16.033 3.78522 15.7625 3.975C15.6273 4.06973 15.5122 4.19031 15.4239 4.32976C15.3355 4.46921 15.2757 4.62478 15.2478 4.78748C15.2199 4.95019 15.2245 5.1168 15.2614 5.27772C15.2982 5.43863 15.3666 5.59065 15.4625 5.725L17.6125 8.75H7.5C7.16848 8.75 6.85054 8.8817 6.61612 9.11612C6.3817 9.35054 6.25 9.66848 6.25 10C6.25 10.3315 6.3817 10.6495 6.61612 10.8839C6.85054 11.1183 7.16848 11.25 7.5 11.25H17.5L15.25 14.25C15.1515 14.3813 15.0798 14.5308 15.0391 14.6898C14.9984 14.8488 14.9893 15.0143 15.0126 15.1768C15.0358 15.3393 15.0908 15.4956 15.1744 15.6369C15.258 15.7781 15.3687 15.9015 15.5 16C15.7164 16.1623 15.9795 16.25 16.25 16.25C16.4441 16.25 16.6354 16.2048 16.809 16.118C16.9826 16.0312 17.1336 15.9052 17.25 15.75L21 10.75C21.1601 10.5386 21.2488 10.2817 21.2533 10.0166C21.2578 9.75143 21.1778 9.49172 21.025 9.275Z" fill="#74747680"/></svg>'

    header.append(header__logo, header__logout)

    let workspace__container = document.createElement('div')
    workspace__container.className = 'workspace__container'

    let workspace__content = document.createElement('div')
    workspace__content.className = 'workspace__content conteiner'

    let tabs__conteiner = document.createElement('div')
    tabs__conteiner.className = 'tabs__conteiner'

    let tabs = document.createElement('nav')
    tabs.className = 'tabs'

    let button = document.createElement('button')
    button.className = 'tab_active'
    button.dataset.type = 'reports'
    button.innerHTML = '<span>Отчеты</span>'

    tabs.append(button)

    button = document.createElement('button')
    button.dataset.type = 'defect'
    button.innerHTML = '<span>Тип брака</span>'

    tabs.append(button)

    button = document.createElement('button')
    button.dataset.type = 'users'
    button.innerHTML = '<span>Пользователи</span>'

    tabs.append(button)

    let content = document.createElement('div')
    content.className = 'content'


    tabs__conteiner.append(tabs)
    
    workspace__content.append(tabs__conteiner, content)
    workspace__container.append(workspace__content)
    workspace.append(header, workspace__container)

    return workspace
}


function render_accessError(){
  let content = document.querySelector('.content')

  content.innerHTML = ''
  let error_container = document.createElement('div')
  error_container.className = 'error_container'

  let lottie_container = document.createElement('div')
  lottie_container.className = 'lottie_container'

  let h2 = document.createElement('h2')
  h2.innerHTML = 'У вас нет прав для просмора данного раздела :/'

  error_container.append(lottie_container, h2)

  content.append(error_container)

  lottieAccessError()

}

function render_users(users){
    if(!users){
      render_accessError()
      return 0 
    }
    let content = document.querySelector('.content')
    content.innerHTML = ''
    content.append(users)

    let add = document.querySelectorAll('.user_title button')
    add.forEach(button => {
      button.onclick = () =>{
        let eventType = button.dataset.event
        let create_user = document.createElement('div')
        create_user.className = 'create_user'

        let h3 = document.createElement('h3')
        let more_input = document.createElement('select')
        if(eventType == 'worker'){
          h3.innerHTML = 'Создать новый аккаунт сортировщика'

          let left = document.createElement('option')
          left.innerHTML = 'Левая рука'
          left.value = 'left'

          let right = document.createElement('option')
          right.innerHTML = 'Правая рука'
          right.value = 'right'

          more_input.append(left,right)
        }
        if(eventType == 'user'){
          h3.innerHTML = 'Создать новый аккаунт администратора'

          let moder = document.createElement('option')
          moder.innerHTML = 'Модератор (Доступ только к exel)'
          moder.value = '0'

          let administrator = document.createElement('option')
          administrator.innerHTML = 'Администратор'
          administrator.value = '1'

          more_input.append(moder, administrator)



        }


        let login = document.createElement('input')
        login.type = 'text'
        login.placeholder = 'Логин'

        let password = document.createElement('input')
        password.type = 'password'
        password.placeholder = 'Пароль'

        let password_confirm = document.createElement('input')
        password_confirm.type = 'password'
        password_confirm.placeholder = 'Подтверждение пароля'

        let create = document.createElement('button')
        create.dataset.target = eventType
        create.innerHTML = 'Создать аккаунт'

        let form_error_block = document.createElement('div')
        form_error_block.className = 'form_error_block'

        create_user.append(h3, more_input, login, password, password_confirm, create, form_error_block)

        create_form(create_user)

        create.onclick = () => {
          if(password.value.length != 0 && login.value.length != 0 && password_confirm.value.length != 0){
            if(password.value == password_confirm.value){
              let target = create.dataset.target
              login = login.value
              password = password.value
              
              let data
              if(target == 'worker'){
                data = JSON.stringify({
                  token: sessionStorage['token'],
                  login: login,
                  password: password,
                  target: target,
                  hand: more_input.value
                })
              }
              else if(target == 'user'){
                data = JSON.stringify({
                  token: sessionStorage['token'],
                  login: login,
                  password: password,
                  target: target,
                  status: more_input.value
                })
              }
              $.ajax({
                url: 'http://'+host+'/create_user',
                method: 'POST',
                dataType: 'JSON',
                async: false, 
                contentType: "application/json; charset=utf-8",
                data: data ,
                success: function(data){

                  hide_form()
                  let ul
                  if(target == 'worker'){
                    ul = document.querySelector('#workers ul')
                  }
                  else if(target == 'user')(
                    ul = document.querySelector('#users ul')
                  )
 
                  
                  let li = document.createElement('li')
                  li.className = 'user_item'
            
                  let user_data = document.createElement('div')
                  user_data.className = 'user_data'
            
                  let span = document.createElement('span')
                  span.innerHTML = 'Логин: '
            
                  let p = document.createElement('p')
                  p.innerHTML = login
            
                  user_data.append(span, p)
            
                  let editButton = document.createElement('button')
                  editButton.innerHTML = 'Редактрировать'
                  editButton.dataset.id = 'none'
                  editButton.dataset.target = target
            
                  li.append(user_data, editButton)
                  ul.append(li)

                  
              },
              error: function (jqXHR, exception) {
                form_error_block.innerHTML = 'У вас недостаточно прав'
              }
            });

            }
            else{
              form_error_block.innerHTML = 'Пароли не совпадают'
  
            }
          }
          else{
            form_error_block.innerHTML = 'Заполните все поля'
          }
          
        }

      }
    })

    let editButtons = document.querySelectorAll('.users_content button')

    editButtons.forEach(button => {
      button.onclick = () => {
        let edit_users = document.createElement('div')
        edit_users.className = 'edit_users'
        login_content = button.parentNode.querySelector('p').innerHTML

        let h3 = document.createElement('h3')
        h3.innerHTML = 'Вы редактируете аккаунт '+ button.parentNode.querySelector('p').innerHTML

        let login = document.createElement('input');
        login.className = 'input_diable'
        login.disabled = true
        login.value = login_content
        login.type = 'text'
        login.placeholder = 'Логин'

        let password = document.createElement('input');
        password.type = 'password'
        password.placeholder = 'Пароль'

        let password_confirm = document.createElement('input');
        password_confirm.type = 'password'
        password_confirm.placeholder = 'Подтверждение пароля'

        let saveButton = document.createElement('button')
        saveButton.innerHTML = 'Сохранить'
        saveButton.dataset.target = button.dataset.target
        saveButton.dataset.event = 'save'
        saveButton.dataset.id = button.dataset.id

        let removeButton = document.createElement('button')
        removeButton.innerHTML = 'Удалить аккаунт'
        removeButton.dataset.target = button.dataset.target
        removeButton.dataset.event = 'remove'
        removeButton.dataset.id = button.dataset.id
        removeButton.className = 'remove_button'

        let form_error_block = document.createElement('div')
        form_error_block.className = 'form_error_block'

        edit_users.append(h3, login, password, password_confirm , saveButton, removeButton, form_error_block)


        create_form(edit_users)

        saveButton.onclick = () => {
          let target = saveButton.dataset.target
          let id = saveButton.dataset.id
          if(password.value.length != 0 && password_confirm.value.length){
            if(password.value == password_confirm.value){
              data = JSON.stringify({
                token: sessionStorage['token'],
                target: target,
                id: id,
                password: password.value
              })
              $.ajax({
                url: 'http://'+host+'/edit_user',
                method: 'POST',
                dataType: 'JSON',
                async: false, 
                contentType: "application/json; charset=utf-8",
                data: data,
                success: function(data){
                  hide_form()
                  
                  
              },
              error: function (jqXHR, exception) {
                form_error_block.innerHTML = 'У вас недостаточно прав'
              }
            });
            }
            else{
              form_error_block.innerHTML = 'Поля не совпадают'
            }
          }
          else{
            form_error_block.innerHTML = 'Зполните все поля'
          }
        }

        removeButton.onclick = () => {
          let target = removeButton.dataset.target
          let id = removeButton.dataset.id

          data = JSON.stringify({
            token: sessionStorage['token'],
            target: target,
            id: id
          })


          $.ajax({
            url: 'http://'+host+'/remove_user',
            method: 'POST',
            dataType: 'JSON',
            async: false, 
            contentType: "application/json; charset=utf-8",
            data: data,
            success: function(data){
              hide_form()
              button.parentNode.remove()

          },
          error: function (jqXHR, exception) {
            form_error_block.innerHTML = 'У вас недостаточно прав'
          }
        });

        }

      }
    })
}
function hide_form(){
  let form = document.querySelector('.form_container')
  form.classList.add('form_hide')
  setTimeout(() =>{
    form.remove()
  },400)
}


function create_form( form ){
  let content = document.querySelector('.content')

  let form_container = document.createElement('div')
  form_container.className = 'form_container'

  let form_content = document.createElement('div')
  form_content.className = 'form_content'

  let cross = document.createElement('button')
  cross.className = 'cross'
  cross.id = 'formCross'
  cross.innerHTML = '<svg height="20" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.657 33L63.828 7.828C64.2101 7.45902 64.5148 7.01764 64.7244 6.52962C64.9341 6.04161 65.0444 5.51673 65.049 4.98561C65.0536 4.45449 64.9524 3.92777 64.7513 3.43619C64.5502 2.9446 64.2532 2.49799 63.8776 2.12242C63.502 1.74685 63.0554 1.44984 62.5638 1.24872C62.0722 1.04759 61.5455 0.946387 61.0144 0.951002C60.4833 0.955618 59.9584 1.06596 59.4704 1.2756C58.9824 1.48523 58.541 1.78996 58.172 2.17201L33 27.343L7.82902 2.17201C7.07614 1.43566 6.06324 1.02592 5.01014 1.03172C3.95705 1.03752 2.94872 1.45839 2.20399 2.20298C1.45926 2.94758 1.03822 3.95583 1.03224 5.00892C1.02625 6.06202 1.43581 7.07499 2.17202 7.828L27.344 33L2.17202 58.172C1.79379 58.5419 1.49271 58.9832 1.28619 59.4703C1.07968 59.9574 0.971846 60.4806 0.968933 61.0096C0.966019 61.5387 1.06809 62.063 1.26922 62.5524C1.47036 63.0417 1.76656 63.4863 2.14069 63.8603C2.51483 64.2344 2.95945 64.5305 3.44881 64.7316C3.93818 64.9326 4.46256 65.0346 4.99161 65.0316C5.52065 65.0286 6.04385 64.9207 6.53089 64.7141C7.01794 64.5075 7.45917 64.2063 7.82902 63.828L33 38.657L58.172 63.828C58.953 64.609 59.977 65 61 65C62.023 65 63.048 64.609 63.828 63.828C64.5779 63.0779 64.9992 62.0607 64.9992 61C64.9992 59.9393 64.5779 58.9221 63.828 58.172L38.657 33Z" fill="black"/></svg>'

  let container = document.createElement('div')
  container.className = 'inner_container'
  container.append(form)
  form_content.append(cross,container)
  

  form_container.append(form_content)

  content.append(form_container)

  cross.onclick = () => hide_form()
 
}

function create_users(){
  let errors = false
  let users_containeer = document.createElement('div')
  users_containeer.className = 'users_containeer'

  let user_title = document.createElement('div')
  user_title.className = 'user_title'

  let h2 = document.createElement('h2')
  h2.innerHTML = 'Администраторы'

  let add = document.createElement('button')
  add.dataset.event = 'user'
  add.innerHTML = 'Добавить'

  user_title.append(h2, add)


  let users_content = document.createElement('div')
  users_content.className = 'users_content'
  users_content.id = 'users'


  let user_list = document.createElement('ul')
  user_list.className = 'user_list'

  let users_data = []

  
  $.ajax({
    url: 'http://'+host+'/get_users',
    method: 'POST',
    dataType: 'JSON',
    async: false, 
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({token: sessionStorage['token']}) ,
    success: function(data){
      users_data = data
  },
  error: function (jqXHR, exception) {
      errors = true
  }
});
if(errors){
  return 0
}

  if(users_data){
    users = users_data.users
      workers = users_data.workers

      users.forEach(item => {
        let li = document.createElement('li')
        li.className = 'user_item'
  
        let user_data = document.createElement('div')
        user_data.className = 'user_data'
  
        let span = document.createElement('span')
        span.innerHTML = 'Логин: '
  
        let p = document.createElement('p')
        p.innerHTML = item['login']
  
        user_data.append(span, p)
  
        let editButton = document.createElement('button')
        editButton.innerHTML = 'Редактрировать'
        editButton.dataset.id = item['id']
        editButton.dataset.target = 'user'
  
        li.append(user_data, editButton)
  
        user_list.append(li)

      })

      let worker_title = document.createElement('div')
      worker_title.className = 'user_title'

      h2 = document.createElement('h2')
      h2.innerHTML = 'Сортировщики'

      add = document.createElement('button')
      add.dataset.event = 'worker'
      add.innerHTML = 'Добавить'

      worker_title.append(h2, add)
      
      users_content.append(user_list)

      let workers_content = document.createElement('div')
      workers_content.className = 'users_content'
      workers_content.id = 'workers'

      let worker_list = document.createElement('ul')
      worker_list.className = 'user_list'

      workers.forEach(item => {
        let li = document.createElement('li')
        li.className = 'user_item'
  
        let user_data = document.createElement('div')
        user_data.className = 'user_data'
  
        let span = document.createElement('span')
        span.innerHTML = 'Логин: '
  
        let p = document.createElement('p')
        p.innerHTML = item['login']
  
        user_data.append(span, p)
  
        let editButton = document.createElement('button')
        editButton.innerHTML = 'Редактрировать'
        editButton.dataset.id = item['id']
        editButton.dataset.target = 'worker'
  
        li.append(user_data, editButton)
  
        worker_list.append(li)

      })

      workers_content.append(worker_list)

      users_containeer.append(user_title, users_content, worker_title, workers_content)



      return users_containeer
  }
}


function render_defectType(defect){
    let content = document.querySelector('.content')
    if(!defect){
      render_accessError()
      return 0 
    }
    content.innerHTML = ''
    content.append(defect)

    let saveButton = document.querySelector('.save_defect')
    saveButton.onclick = () =>{
      let thisDefect = document.getElementById('thisDefect')
      let allDefects = document.getElementById('allDefects')

      data = JSON.stringify({
        replaceble : thisDefect.options[thisDefect.selectedIndex].value,
        replacebleName: thisDefect.options[thisDefect.selectedIndex].innerHTML,
        replacement: allDefects.options[allDefects.selectedIndex].value,
        replacementName: allDefects.options[allDefects.selectedIndex].innerHTML,
        token: sessionStorage['token']
     }) 

      $.ajax({
          url: 'http://'+host+'/edit_defect_types',
          method: 'POST',
          dataType: 'JSON',
          contentType: "application/json; charset=utf-8",
          data: data,
          success: function(data){
            replaceDefect = thisDefect.options[thisDefect.selectedIndex].value
            replaceDefectName = thisDefect.options[thisDefect.selectedIndex].innerHTML
      
            let swap = document.querySelector('.swap')
            swap.classList.toggle('swap_reverse')
            thisDefect.options[thisDefect.selectedIndex].innerHTML = allDefects.options[allDefects.selectedIndex].innerHTML
            thisDefect.options[thisDefect.selectedIndex].value = allDefects.options[allDefects.selectedIndex].value
            allDefects.options[allDefects.selectedIndex].innerHTML = replaceDefectName
            allDefects.options[allDefects.selectedIndex].value = replaceDefect
            },
            error: function (jqXHR, exception) {
              console.log('error')
              
            }
        });

    }

}


function create_defectType(){
  let errors = false
  let defect_list = null;

  data = JSON.stringify({
    token : sessionStorage['token']
 }) 

  $.ajax({
    url: 'http://'+host+'/get_defect_types',
    method: 'POST',
    dataType: 'JSON',
    async: false, 
    contentType: "application/json; charset=utf-8",
    data: data,
    success: function(data){
      defect_list = data

    },
    error: function (jqXHR, exception) {
      errors = true
    }
});

if(errors){
  return 0
}
let defect = document.createElement('div')
defect.className = 'defect'

let defect_content = document.createElement('div')
defect_content.className = 'defect_content'

let thisDefet = document.createElement('select')
thisDefet.name = 'thisDefect'
thisDefet.id = 'thisDefect'


defect_list.thisDefect.forEach(defect => {
  let option = document.createElement('option')
  option.value = defect[1]
  option.innerHTML = defect[0]
  thisDefet.append(option)
});

let swap = document.createElement('div')
swap.className = 'swap'
swap.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M13.98 22 6 30l7.98 8v-6H28v-4H13.98v-6zM42 18l-7.98-8v6H20v4h14.02v6L42 18z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'

let allDefects = document.createElement('select')
allDefects.id = 'allDefects'
allDefects.name = 'allDefects'

//добавить option

defect_list.anotherDefects.forEach(defect => {
  let option = document.createElement('option')
  option.value = defect[1]
  option.innerHTML = defect[0]
  allDefects.append(option)
});


let button = document.createElement('button')
button.className = 'save_defect'
button.innerHTML = 'Сохранить'

defect_content.append(thisDefet, swap, allDefects)
defect.append(defect_content, button)

return defect
}















//render report section
function render_reports(reports){

    let content = document.querySelector('.content')
    content.innerHTML = ''
    content.append(reports.reports, reports.download_conteiner)

    let h2 = document.querySelector('.reports h2')
    let p = document.querySelector('.reports p')

    h2.innerHTML = 'Количество дефектов за цикл'
    p.innerHTML = 'На этом графике показано количество дефектов за раунд.'

    data = JSON.stringify({
      token: sessionStorage['token']
    })

    $.ajax({
      url: 'http://'+host+'/get_chart_data',
      method: 'POST',
      dataType: 'JSON',
      async: false, 
      contentType: "application/json; charset=utf-8",
      data: data,
      success: function(data){
        defect_list = [{"round": 1, "rejects":[]}, {"round": 2, "rejects":[]}, {"round": 3, "rejects":[]}, {"round": 4, "rejects":[]}, {"round": 5, "rejects":[]},{"round": 6, "rejects":[]}, {"round": 7, "rejects":[]}]
        let newData = Object.keys(data.data).map((key) => [Number(key), data.data[key]]);
        let defects = Object.keys(data.defects).map((key) => [Number(key), data.defects[key]]);
        defects.forEach(defect =>{
          defect = defect[1]
          for(i=0; i<7; i++){
            defect_list[i].rejects.push({
              name:defect[0],
              id:defect[1],
              count: 0
            })
          
          }
        })

        newData.forEach(item =>{
          item = item[1]
          defect_list.forEach(n =>{
            n.rejects.forEach(x =>{
              if(x['id'] == item['rejectType'] && n.round == item['round']){
                x['count']+=item['count']
              }
            })
          })
        })

        let datas = []
        let labels = []
        defect_list.forEach(item =>{
          labels = [item.rejects[0]['name'], item.rejects[1]['name'], item.rejects[2]['name'], item.rejects[3]['name'], item.rejects[4]['name'], item.rejects[5]['name'], item.rejects[6]['name'], item.rejects[7]['name'], item.rejects[8]['name'], item.rejects[9]['name'], item.rejects[10]['name'], item.rejects[11]['name']]
  
          data ={
              label: 'Round №'+item['round'],
              data: [item.rejects[0]['count'], item.rejects[1]['count'], item.rejects[2]['count'], item.rejects[3]['count'], item.rejects[4]['count'], item.rejects[5]['count'], item.rejects[6]['count'], item.rejects[7]['count'], item.rejects[8]['count'], item.rejects[9]['count'], item.rejects[10]['count'], item.rejects[11]['count']],
              borderWidth: 1
          }
          datas.push(data)
        })
        const ctx = document.getElementById('chart');

        new Chart(ctx, {
          type: 'bar',
          responsive: false,
          data: {
            labels: labels,
            datasets: datas
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
  });



  let nav = document.querySelectorAll('.tabs button')
  nav.forEach(button =>{
    button.onclick = () =>{
        if(!button.classList.contains('tab_active')){
            nav.forEach(elem =>{
                if(elem.classList.contains('tab_active')){
                    elem.classList.remove('tab_active')
                }
            })
    
            button.classList.add('tab_active')
            let type = button.dataset.type
            switch(type){
                case 'reports':
                    render_reports(create_reports());
                    break;
                case 'defect':
                    render_defectType(create_defectType());
                    break;
                case 'users':
                    render_users(create_users());
                    break;
            }
        }
    }
})


  let download__button = document.querySelector('.download__button')
  data = JSON.stringify({
    token: sessionStorage['token']
  })
    download__button.onclick = () => {
      $.ajax({
        url: 'http://'+host+'/get_table',
        method: 'POST',
        dataType: 'binary',
        xhrFields: {
            'responseType': 'blob'
        },
        data: data,
        success: function(data){
          var link = document.createElement('a'),
                    filename = 'file.xlsx';
          link.href = URL.createObjectURL(data);
          link.download = filename;
          link.click();
        }
    });
    }
}

function create_reports(){
    let reports = document.createElement('div')
    reports.className = 'reports'

    let reports__title = document.createElement('div')
    reports__title.className = 'reports__title'

    let h2 = document.createElement('h2')
    
    let setting_button = document.createElement('button')
    setting_button.className = 'settings'
    setting_button.innerHTML = '<svg class="setting__asset" width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4367 0.000472558C14.1603 -0.0126825 14.8456 0.249103 15.3574 0.75031C15.8717 1.23573 16.1467 1.90795 16.1467 2.61832C16.1467 4.06538 17.3438 5.23749 18.8316 5.23749C19.2907 5.23749 19.7511 5.10463 20.1603 4.88099C21.435 4.19561 23.0267 4.63105 23.7503 5.85446L24.6461 7.3936C24.8698 7.78825 25 8.23553 25 8.69595C25 9.62996 24.4883 10.4995 23.6595 10.9586C23.2504 11.1823 22.9084 11.5243 22.6729 11.9203C21.9743 13.1555 22.4098 14.7196 23.6595 15.4326C24.9211 16.1549 25.3552 17.7348 24.6461 18.9832L23.7503 20.471C23.2767 21.2853 22.3953 21.7865 21.4481 21.7865C20.9746 21.7865 20.501 21.6668 20.1076 21.43C19.6854 21.2064 19.2263 21.0748 18.7645 21.0748C18.0541 21.0748 17.3701 21.3524 16.8715 21.851C16.3571 22.339 16.0809 23.0086 16.0809 23.7058C16.0809 25.1397 14.8851 26.3105 13.3973 26.3105H11.5963C10.8846 26.3105 10.2137 26.0211 9.727 25.5344C9.22711 25.0345 8.96533 24.3768 8.96533 23.6927C8.96533 22.2456 7.78006 21.0748 6.29485 21.0748C5.8068 21.0748 5.33322 21.2064 4.92542 21.4577C4.30713 21.7984 3.57045 21.8905 2.88638 21.7194C2.20232 21.5353 1.61035 21.088 1.25516 20.496L0.414553 19.0095C0.0185865 18.3925 -0.0998088 17.6545 0.0856772 16.9573C0.268532 16.2601 0.743429 15.6681 1.38671 15.3129C1.79583 15.0893 2.13655 14.7604 2.37334 14.3526C3.05872 13.116 2.62328 11.5638 1.38671 10.8402C0.136982 10.1299 -0.297134 8.5644 0.414553 7.32783L1.25516 5.85446C1.61035 5.23749 2.20232 4.78891 2.89954 4.60474C3.59807 4.42057 4.33344 4.52449 4.95173 4.88099C5.37269 5.10463 5.83311 5.22302 6.29485 5.22302C7.00523 5.22302 7.68797 4.94677 8.18786 4.46003C8.68776 3.97329 8.96533 3.30239 8.96533 2.61832C8.96533 1.17127 10.1611 0.000472558 11.6476 0.000472558H13.4367ZM13.9642 9.84176C12.583 9.27477 10.9899 9.57734 9.92433 10.6166C8.87193 11.6427 8.54305 13.2081 9.12187 14.5513C9.68885 15.9049 11.0294 16.7863 12.529 16.7863H12.5435C13.5301 16.7995 14.451 16.4193 15.1469 15.7339C15.8441 15.063 16.2387 14.1421 16.2387 13.1818C16.2519 11.7216 15.3442 10.393 13.9642 9.84176Z" fill="#D0D0D3"/></svg> '

    reports__title.append(h2, setting_button)

    let p = document.createElement('p')

    let canvas = document.createElement('canvas')
    canvas.id = 'chart'

    let chart_container = document.createElement('div')
    chart_container.className = 'chart_container'
    chart_container.append(canvas)

    reports.append(reports__title, p, chart_container)

    let download_conteiner = document.createElement('div')
    download_conteiner.className = 'download'

    let download_button = document.createElement('button')
    download_button.className = 'download__button'
    download_button.innerHTML = '<span>Скачать отчет</span><svg version="1.1" id="Livello_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2289.75 2130" enable-background="new 0 0 2289.75 2130" xml:space="preserve"><path fill="#185C37" d="M1437.75,1011.75L532.5,852v1180.393c0,53.907,43.7,97.607,97.607,97.607l0,0h1562.036c53.907,0,97.607-43.7,97.607-97.607l0,0V1597.5L1437.75,1011.75z"/><path fill="#21A366" d="M1437.75,0H630.107C576.2,0,532.5,43.7,532.5,97.607c0,0,0,0,0,0V532.5l905.25,532.5L1917,1224.75L2289.75,1065V532.5L1437.75,0z"/><path fill="#107C41" d="M532.5,532.5h905.25V1065H532.5V532.5z"/><path opacity="0.1" enable-background="new    " d="M1180.393,426H532.5v1331.25h647.893c53.834-0.175,97.432-43.773,97.607-97.607V523.607C1277.825,469.773,1234.227,426.175,1180.393,426z"/><path opacity="0.2" enable-background="new    " d="M1127.143,479.25H532.5V1810.5h594.643c53.834-0.175,97.432-43.773,97.607-97.607V576.857C1224.575,523.023,1180.977,479.425,1127.143,479.25z"/><path opacity="0.2" enable-background="new    " d="M1127.143,479.25H532.5V1704h594.643c53.834-0.175,97.432-43.773,97.607-97.607V576.857C1224.575,523.023,1180.977,479.425,1127.143,479.25z"/><path opacity="0.2" enable-background="new    " d="M1073.893,479.25H532.5V1704h541.393c53.834-0.175,97.432-43.773,97.607-97.607V576.857C1171.325,523.023,1127.727,479.425,1073.893,479.25z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="203.5132" y1="1729.0183" x2="967.9868" y2="404.9817" gradientTransform="matrix(1 0 0 -1 0 2132)"><stop  offset="0" style="stop-color:#18884F"/><stop  offset="0.5" style="stop-color:#117E43"/><stop  offset="1" style="stop-color:#0B6631"/></linearGradient><path fill="url(#SVGID_1_)" d="M97.607,479.25h976.285c53.907,0,97.607,43.7,97.607,97.607v976.285c0,53.907-43.7,97.607-97.607,97.607H97.607C43.7,1650.75,0,1607.05,0,1553.143V576.857C0,522.95,43.7,479.25,97.607,479.25z"/><path fill="#FFFFFF" d="M302.3,1382.264l205.332-318.169L319.5,747.683h151.336l102.666,202.35c9.479,19.223,15.975,33.494,19.49,42.919h1.331c6.745-15.336,13.845-30.228,21.3-44.677L725.371,747.79h138.929l-192.925,314.548L869.2,1382.263H721.378L602.79,1160.158c-5.586-9.45-10.326-19.376-14.164-29.66h-1.757c-3.474,10.075-8.083,19.722-13.739,28.755l-122.102,223.011H302.3z"/><path fill="#33C481" d="M2192.143,0H1437.75v532.5h852V97.607C2289.75,43.7,2246.05,0,2192.143,0L2192.143,0z"/><path fill="#107C41" d="M1437.75,1065h852v532.5h-852V1065z"/></svg>'

    download_conteiner.append(download_button)

    return {reports, download_conteiner}
}