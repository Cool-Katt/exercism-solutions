Class {
	#name : #RomanNumerals,
	#superclass : #Object,
	#category : #'Exercise@RomanNumerals'
}
{ #category : #'as yet unclassified' }
RomanNumerals >> romanNumber: roman [
	| ones tens hnds thns |
   thns := #('' 'M' 'MM' 'MMM').
	hnds := #('' 'C' 'CC' 'CCC' 'CD' 'D' 'DC' 'DCC' 'DCCC' 'CM').
	tens := #('' 'X' 'XX' 'XXX' 'XL' 'L' 'LX' 'LXX' 'LXXX' 'XC').
	ones := #('' 'I' 'II' 'III' 'IV' 'V' 'VI' 'VII' 'VIII' 'IX').
	^ (thns at: (roman // 1000) + 1),
	  (hnds at: ((roman \\ 1000) // 100) + 1),
	  (tens at: ((roman \\ 100) // 10) + 1),
	  (ones at: (roman \\ 10) + 1).
]
