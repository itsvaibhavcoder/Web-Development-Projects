var countries = []

$.ajax({
    url:"https://api.covid19api.com/summary",
    type:'get',
    dataType:"json",

    success:function(response){
        countries = response.Countries;
        updatetable(countries);
    
    },
    error: function(error){
        console.log(error)
    },
    always:{}
})

updatetable =(countries) =>{
    for(country of countries){
        var newrow = "<tr><td>"+country.Country+"</td><td>"+country.TotalConfirmed+"</td><td>"+country.TotalRecovered+"</td><td>"+country.TotalDeaths+"</td></tr>"
       
        $("#tablebody").append(newrow)
    }

    $("#covidtable").DataTable();
}