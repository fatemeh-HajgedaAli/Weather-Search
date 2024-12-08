let $=document
let citiesData={
    tehran:{city:'Tehran',temp:12 , weather:'sunny', humidity:23 , windSpeed:130},
    tabriz:{city:'Tabriz',temp:12 , weather:'windy', humidity:10 , windSpeed:32},
    shiraz:{city:'Shiraz',temp:12 , weather:'sunny', humidity:23 , windSpeed:45},
    mashhad:{city:'Mashhad',temp:12 , weather:'rainy', humidity:30 , windSpeed:120},
    esfahan:{city:'Esfahan',temp:12 , weather:'cloudy', humidity:50 , windSpeed:250},
}

let searchBtn=$.querySelector('#search')
let searchBar=$.querySelector('.searchBar')

searchBtn.addEventListener('click',function(){
    searchBarValue=searchBar.value
    let  mainCitiesDatas=citiesData[searchBarValue]

    if(mainCitiesDatas){
        $.querySelector('.city').innerHTML='Weather In  '+mainCitiesDatas.city
        $.querySelector('.temp').innerHTML=mainCitiesDatas.temp+'°C'
        $.querySelector('.description').innerHTML=mainCitiesDatas.weather
        $.querySelector('.humidity').innerHTML='Humidity: '+ mainCitiesDatas.humidity+'%'
        $.querySelector('.wind').innerHTML='WindSpeed:'+mainCitiesDatas.windSpeed+'km/h'
    }else{
        alert('please Select Correct city!')
    }

})