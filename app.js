$(document).ready(function(){
  console.log('jQuery loaded');

  var valuesArr = [];

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    valuesArr.push($('.text-entry').val())
    localStorage.setItem('valuesArrKey', JSON.stringify(valuesArr));
    console.log(localStorage);
    var myItemInStorage = JSON.parse(localStorage.getItem('valuesArrKey'));
    // console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.clear();
    location.reload();
  });

});