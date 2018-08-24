$(document).ready(function(){
  $('.filter-tag').click(function(){
    $('.filter-bar').toggleClass('open-bar');
  });
  $('#search').click(function(){
    $('.filter-bar').toggleClass('open-bar');
  });
});

function filterCats(breed, country, origin, coat, pattern) {
  var breedResult = document.getElementById(breed);
  var countryResult = document.getElementById(country);
  var originResult = document.getElementById(origin);
  var coatResult = document.getElementById(coat);
  var patternResult = document.getElementById(pattern);
  console.log(breedResult.options[breedResult.selectedIndex].value);
  console.log(countryResult.options[countryResult.selectedIndex].value);
  console.log(originResult.options[originResult.selectedIndex].value);
  console.log(coatResult.options[coatResult.selectedIndex].value);
  console.log(patternResult.options[patternResult.selectedIndex].value);
};
