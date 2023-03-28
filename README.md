# Funderbar
Fundamentals version of underbar.

# usaf-sdi-funderbar

# Funderbar

This project was written in the same spirit as
[JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans), and thusly
uses the [Mocha Test Suite](http://visionmedia.github.io/mocha) to facilitate a
TDD approach to learning. It walks you through a reimplementation of
[underscore.js](https://underscorejs.org/), a popular collection of useful functions, 
authored by Jeremy Ashkenas.

Funderbar is different from Underbar in the way that it focuses primarialy on Vanilla JavaScript. Using variables, basic loops, and basic logical operations. 

# Objectives
* Implement functions and methods using classic and modern JS
* Apply problem solving skills (IOCE, recursion) to solve complex problems
* Manage state using closures and scope
* Employ debugging strategies for troubleshooting
* Implement DRY best practices
* Engage in the pair programming process
* Interact with teammates through utilizing soft skills


## Goals

As is, the repository is missing code for most of the functions. It's your job
to fix the library by implementing them. The functions are split in two sections,
with a separate test suite for each. Everywhere you see FILL_ME_IN you need to replace it
with the correct outcome. 

The files in the `spec` directory contain the test suites. Your goal is to get all
the tests to pass by implementing the missing functions. Run all the tests by
opening `SpecRunner.html` in your browser.

The file `src/funderbar.js` contains function definitions and explanations for
the following functions (*italicized functions* are solved for you). Implement
each of the functions by making all of the tests pass:

#### Part I (Variables):
- [ ] define
- [ ] *dataType*
- [ ] sum
- [ ] subtract
- [ ] multiply
- [ ] divide
- [ ] modulus
- [ ] increment
- [ ] decrement
- [ ] *mathOrder*

#### Part II (Logical):
- [ ] same
- [ ] greater
- [ ] lessThan
- [ ] falsyOrTruthy
- [ ] andand
- [ ] oror
- [ ] ifLogic
- [ ] ifElseLogic
- [ ] forIfElseNum
- [ ] forIfElseStr
- [ ] ifElseFor

#### Extra Credit:
- [ ] invoke
- [ ] sortBy
- [ ] zip
- [ ] flatten
- [ ] intersection
- [ ] difference
- [ ] throttle


## Extra Extra Credit

- Fork and Clone the [underbar.js](https://github.com/gSchool/sdi-workshop-underbar/)
  implementation and test suite, and try to understand how it works. A great way
  to do this is to break parts of the code and see which tests fail.
- Compare your implementations to the ones in the real library. Notice that this
  assignment has stripped out some complexity from the original library; notice
  where these changes have been made, and try to understand what edge cases the
  original library is handling that your functions aren't.