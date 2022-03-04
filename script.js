API_KEY = "68b50bd6db2857096c2eae360417db21"
let latitude = null
let longitude = null

// Dados do tempo
let sensacaoTermica = null
let humidade = null
let pressaoATM = null
let tempreraturaMedia = null
let temperaturaMax = null
let temperaturaMin = null
let cidade = null
let pais = null

localizarUsuario()

function localizarUsuario() {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude

        const promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)

        promessa.then(resposta => {
            console.log(resposta.data)
    
            sensacaoTermica = resposta.data.main.feels_like
            humidade = resposta.data.main.humidity
            pressaoATM = resposta.data.main.pressure
            tempreraturaMedia = resposta.data.main.temp
            temperaturaMax = resposta.data.main.temp_max
            temperaturaMin = resposta.data.main.temp_min
            cidade = resposta.data.name
            pais = resposta.data.sys.country

            const city = document.querySelector(".city")
            const temp = document.querySelector(".container-temp div")
            const tempMaxMin = document.querySelector(".low-high")
            const sensation = document.querySelector(".sensation")
            const humity = document.querySelector(".humity")
            const pressure = document.querySelector(".pressure")

            city.innerHTML = cidade
            temp.innerHTML = tempreraturaMedia
            tempMaxMin.innerHTML = `${temperaturaMax}/${temperaturaMin}`
            sensation.innerHTML = sensacaoTermica
            humity.innerHTML = humidade
            pressure.innerHTML = pressaoATM
        })
    
        promessa.catch(erro => {
            console.log(erro.data)
        })
    });
    
}

function obterDadosTempo() {
    const cidadeUsuario = document.querySelector("input").value

    if (cidadeUsuario !== "") {
        const promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeUsuario}&units=metric&appid=${API_KEY}`)

        promessa.then(resposta => {
            console.log(resposta.data)
    
            sensacaoTermica = resposta.data.main.feels_like
            humidade = resposta.data.main.humidity
            pressaoATM = resposta.data.main.pressure
            tempreraturaMedia = resposta.data.main.temp
            temperaturaMax = resposta.data.main.temp_max
            temperaturaMin = resposta.data.main.temp_min
            cidade = resposta.data.name
            pais = resposta.data.sys.country

            const city = document.querySelector(".city")
            const temp = document.querySelector(".container-temp div")
            const tempMaxMin = document.querySelector(".low-high")
            const sensation = document.querySelector(".sensation")
            const humity = document.querySelector(".humity")
            const pressure = document.querySelector(".pressure")

            city.innerHTML = cidade
            temp.innerHTML = tempreraturaMedia
            tempMaxMin.innerHTML = `${temperaturaMax}/${temperaturaMin}`
            sensation.innerHTML = sensacaoTermica
            humity.innerHTML = humidade
            pressure.innerHTML = pressaoATM
        })
    
        promessa.catch(erro => {
            console.log(erro.data)
        })
    } else {
        alert("Insira o nome de uma cidade")
    }

}

function exibirDados() {
    
}
