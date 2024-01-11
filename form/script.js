// let's get all required elements

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventin form from submintatting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //create xml object
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){
            //if ajax response status is 200 & ready status is 4 means there is no any error
            let response = xhr.response; //storing ajax response in a response variable
            // console.log(response);
                //if response is an error like enter valid email address then we'll change status color to red else reset the form
            if( response.indexOf("Email and password required!") != -1 ||response.indexOf("Enter a valid email address!")|| response.indexOf("Sorry, failed to send your message!")){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none"
                },3000); // hide the status text after 3 seconds if the message is sent
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); //creating new FormData object. this object is used to send form data
    xhr.send(formData); //  sending form data
}