function validation(){
    
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var gun = document.getElementById("dgun").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding ="10px"
  
    if(name.length <=0){
        text = "Lütfen Bir İsim Giriniz";
        error_message.innerHTML = text;
        return false;
    }
    if(surname.length <=0){
        text = "Lütfen Bir Soyad Giriniz";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.indexOf(".com") == -1){
        text = "Lütfen Geçerli Bir Email Adresi Giriniz";
        error_message.innerHTML = text;
        return false;
    }
    if(gun.length < 10){
        text = "Lütfen Doğum Gününüzü Seçiniz";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <30){
        text = "Lütfen Mesajınızı 30 Karakterden Fazla Giriniz";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Başarıyla Gönderilmiştir!")
}
function bilgiler()
{
    var name1 = document.getElementsByName("name1").value;
    var surname1 = document.getElementsByName("surname1").value;
    var email1 = document.getElementsByName("email1").value;
    var dgun1 = document.getElementsByName("dgun1").value;
    var message1 = document.getElementsByName("message1").value;
}
