var prefArray = [];

function main(){
document.getElementById('contact-form').addEventListener('submit', handleSubmit)
document.getElementById('contact-form').addEventListener('submit', handleChange)
}
function handleChange(){
    prefArray = [];
    prefOutput = '';
    var prefs = document.getElementById('contact-form').pref;
    for(var i = 0; i < prefs.length; i++){
        if(prefs[i].checked){
            prefArray.push(prefs[i].value);
            prefOutput += "<p>" + prefs[i].dataset.humanDesc + "</p>";
        }
    }
    document.getElementById('contactmethods').innerHTML = prefOutput;
    console.log('changed')
}
function handleSubmit(event){
    var myForm = document.getElementById('contact-form');
    var valid = true;
 if(myForm.email.value == ''){
event.preventDefault();
valid = false;
document.getElementById('emailRequiredError').style.display = 'block'

}
else{
    document.getElementById('emailRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.name.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('nameRequiredError').style.display = 'block'
}
else{
    document.getElementById('nameRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.age.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('ageRequiredError').style.display = 'block'
}
else{
    document.getElementById('ageRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.location.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('locationRequiredError').style.display = 'block'
}
else{
    document.getElementById('locationRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.phone_number.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('phneNumberRequiredError').style.display = 'block'
}
else{
    document.getElementById('phneNumberRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.address_line1.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('addressRequiredError').style.display = 'block'
}
else{
    document.getElementById('addressRequiredError').style.display = 'none'
    valid = true; 
}
if(myForm.post_code.value == ''){
    event.preventDefault();
    valid = false;
    document.getElementById('pcodeRequiredError').style.display = 'block'
}
else{
    document.getElementById('pcodeRequiredError').style.display = 'none'
    valid = true; 
}

if(myForm.terms.checked == false){
    event.preventDefault();
    valid = false;
    document.getElementById('termsRequiredError').style.display = 'block'
}
else{
    document.getElementById('termsRequiredError').style.display = 'none'
    valid = true; 
}
if( prefArray.length == 0){
    event.preventDefault();
    valid = false;
    document.getElementById('prefsRequiredError').style.display = 'block'
}
else{
    document.getElementById('prefsRequiredError').style.display = 'none'
    valid = true; 
}
if(valid){
console.log('form submitted')}
event.preventDefault();
}