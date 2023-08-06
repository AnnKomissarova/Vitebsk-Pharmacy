
function countFunc(count) {
    var btnPlus = count.querySelector('.plus-btn');
    var btnMinus = count.querySelector('.minus-btn');
    var field = count.querySelector('.number');
    var fieldValue = parseFloat(field.value, 10);
  
    btnMinus.addEventListener('click', function() {
      if (fieldValue > 1) {
        fieldValue--;
        field.value = fieldValue;
      } else {
        return 1;
      }
    });
    btnPlus.addEventListener('click', function() {
      fieldValue++;
      field.value = fieldValue;
    });
  console.log('yes')
  }
  var counts = document.querySelectorAll('.card-quantity');
  counts.forEach(countFunc);