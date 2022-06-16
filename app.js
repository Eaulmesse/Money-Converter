var url;
const btnSend = document.getElementById("btn-send");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("input-text");
const resultText = document.getElementById("result-text");


url = `https://api.apilayer.com/exchangerates_data/convert?to=AUD&from=AUD&amount=1`;

from.addEventListener("change", ()=> {
    url = `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`;
    console.log(url);
})

to.addEventListener("change", ()=> {
    url = `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`;
    console.log(url);
})

amount.addEventListener("change", ()=> {
    url = `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`;
    console.log(url);
})

console.log(btnSend)


btnSend.addEventListener("click", ()=> {
    console.log(url);
    

    var myHeaders = new Headers();
    myHeaders.append("apikey", "bCECUXUm0CtUaLzRFX1GHGHrgrcKHO61");
  
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        resultText.textContent = response.result;
        
    })

    .catch(error => console.log(error));

})


var symbolHeaders = new Headers();
symbolHeaders.append("apikey", "bCECUXUm0CtUaLzRFX1GHGHrgrcKHO61");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: symbolHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(symbol => symbol.json())
  .then(symbol =>  {
    
    let symbols = symbol.symbols;
    console.log(symbols);
    for(let element in symbols)  {
        let option = document.createElement('option')
        from.appendChild(option)
        option.value = element;
        option.textContent = element; 
    }
    for(let element in symbols)  {
        let option = document.createElement('option')
        to.appendChild(option)
        option.value = element;
        option.textContent = element; 
    }

    




  })
  .catch(error => console.log('error', error));








