const btn = document.querySelector("#findNumber")
const number = document.querySelector("#numberInput")
const modalObj = new bootstrap.Modal('#responseModal')
const responseContainer = document.querySelector("#responseContainer")
btn.addEventListener("click", () => {
  let url = `https://api.apilayer.com/number_verification/validate?number=${number.value}`;
  const handleResponse = (e) =>{
    if(request.readyState == 4 && request.status == 200){
        let response = JSON.parse(request.responseText)
        console.log(response)
        responseContainer.innerHTML = JSON.stringify(response,null,"<br/>").replaceAll('"',"").replaceAll("{","").replaceAll("}","")
        modalObj.show()
    }
    else if(request.readyState == 4 && request.status > 200){
        console.log(request.responseText)
        alert("Something went wrong!")
    }
  }
  let request = new XMLHttpRequest()
  request.open('GET',url,true)
  request.setRequestHeader("apikey","DGrToHNageCBflCpZ6G5YCb5HDhsalsH")
  request.setRequestHeader("Content-Type","application/json")
  request.send()
  request.onreadystatechange = handleResponse

  number.value = "";
});
