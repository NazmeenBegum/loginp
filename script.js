function myfun(){
    let username=document.getElementById('username').value
    let pass=document.getElementById('pass').value

    if(username=="Nazmeen" && pass=="9398498075"){
        window.location="home.html" 
    }
    else{
        document.getElementById('para').innerHTML="Wrong Username or Password"
         
    }
}