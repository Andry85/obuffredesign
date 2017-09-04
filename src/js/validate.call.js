$(document).ready(function(){

    $("#form").validate({
        
       rules:{ 
        
            fio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            }  
        
       },
       
       messages:{
        
            fio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },
            
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            phone:{
                required: "Это поле необходимо заполнить."
            }    
        
       }

    
    });


    $("#myaccount").validate({
        
       rules:{ 
        
            fio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
            password:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            passwordRepeat:{
                required: true,
                minlength: 4,
                maxlength: 50,
            }

        
       },
       
       messages:{
        
            fio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },
            
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            phone:{
                required: "Это поле необходимо заполнить."
            },

            password:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },

            passwordRepeat:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            }

        
       }

    
    });

    $("#letterFormEvent").validate({
        
       rules:{ 
        
            formSendFio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            

            formSendPhone:{
                required: true
            }  
        
       },
       
       messages:{
            formSendFio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },

            formSendPhone:{
                required: "Это поле необходимо заполнить."
            }    
        
       }
    
    });

    $("#authorize").validate({
        
       rules:{ 
        
            formRegEmail:{
                required: true,
                email: true
            },
            

            formRpassword:{
                required: true,
                minlength: 4,
                maxlength: 50
            }  
        
       },
       
       messages:{
            formRegEmail:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            formRpassword:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50"
            }    
        
       }
    
    });



    $("#registration").validate({
        
       rules:{ 
        
            newRegUserFio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            newRegUserEmail:{
                required: true,
                email: true
            },
            newRegUserpassword:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            newRegUserpasswordRepeat:{
                required: true,
                minlength: 4,
                maxlength: 50,
            }

        
       },
       
       messages:{
        
            newRegUserFio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },
            
            newRegUserEmail:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            newRegUserpassword:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },

            newRegUserpasswordRepeat:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            }

        
       }

    
    });

    $("#reestablish").validate({
        
       rules:{ 
        
            reestablishEmail:{
                required: true,
                email: true
            },
             
        
       },
       
       messages:{
            reestablishEmail:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },   
        
       }
    
    });

    $("#ressetPas").validate({ 
       rules:{ 
            pesetPassword:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            pesetPasswordRepeat:{
                required: true,
                minlength: 4,
                maxlength: 50,
            } 
       },
       messages:{
            pesetPassword:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },

            pesetPasswordRepeat:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            } 
       }
    });



    






    

}); //end of ready