#!/bin/bash

first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0
greeting_limit=1
files=./HTML/*


#conditions should be enclosed in []
while [ $greeting_occasion -lt $greeting_limit ]
do
  if [ $greeting_occasion -lt 1 ]
  then
    echo $first_greeting
  else
    echo $later_greeting
  fi
  greeting_occasion=$((greeting_occasion + 1))
done
 

#Equal: -eq
#Not equal: -ne
#Less than or equal: -le
#Less than: -lt
#Greater than or equal: -ge
#Greater than: -gt
#Is null: -z
#if [ "$foo" == "$bar"] #Put variables enclosed in "" when comparing strings

echo ""
echo "Printing files in HTML"
for file in $files
do
  echo $file
done

#while [ $index -lt 5 ]
#do
#  echo $index
#  index=$((index + 1))  #arithemetic operation requires $(( ))
#done


#until [ $index -eq 5 ]
#do
#  echo $index
#  index=$((index + 1))
#done

echo "Guess a number"
read number
echo "You guessed $number"
