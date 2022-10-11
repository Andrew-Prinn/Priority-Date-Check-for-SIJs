function submitFunction() {
    let countrySelection = document.getElementById("countries");
    let dateSelection = document.getElementById("myDate");
    let dateOfFiling = new Date(dateSelection.value);
    let FinalActionEGH = new Date('03/15/2018') //Thomas, this date will be updated via webscraping. The Value FinalActionEGH means the final action date for El Salvador, Guatemala, and Honduras. 3/15/2018 is the final action date for October. 
    let FinalActionMex = new Date('09/15/2020') //This is the other date to update via webscraping. It means final action date for Mexico. 

    if (countrySelection.value == "no selection"){
        alert("Please make a selection.");
        return;
    }
    if (dateSelection.value == ""){
        alert("Please make a selection.");
        return;
    }
    if (dateOfFiling > FinalActionEGH && countrySelection.value == "el salvador" ||
        dateOfFiling > FinalActionEGH && countrySelection.value == "guatemala" ||
        dateOfFiling > FinalActionEGH && countrySelection.value == "honduras" || 
        dateOfFiling > FinalActionMex && countrySelection.value == "mexico") {
            document.getElementById("result").innerHTML = "Your filing date is not current, so you cannot apply for your green card at this time. Please check again next month.";
        }
    else {
        document.getElementById("result").innerHTML = "Your filing date is current. Consult with an attorney about applying for a green card.";
    }
}

