/* Javascript Form Validation */

/* plain Js Validation */

/* javascript EventListerners */

/* What is addEventListners */

// addEventListener() is a Javascript method used to attech an event handler to an Element.

// syntax

// addEventListener(event , function , useCapture)

// const button = document.getElementById('btn')

// button.addEventListener("click" , function(){
//   alert("Button was clicked!!!!")
// })


/* passing data to a function */

// const button = document.getElementById('btn')

// button.addEventListener("mouseover" , () => {
//   console.log("Mouse Over Effect!!");
// })
// button.addEventListener("click" , () => {
//   console.log("Button Clicked!!")
// })
// button.addEventListener("mouseout" , () => {
//   console.log("Mouse Out Events!!!");
// })

// function showMessage(name){
//   console.log(`Hello,  ${name}`);
// }

// document.getElementById("btn").addEventListener("click" , function(){
//   showMessage("Javascript!!!")
// })

/* Work With input Field */

// const input = document.getElementById("username")

// input.addEventListener
// ("input" , () => {
//   console.log(input.value);
// })

/* Plain Js Validation */

(() => {
  const form = document.getElementById("demoform")
  form.addEventListener("submit" , (e) => {
    if(!form.checkValidity()){
      e.preventDefault()
      e.stopPropagation()
    }else{
      e.preventDefault()
      plainJsHandler()
    }
    form.classList.remove("validated")
  })
})()

/* Arrow Function + throw new Error Object (try_
catch) */

const plainJsHandler = (f) => {
  try{
    if(!f.name || f.name.trim().length < 3){
      throw new Error('Name Cheractar >= 3')
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(f.email)){
      console.error("Invalid Email!!");
    }
    const age = Number(f.age)
    if(isNaN(age) || age < 18 || age > 60){
      throw new Error("Age between 18 to 60 only")
    }
    if(f.website && !isValidUrl(f.website)){
      throw new Error("Invalid Url!!!")
    }
  }catch(err){
    console.log(err);
  }

  const isValidUrl = (string) => {
    try{new URL(string); return true} catch(_){return false}
  }

  const showResult = (msg , type) => {
    document.getElementById("result").innerHTML = `<div>${type} ${msg}</div>`
  }
}

// jQuery
{
  $(function(){
    $("#demoform").validate({
      rules:{
        name:{required:true , minlength:3},
        email:{required:true , email:true},
        age:{required:true , range:[18 , 60]},
        website:{url:true}
      },
      message:{
        name:{required:"Please Enter your name" , minlenght: "minimun 3 character nedded"},
        email:{required: "Email required" , email:"valid email address"},
        age:{required:"Age required" , range:"Age must be between 18 to 60"},
        website:{required:"Please Enter valid URL"}
      },
      submitHandler:function(form){
        plainJsHandler();
        return false;
      }
    })
  })
}

// Show Error and Data Validation in Js
// Show Error With Style
// Show Error based on Condition