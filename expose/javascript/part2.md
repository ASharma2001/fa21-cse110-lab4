1) It returns 3. *i* is a var, so it can be accessed beyond the scope of the for loop. Since it is called after the for loop, it will be 3 since it is incremented 3 times from 0.
   
2) It returns 150. *discountedPrice* is a var, so it can be accessed beyond the scope of the for loop. Since it is called after the for loop, it will return the last arthimetic is did, which is 300 * 0.5.
   
3) It returns 150. *finalPrice* is changed during each iteration of the loop, so it will be the last computation done inside the for loop, which is (150 * 100) / 100.
   
4) It returns a array containing [50, 100, 150]. We add the *finalPrice* during each iteration, so the function will return the discounted price for each price.
   
5) It returns an error. *i* is not defined in this scope, only in the for loop, so we can't access it.
   
6) It returns an error. *discountedPrice* is not defined in this scope, only in the for loop, so we can't access it.
   
7) It returns 150. *finalPrice* is is defined in the outer most scope of the function and allowed to be modified in the for loop, so it will be 150.
   
8) It returns a array containing [50, 100, 150]. *discounted* is defined in the outer most scope of the function, so it is allowed to be modified in the for loop.
   
9)  It returns an error. *i* is not defined in this scope, only in the for loop, so we can't access it.
    
10) It returns 3. 
    
11) It returns a array containing [50, 100, 150]. Even though *discounted* is a const, we are allowed to modify the array, but not reassign a value to *discounted*
    
12) 
    a) student.name
    b) student['Grad Year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student.courseLoad[0] 

13)
    a) 32. It is the concatenation of the two items since '3' is a string.
    b) 1. "3" is converted to a numeric value.
    c) 3. the null is converted to a numeric value 0.
    d) 3null. The *null* is converted to a string "null"
    e) 4. the numeric value of *true* is 1.
    f) 0. the numeric values of *false* and *null* are 0
    g) 3undefined. the *undefined* is turned into the string "undefined"
    h) NaN. the numeric value of *undefined* is *NaN*, so it outputs *NaN*

14)
    a) true. The *2* is converted to a number.
    b) true. both the *2* and *12* are converted to numbers and compared
    c) true. This is a shallow equal, so the string *2* is converted to a number.
    d) false. This is a deep equal, and will check the type. Since one is type *number* and the other *string*, it is false
    e) false. a *boolean* is equal to 1, not 2.
    f) true. The *Boolean* is assigned to true since it is not 0, and the other side is true so it evaluates to true.

15)  The *==* is a shallow equality, which checks if they are equal regardless of type. The *==* checks both the value and its type.
    
16) check js file
    
17) Overview, the function is simply multiplying each element in an array by 2 and outputing the modified array. It does this by looping through each element. For each element, it calls a function that 
    returns the doubled value of the element. Then we add this element to an array and return the updated array. So then our output for the input [1, 2, 3] will be [2, 4, 6].
  
18) check js file
    
19) 1 4 2 3 