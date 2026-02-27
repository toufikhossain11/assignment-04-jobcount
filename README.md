## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

   Ans:
   
  1. getElementById() = getElementById() is a selecter that is Select one element, Works only with id .
 
 2. getElementsByClassName() = Selects multiple elements, Updates automatically when DOM changes.
 
 3. querySelector() = Selects the first matching element.
 
 4. querySelectorAll() = Selects all matching elements.

 ## 2. How do you create and insert a new element into the DOM?

Ans:

   Frist of all create element then add content/class then insert into DOM.

   ## 3. What is Event Bubbling? How does it work?

Ans:

   An event starts from the target element Then moves upward through parent elements.

## 4. What is Event Delegation? Why is it useful?
Ans:

Add one event listener to a parent Handle events for child elements using event.target.

   Why it’s useful: 
   Better performance, Less memory usage, Works for dynamically added elements.

## 5. Difference between preventDefault() and stopPropagation()

Ans:

preventDefault() is Stops default browser behavior.

or

stopPropagation() is Stops event bubbling.
   
