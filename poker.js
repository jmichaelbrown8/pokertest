function compute_poker_rank( card1, card2, card3, card4, card5 ) {
 //create a list of the cards to count duplicates
 var card_list = [card1, card2, card3, card4, card5];
 
 //if any two are the exact same card, return 0
 for (var i = 0; i < 5; i++) {
 
	if (count(card_list[i], card_list) > 1) {
		return 0;
	
	}
 }
 
 //from here you know the cards are unique
 //split card to face and suit
 var suit_list = [];
 var value_list = [];
 for (var i = 0; i < 5; i++) {
	var temp_array = card_list[i].split('');
	value_list[i] = temp_array[0];
	suit_list[i] = temp_array[1];
 }
 //now I have lists of values and suits separated
 //if there are any duplicate face values, straight or flush is not possible
 //and since a pair is the most common, this will eliminate the need to test for straight or flush
 
 //create a list of how many times each face value occurs
 var occurs = [];
 for (var i = 0; i < 5; i++) {
	occurs[i] = count(value_list[i], value_list);
 }
 
 
 //4 of any occurrence means 4 of a kind
 if (count(4, occurs) > 0) {
	return 8
 }
 
 switch (count(1, occurs)) {
  
 //3 single occurences means pair
 case 3:
	return 2;
 
 //2 single occurences means 3 of a kind
 case 2:
	return 4;
 
 //1 single occurence means 2 pair
 case 1:
	return 3;
 }
 
 //3 of any occurence (after the 3 of a kind from above has been eliminated) means full house
 if (count(3, occurs) > 0) {
	return 7;
 }
 
 //5 single cards, test for flush and straight

 
 var flush = false;
 //check for flush first
 if (count(suit_list[0], suit_list) == 5) {
	flush = true;
 }
 
 //then check for straight 
 var straight = check_seq(value_list);
 
 
 //if both flush and straight, return 9 for straight flush
 if (flush && straight) {
	return 9;
 }
 
 //if flush, return 6 
 if (flush && !straight) {
	return 6;
 }

 //if straight, return 5
 if (straight && !flush) {
	return 5;
 }
 
 //otherwise, it's just a high card, return 1
 return 1;
 
}

function count(item, list) {
	//count the number of times the item is in the list
	
	//could sort the list, then break out after the total count has been found
	//list.sort();
	
	c = 0;
	for (var i=0; i<list.length; i++) {
		if (list[i] == item) {
			c += 1;
		}
	}
	return c;

}


function check_seq(list) {

	var num_list = [];
	index = 0;
	for (var i=0; i<list.length; i++) {
		var each = list[i];
		if (!isNaN(each)) {
			num_list[index] = parseInt(each);
			index += 1;
		}
	}

	var length = num_list.length;
	if (length == 0) {
		//all royal cards
		//since I already checked for duplicate face values, this must be sequential
		return true;
	}
	
	
	//if it has made it past the last test, any ace must be at the head of an Ace through 5 straight
	var possible = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]
	
	var value_list = [];
	
	for (var i=0; i<list.length; i++) {
		var each = list[i];
		value_list[i] = possible.indexOf(each);
	}	
	
	
	//sort the values numerically rather than lexicographical (I had to do quite a bit of searching online to figure out how to do this)
	value_list.sort(function(a,b) {return a-b;});
	
	
	//subtract the min from the max and if it equals the length of the array minus 1, it's sequential
	var max = value_list[length-1];
	var min = value_list[0];
	
	if (max-min == length-1) {
		return true;
	}
	
	//otherwise it is not
	
	return false;	

}


var test1 = compute_poker_rank( "AC", "5D", "6S", "7H", "8D" ); // should return 1 (high card)
var test2 = compute_poker_rank( "AH", "AC", "JH", "QH", "KH" ); // should return 2 (pair)
var test3 = compute_poker_rank( "KD", "KC", "7C", "7H", "2H" ); // should return 3 (two pair)
var test4 = compute_poker_rank( "5D", "5C", "5H", "2H", "9H" ); // should return 4 (three of a kind)
var test5 = compute_poker_rank( "AC", "2D", "3S", "4H", "5D" ); // should return 5 (straight)
var test6 = compute_poker_rank( "4H", "8H", "JH", "QH", "KH" ); // should return 6 (flush)
var test7 = compute_poker_rank( "KD", "KC", "7C", "7D", "7S" ); // should return 7 (full house)
var test8 = compute_poker_rank( "5H", "5D", "5C", "5S", "2H" ); // should return 8 (4 of a kind)
var test9 = compute_poker_rank( "5H", "6H", "7H", "8H", "9H" ); // should return 9 (straight flush)
var test0 = compute_poker_rank( "5H", "5H", "5H", "5H", "5H" ); // should return 0 (invalid hand)

document.writeln(test1, test2, test3, test4, test5, test6, test7, test8, test9, test0); // should be 1234567890
