const form = document.myForm;
    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExLastName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^[a-zA-Z0-9._%+-]+\.+[a-zA-Z]@northeastern\.edu$/;  
    const regExstreetAddress1 =  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExCity =  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExState =  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    
    const regExPhone = /^857-\d{3}-\d{4}$/;
    const regExZipcode = /^\d{5}$/;

    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isemailIdValid = false;
    let isPhoneNumberValid = false;
    let isZipcodeValid = false;
    let isSourceValid = true; 
    let isCommentsValid = false;
    let isTitleValid = false;
    let isStreetAddress1Valid = false;
    let isCityValid = false;
    let isStateValid = false; 

    const ratingSelect = document.getElementById('rating');
    const checkboxContainer = document.getElementById('checkbox-container');
    const textFieldContainer = document.getElementById('text-field-container');
    const enableTextCheckbox = document.getElementById('enableText');
    const textField = document.getElementById('textField');
    
     ratingSelect.addEventListener('change', function () {
        const selectedRating = parseInt(ratingSelect.value);
    
        if (selectedRating >= 1) {
            checkboxContainer.style.display = 'block';
        } 
        else {
            checkboxContainer.style.display = 'none';
            textFieldContainer.style.display = 'none';
            enableTextCheckbox.checked = false;
            textField.required = false;
        }
    });
    
    enableTextCheckbox.addEventListener('change', function () {
        if (enableTextCheckbox.checked) {
            textFieldContainer.style.display = 'block';
            textField.required = true;
        } else {
            textFieldContainer.style.display = 'none';
            textField.required = false;
        }
    });

    const resultsTable = document.getElementById('resultsTable');
    const submittedData = document.getElementById('submittedData');

    const validate = (v) => {
        let { id, name, value } = v.target;
    
    
        switch(name) {
            case "firstName":
                if (!value.trim().match(regExName)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isFirstNameValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isFirstNameValid = true;
                        }
                break;

            case "lastName":
                if (!value.trim().match(regExLastName)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isLastNameValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isLastNameValid = true;
                        }
                break;

            case "emailId":
                if (!value.trim().match(regExEmail)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isemailIdValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isemailIdValid = true;
                        }
                break;

            case "phoneNumber":
                if (!value.trim().match(regExPhone)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isPhoneNumberValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isPhoneNumberValid = true;
                        }
                break;

            case "streetAddress1":
                if (!value.trim().match(regExstreetAddress1)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isStreetAddress1Valid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isStreetAddress1Valid = true;
                        }
                break;

            case "zipcode":
                if (!value.trim().match(regExZipcode)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isZipcodeValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isZipcodeValid = true;
                        }
                break;

            case "text":
                if (value.trim() === "") {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isCommentsValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isCommentsValid = true;
                        }
                break;
            
            case "rating":
                if (value.trim() === "") {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isCommentsValid = false;
                        }
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isCommentsValid = true;
                        }
                break;
            
            case "title":

// radio
            const titleRadios = document.querySelectorAll('input[name="title"]');
               const checkedRadio = Array.from(titleRadios).find((radio) => radio.checked);
              if (!checkedRadio) {
                     document.getElementById(`error_title`).style.display = 'block';
                     isTitleValid = false;
                     } 
               else {
                     document.getElementById(`error_title`).style.display = 'none';
                     isTitleValid = true;
                    }
                break;

            case "'textField' && enableTextCheckbox.checked":
                if (value.trim() === "") {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isTextFieldValid = false;
                        }
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isTextFieldValid = true;
                        }
                break;

            case "city":
                if (!value.trim().match(regExCity)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isCityValid = false;
                        } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isCityValid = true;
                        }
                break;
            
            case "state":
                if (!value.trim().match(regExState)) {
                            document.getElementById(`error_${name}`).style.display = 'block';
                            isStateValid = false;
                       } 
                else {
                            document.getElementById(`error_${name}`).style.display = 'none';
                            isStateValid = true;
                        }
                break;  

        }

        if(!isFirstNameValid || !isLastNameValid || !isemailIdValid || !isZipcodeValid || !isSourceValid || !isCommentsValid || !isTitleValid || !isStreetAddress1Valid || !isCityValid || !isStateValid){
             document.myForm.Submit.setAttribute('disabled', true);
        } else{
            document.myForm.Submit.removeAttribute('disabled');
        }

    }


    form.addEventListener('input', validate);

    form.addEventListener('submit', (e) =>  {
        e.preventDefault();
    
        if (!isFirstNameValid || !isLastNameValid || !isemailIdValid || !isZipcodeValid || !isSourceValid || !isCommentsValid || !isTitleValid || !isStreetAddress1Valid || !isCityValid || !isStateValid) {
            alert("Please enter valid details before submitting.");
            return;
        }
        
        var table = document.getElementById("myTable");
        var tbody = document.getElementsByTagName("tbody")[0] ;
        var trNode = document.createElement("tr") ;

        var tdNameNode = document.createElement("td") ;
        tdNameNode.innerHTML = document.getElementById("firstName").value + document.getElementById("lastName").value
    
        var tdEmailNode = document.createElement("td") ;
        tdEmailNode.innerHTML = document.getElementById("emailId").value;

        var tdphoneNumberNode = document.createElement("td") ;
        tdphoneNumberNode.innerHTML = document.getElementById("phoneNumber").value;

        var tdstreetAddress1Node = document.createElement("td") ;
        tdstreetAddress1Node.innerHTML = document.getElementById("streetAddress1").value + document.getElementById("streetAddress2").value;

        var tdstreetAddress2Node = document.createElement("td") ;
        tdstreetAddress2Node.innerHTML = document.getElementById("streetAddress2").value;

        var tdcityNode = document.createElement("td") ;
        tdcityNode.innerHTML = document.getElementById("city").value;

        var tdstateNode = document.createElement("td") ;
        tdstateNode.innerHTML = document.getElementById("state").value;

        var tdzipcodeNode = document.createElement("td") ;
        tdzipcodeNode.innerHTML = document.getElementById("zipcode").value;

        var tdcommentsrNode = document.createElement("td") ;
        tdcommentsrNode.innerHTML = document.getElementById("comments").value;

        var tdratingNode = document.createElement("td") ;
        tdratingNode.innerHTML = document.getElementById("rating").value;

        var tdtextFieldNode = document.createElement("td") ;
        tdtextFieldNode.innerHTML = document.getElementById("textField").value;

    
        trNode.appendChild(tdNameNode) ;
        trNode.appendChild(tdEmailNode) ;
        trNode.appendChild(tdphoneNumberNode) ;
        trNode.appendChild(tdstreetAddress1Node) ;
        trNode.appendChild(tdstreetAddress2Node) ;
        trNode.appendChild(tdcityNode) ;
        trNode.appendChild(tdstateNode) ;
        trNode.appendChild(tdzipcodeNode) ;
        trNode.appendChild(tdcommentsrNode) ;
        trNode.appendChild(tdratingNode) ;
        trNode.appendChild(tdtextFieldNode) ;
        tbody.appendChild(trNode) ;

        resultsTable.style.display = 'block';
           

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('emailId').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('streetAddress1').value = '';
        document.getElementById('streetAddress2').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
        document.getElementById('zipcode').value = '';
        document.getElementById('comments').value = '';


        const checkboxes = document.querySelectorAll('input[name="source"]');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
         });
        
        const titleRadios = document.querySelectorAll('input[name="title"]');
        titleRadios.forEach((radio) => {
         radio.checked = false;
         });

        const ratingSelect = document.getElementById('rating');
        ratingSelect.selectedIndex = -1;

        const ratingCheckbox = document.getElementById('enableText');
         ratingCheckbox.checked = false;

        const textFieldContainer = document.getElementById('text-field-container');
        textFieldContainer.style.display = 'none';


        const textField = document.getElementById('textField');
        textField.value = '';

    });
    