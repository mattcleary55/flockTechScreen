# Flock Tech Screen
In a language of your choice, please write a program which accepts as input two arbitrarily nested arrays of strings, and returns the sum of the number of necessary one character substitutions multiplied by 2 to the power of the depth of nesting at which substitution must occur

For example:

```
yourFunction(
["I", ["love"], [[["awesome", "shiny"]]], "drones"],
["I", ["hate"], [[["magenta", "dirty"]]], "drains"]
)
``` 
should return `2(3) + 8(7 + 4) + 3 = 97`

If the levels of nesting or the lengths of the strings do not match, return `-1` so:
`yourFunction(["I", ["love"], [["awesome"]], "drones], ["I, ["hate"], [[["magenta"]]], "drains")` should return `-1`

If the lengths of any fragment differ, return `-1` so:
`yourFunction(["I", ["adore"], [[["red"]]], "drones], ["I, ["hate"], [[["magenta"]]], "drains")` should return `-1`


## Questions
  ### 1) What assumptions did you make?
  Key assumption was that I'd only ever be dealing with strings and arrays.
  ### 3) What is the Big O of your solution? Please justify your answer.
  O(KN^M) Where K is the is the max size of the strings (elements) in the array. N is the length of the array. M is the depth of nested arrays. Each nested level could have a bunch more nested lists, hence the exponent.
  
  ### 4) In what ways do you feel your code could be improved?
  Aside from being better prepared to handle assumptions. I'm sure it can be refactored for readability and conciseness. I need to improve my commenting style. I'm sure that there's a faster way to do this, likely without recursion but I feel I've gotten a good balance of speed and readability.
  ### 5) What tests (if any) have you written? What tests do you feel you could still write?:
  I wrote a small suite of tests to test for both sucessful and non-successful cases. I used Mocha and Chai to do so.
The test I wrote made sure that: 
1) If the levels of nesting or lengths of the strings did not match, it would return '-1';
2) If the lengths of the fragments differ, it woudl return '-1';
3) That otherwise, it would return the sum of the number of necessary one character substitutions multiplied by 2 to the power of the depth of nesting at which substitution must occur. 

Ideally I'd like to have used an external library to randomly generate strings.
  ### 6) How do we run your code?: 
  Clone and download the repository to your local machine. Assuming you have both node and npm installed. Run `npm install` to install the dependencies. Then run `npm test`.
