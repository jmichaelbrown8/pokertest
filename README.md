# pokertest

Given a five card hand from a standard single poker deck of 52 cards, compute an integer which represents the rank of the hand:
 
9 - Straight Flush: Five cards in a row all of the same suit e.g. 2H, 3H, 4H, 5H, 6H
8 - Four of a kind: Four cards of the same rank e.g. KH, KC, KD, KS, **.
7 - Full House: Three cards of the same rank plus a pair e.g. TH, TC, TD, QD, QH.
6 - Flush: Five cards of the same suit, but not in a row. e.g. 2H, 4H, 5H, 8H, JH
5 - Straight: Five cards in a row irregardless of suit e.g. 5H, 6D, 7C, 8C, 9S.
4 - Three of a kind: Three cards of the same rank e.g. JC, JH, JD, **, **.
3 - Two pair: Two pairs e.g. KH, KD, AS, AH, **.
2 - One pair: Any two cards of the same rank e.g. QC, QH, **, **, **.
1 - High card: A valid hand with no other matching sets
   
For your Javascript solution, please define the following method somewhere in your implementation.
 
function compute_poker_rank( card1, card2, card3, card4, card5 )
{
//Your code here
}
 
We will call this function to test your implementation. Here is how we will call this function:
 
compute_poker_rank( "2C", "AS", "8H", "8H", "3D" ); // should return 2 (one pair)
compute_poker_rank( "9H", "TH", "JH", "QH", "KH" ); // should return 9 (straight flush)
compute_poker_rank( "KD", "QC", "7C", "6C", "2H" ); // should return 1 (high card)
compute_poker_rank( "5H", "5H", "5H", "5H", "5H" ); // should return 0 (invalid hand)
 
Characters used for card values: '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'.  Ace should be considered to be high for the straights.
Characters used for card suits: 'C', 'D', 'H', 'S'
 
Criteria:
1. You must code it in Javascript entirely yourself. You may use Javascript libraries like jQuery . We will run it in Google Chrome so no cross browser testing needed.
2. No user interface is necessary, just the function definition of "compute_poker_rank".
3. We will be judging your implementation based on correctness, maintainability, and elegance.