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

      $('#breed-selection').append('<option ' + 'value=' + "'" + breed + "'" + '>' + breed + '</option>');
      $('#country-selection').append('<option ' + 'value=' + "'" + country + "'" + '>' + country + '</option>');
      $('#origin-selection').append('<option ' + 'value=' + "'" + origin + "'" + '>' + origin + '</option>');
      $('#coat-selection').append('<option ' + 'value=' + "'" + coat + "'" + '>' + coat + '</option>');
      $('#pattern-selection').append('<option ' + 'value=' + "'" + pattern + "'" + '>' + pattern + '</option>');
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
  var breedResult = document.getElementById(breed-selection);
  // var countryResult = document.getElementById(country);
  // var originResult = document.getElementById(origin);
  // var coatResult = document.getElementById(coat);
  // var patternResult = document.getElementById(pattern);
  console.log(breedResult.options[breedResult.selectedIndex].value);
  // console.log(countryResult.options[countryResult.selectedIndex].value);
  // console.log(originResult.options[originResult.selectedIndex].value);
  // console.log(coatResult.options[coatResult.selectedIndex].value);
  // console.log(patternResult.options[patternResult.selectedIndex].value);
};

function nextPage() {
  $.ajax({
    url: "https://catfact.ninja/breeds?"
  }).done(function(data) {
    $('#cat-card-list').append(JSON.stringify(data))
  });
}
