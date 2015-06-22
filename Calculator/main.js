
var numArr = [];

$(document).ready(function(){

	$('.number').hover(function(){
		$(this).backgroundColor='red';
	})

	$('.number').click(function(digit){

		$('#display').append(this.value);
		numArr.push(this.value);

	})

	$('.clear').click(function(){

		$('#display').val(" ");
	})
	$('#dot').click(function(){
		if($('#display').text().indexOf(".")===-1){
			$('#display').append(this.value);
		}
	});
	$('.operator').click(function (){

	 	$('#display').append(this.value);
		numArr.push(this.value);

	});
	$('.operatorequal').click(function(){
		var operator = numArr[1];
		switch(operator) {
    case '+':
				var num0 = numArr[0]*1;
				var num9 = numArr[2]*1;
				var total = num0+num9;

				$('#display').text(total);

    case '*':
		var num3 = numArr[0]*1;
		var num4 = numArr[2]*1;
		var total1 = num3*num4;
		$('#display').text(total1);

		case '/':
		var num5 = numArr[0]*1;
		var num6 = numArr[2]*1;
		var total2 = num5/num6;
		$('#display').text(total2);

		case '-':
		var num7 = numArr[0]*1;
		var num8 = numArr[2]*1;
		var total3 = num7-num8;
		$('#display').text(total3);



}

	});
})
