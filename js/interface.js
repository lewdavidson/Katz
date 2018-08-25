$(document).ready(function(){

  $.ajax({
    url: "https://catfact.ninja/breeds?limit=98"
  }).done(function(data) {
    var info = data.data;
    info.forEach(function(item){
      var breed = item.breed;
      var country = item.country;
      var origin = item.origin;
      var coat = item.coat;
      var pattern = item.pattern;


      $('#cat-card-list').append('<ul>' + '<li>' + 'Breed: ' + breed + '</li>' + '<li>' + 'Country: ' + country + '</li>' + '<li>' + 'Origin: ' + origin + '</li>' + '<li>' + 'Coat: ' + coat + '</li>' + '<li>' + 'Pattern: '+ pattern + '</li>' + '</ul>');

      $('#breed').append('<option ' + 'value=' + "'" + breed + "'" + '>' + breed + '</option>');
      $('#country').append('<option ' + 'value=' + "'" + country + "'" + '>' + country + '</option>');
      $('#origin').append('<option ' + 'value=' + "'" + origin + "'" + '>' + origin + '</option>');
      $('#coat').append('<option ' + 'value=' + "'" + coat + "'" + '>' + coat + '</option>');
      $('#pattern').append('<option ' + 'value=' + "'" + pattern + "'" + '>' + pattern + '</option>');
    });
  });

  $('.filter-tag').click(function(){
    $('.filter-bar').toggleClass('open-bar');
  });

  $('#search').click(function(){
    $('.filter-bar').toggleClass('open-bar');
  });

});

function filterCats(breed, country, origin, coat, pattern) {
  var breedResult = document.getElementById('breed');
  var countryResult = document.getElementById('country');
  var originResult = document.getElementById('origin');
  var coatResult = document.getElementById('coat');
  var patternResult = document.getElementById('pattern');
  if(breedResult.options[breedResult.selectedIndex].value) {
    var breedSearch = breedResult.options[breedResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data) {
      var info = data.data;
      info.forEach(function(item){
        var breed = item.breed;
        var country = item.country;
        var origin = item.origin;
        var coat = item.coat;
        var pattern = item.pattern;
        if(breed === breedSearch) {
          $('#cat-card-list').html('<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>');
          $("#breed").val('breed');
        };
      });
    });
  } else if(countryResult.options[countryResult.selectedIndex].value){
    var countrySearch = countryResult.options[countryResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var country = item.country;
        if(country === countrySearch) {
          $('#cat-card-list').append('<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>');
          $("#country").val('country');
        };
      });
    });
  } else if(coatResult.options[coatResult.selectedIndex].value){
    var coatSearch = coatResult.options[coatResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var coat = item.coat;
        if(coat === coatSearch) {
          $('#cat-card-list').append('<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>');
          $("#coat").val('coat');
        };
      });
    });
  } else if(originResult.options[originResult.selectedIndex].value){
    var originSearch = originResult.options[originResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var origin = item.origin;
        if(origin === originSearch) {
          $('#cat-card-list').append('<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>');
          $("#origin").val('origin');
        };
      });
    });
  } else if (patternResult.options[patternResult.selectedIndex].value){
    var patternSearch = patternResult.options[patternResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var pattern = item.pattern;
        if(pattern === patternSearch) {
          $('#cat-card-list').append('<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>');
          $("#pattern").val('pattern');
        };
      });
    });
  };
};
