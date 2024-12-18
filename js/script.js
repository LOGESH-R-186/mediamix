//go to signup page
function Signup()
{
    window.location.href="./signUp.html"
}

// function for signup page verfication

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
        window.location.href="../html/verifyPage.html"
    }
    else{
        document.getElementById("error").innerHTML="Invalid Details"
    }

}


// function for signin page

function LoginValidation()
{
     var db=[{'username':'Logesh','password':'Logesh@144'},
             {'username':'Boopesh','password':'Boopesh@144'},
             {'username':'User','password':'User@144'}
            ]

     var username=document.getElementById("user").value       
     var password=document.getElementById("pass").value
     var flag=false

     for(var i=0;i<db.length;i++)
     {
        if(db[i]['username']==username)
        {
            if(db[i]['password']==password)
                {
                   flag=true
                }
        }
     }
     
     if(flag==true)
     {
        window.location.href="../index.html"
     }
     else
     {
         document.getElementById("error").innerHTML="Invalid Details"
     }

}


//cancel button func in signup page

function SignIn()
{
    
    return window.location.href="../html/signIn.html"
    
}

//email verification for otp generation

function VerifyEmail()
{

   var EMAIL=document.getElementById("email").value 
   var EmailFlag=false
   var flag1=false
   var flag2=true 
   for(var i=0;i<EMAIL.length;i++){
       if(EMAIL[i]=='@'){
           flag1=true
       }
       if((EMAIL[i]>='A')&&(EMAIL[i]<='Z')){
           flag2=false
       }
   }
   if((flag1==true)&&(flag2==true)){
       EmailFlag=true
   }

   if( EmailFlag==true)
   {
    
     window.location.href="../html/otp.html"
   }
   else{
    document.getElementById("error").innerHTML="Invalid Details"
}
}
 

// function for selecting the movie language
 function chooselanguage()
{
    var choice = document.getElementById("language").value
    
    if(choice =='Tamil')
    {
        window.location.href="../../html/movies/tamil/actor.html"
    }

    else if(choice =='Telugu')
    {
        window.location.href="https://www.facebook.com/"
    }
    
    else if(choice =='Malaiyalam')
        {
            window.location.href="../../html/movies/malaiyalam/malaiyalam.html"
        }

   else if(choice =='Hollywood')
            {
                window.location.href="https://www.facebook.com/"
            }    

  else if(choice =='Hindi')
    {
       window.location.href="https://www.facebook.com/"
    }  
}
