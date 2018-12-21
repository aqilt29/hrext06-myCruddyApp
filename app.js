$(document).ready(function(){
  console.log('jQuery loaded');
  console.log(localStorage)
  var permCount;
  if(localStorage.length < 1){
    permCount = 1000;
  } else {
    var ctr = localStorage.key(localStorage.length - 1);
    permCount = JSON.parse(ctr) + 1;
  }

  var addZeroes = (num) => {
     return num.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})
  }


  var generateTable = () =>{
    $('#list-items').html('');
    for(var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(`${i}`);
      var data = JSON.parse(localStorage[key]);
      var eDate = data[0];
      var eCat = data[1];
      var eAmt = (parseFloat(data[2]) < 1) ? data[2] : addZeroes(parseFloat(data[2]));
      var eID = data[3];

      $('#list-items').append(`
            <tr>
              <td class='idNum'>${eID}</td>
              <td>${eDate}</td>
              <td>${eCat}</td>
              <td align="right">$${eAmt}</td>
              <td><button class='delBtn'>Delete</button></td>
              <td><button class='editBtn'>Edit</button></td>
            </tr>`)
    }
      $('.delBtn').on('click',function(){
        var localID = $(this).closest('tr').find('.idNum').text();
        localStorage.removeItem(`${localID}`);
        this.closest('tr').remove();
        location.reload();
      });

      $('.editBtn').on('click', function(){
        var localID = $(this).closest('tr').find('.idNum').text();
        var lineItemArr = JSON.parse(localStorage[localID]);
        var itemDate = $('#expense-date').val();
        var itemCat = $('#expense-cat').val();
        var itemAmt = $('#expense-amount').val();

        if(itemDate.length > 1){
          lineItemArr[0] = itemDate;
        }
        if(itemCat !== null){
          lineItemArr[1] = itemCat;
        }
        if(itemAmt > 0.01){
          lineItemArr[2] = itemAmt;
        }

        localStorage[localID] = JSON.stringify(lineItemArr);
        location.reload();
      });
  }


  generateTable();



  $('.enterBtn').on('click', function(){
    var itemDate = $('#expense-date').val();
    var itemCat = $('#expense-cat').val();
    var itemAmt = $('#expense-amount').val();
    var index =  permCount;
    permCount++;

    var valuesArr = [itemDate, itemCat, itemAmt, index];
    localStorage.setItem(index, JSON.stringify(valuesArr));
    location.reload();
  });


  $('#refresh').on('click', generateTable);



});