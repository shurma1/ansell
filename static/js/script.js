


window.onload = ()=>{
  if(sessionStorage['token']){
    render_workspace(create_workspace())

  }
  else{
      login_render(login_create())
  }

  
}


