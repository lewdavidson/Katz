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
      $('#cat-card-list').append('<div>' + '<ul>' + '<li>' + 'Breed: ' + breed + '</li>' + '<li>' + 'Country: ' + country + '</li>' + '<li>' + 'Origin: ' + origin + '</li>' + '<li>' + 'Coat: ' + coat + '</li>' + '<li>' + 'Pattern: '+ pattern + '</li>' + '</ul>' + '</div>');

      $( '#show-all').hide();
      $('#results-by').html('All')

      $('#breed').append('<option ' + 'value=' + "'" + breed + "'" + '>' + breed + '</option>');
      $('#country').append('<option ' + 'value=' + "'" + country + "'" + '>' + country + '</option>');
      $('#origin').append('<option ' + 'value=' + "'" + origin + "'" + '>' + origin + '</option>');
      $('#coat').append('<option ' + 'value=' + "'" + coat + "'" + '>' + coat + '</option>');
      $('#pattern').append('<option ' + 'value=' + "'" + pattern + "'" + '>' + pattern + '</option>');
    });
  });

  $('#filter-tag').click(function(){
    $('.filter-bar').toggleClass('open-bar');
    $("#breed").val('breed');
    $("#coat").val('coat');
    $("#country").val('country');
    $("#origin").val('origin');
    $("#pattern").val('pattern');
    $( '#cat-result-display').empty();
    $('.filter-memo').hide();
  });

  $('#search').click(function(){
    $('.filter-bar').toggleClass('open-bar');
    $('.filter-memo').show();
  });

});

function showAll() {
  $( '#cat-result-display').hide();
  $( "#cat-card-list" ).show();
  $( '#show-all').hide();
  $('#filter-tag').show();
  $('#results-by').html('All')
};
