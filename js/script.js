
function SignUpValidation(){
    // PHONE NUMBER VALIDATION
    var Phone=document.getElementById("phone").value 
    var PhoneFlag=false 
    if((Phone>=6000000000)&&(Phone<=9999999999)){
        PhoneFlag=true
    }


    // Email Validation
    var Email=document.getElementById("mail").value 
    var EmailFlag=false
    var flag1=false
    var flag2=true 
    for(var i=0;i<Email.length;i++){
        if(Email[i]=='@'){
            flag1=true
        }
        if((Email[i]>='A')&&(Email[i]<='Z')){
            flag2=false
        }
    }
    if((flag1==true)&&(flag2==true)){
        EmailFlag=true
    }


    // Password Validation
    var Password=document.getElementById("pass").value 
    var PasswordFlag=false 
    var Upper=0
    var Lower=0
    var Num=0
    var Special=0
    for(var i=0;i<Password.length;i++){
        if((Password[i]>='A')&&(Password[i]<='Z')){
            Upper++
        }else if((Password[i]>='a')&&(Password[i]<='z')){
            Lower++
        }else if((Password[i]>='0')&&(Password[i]<='9')){
            Num++
        }else{
            Special++
        }
    }
    if((Password.length>=8)&&(Password.length<=16)&&(Upper>=1)&&(Lower>=1)&&(Num>=1)&&(Special>=1)){
        PasswordFlag=true
    }

    // Confirm Password
    var ReEnteredPassword=document.getElementById("confirm").value 
    var ConfirmFlag=false
    if(Password==ReEnteredPassword){
        ConfirmFlag=true
    }


    // Final Validation
    if((PhoneFlag==true)&&(EmailFlag==true)&&(PasswordFlag==true)&&(ConfirmFlag==true)){
        window.location.href="./otp.html"
    }else{
        document.getElementById("error").innerHTML="Invalid Details"
    }



}