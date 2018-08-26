function filterCats(breed, country, origin, coat, pattern) {
  $( "#cat-card-list" ).hide();
  $ ('#cat-result-display').show();
  $( '#show-all').show();
  $( '#filter-tag').hide();
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
        if(breed === breedSearch) {
          $('#cat-result-display').append('<div>'+ '<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>' + '</div>');
          $('#results-by').html('Breed: ' + breedSearch);
        };
      });
    });
  };
  if(countryResult.options[countryResult.selectedIndex].value){
    var countrySearch = countryResult.options[countryResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var country = item.country;
        if(country === countrySearch) {
          $('#cat-result-display').append('<div>' + '<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>' + '</div>');
          $('#results-by').html('Country: ' + countrySearch);
        };
      });
    });
  };
 if(coatResult.options[coatResult.selectedIndex].value){
    var coatSearch = coatResult.options[coatResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var coat = item.coat;
        if(coat === coatSearch) {
          $('#cat-result-display').append( '<div>' + '<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>' + '</div>');
          $('#results-by').html('Coat: ' + coatSearch);
        };
      });
    });
  };
  if(originResult.options[originResult.selectedIndex].value){
    var originSearch = originResult.options[originResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var origin = item.origin;
        if(origin === originSearch) {
          $('#cat-result-display').append('<div>' + '<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>' + '</div>' );
          $('#results-by').html('Origin: ' + originSearch);
        };
      });
    });
  };
  if (patternResult.options[patternResult.selectedIndex].value){
    var patternSearch = patternResult.options[patternResult.selectedIndex].value;
    $.ajax({
      url: "https://catfact.ninja/breeds?limit=98"
    }).done(function(data){
      var info = data.data;
      info.forEach(function(item){
        var pattern = item.pattern;
        if(pattern === patternSearch) {
          $('#cat-result-display').append('<div>' + '<ul>' + '<li>' + 'Breed: ' + item.breed + '</li>' + '<li>' + 'Country: ' + item.country + '</li>' + '<li>' + 'Origin: ' + item.origin + '</li>' + '<li>' + 'Coat: ' + item.coat + '</li>' + '<li>' + 'Pattern: '+ item.pattern + '</li>' + '</ul>' + '</div>');
          $('#results-by').html('Origin: ' + originSearch);
        };
      });
    });
  };
};
