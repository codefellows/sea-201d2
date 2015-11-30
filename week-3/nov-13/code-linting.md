##JavaScript Linting Instructions

We're going to use ESLint. It's by no means the only code linter, or necessarily "the best one," but it's the one we'll use. [This blog post](http://www.sitepoint.com/comparison-javascript-linting-tools/) does a nice job of summarizing things.

Keep in mind that linters can check for style and/or bugs; ESLint does a nice job with both. However, keep in mind the limits of each:

* When checking for style, linters use a pre-determined set of stylistic guidelines that must be configured. The configurations you will receive shortly are adapted from Google's style standards. Other organizations and individuals may choose to adopt OR adapt these standards, or create their very own.

* When checking for bugs, linters will generally catch syntax errors, and that's about it. So, things like typos, missing semicolons, unmatched parens/braces, undeclared/unused variables, and so on, will be caught. Faulty logic, and ineffictive program design, will not.

* Note that due to design choices made by individuals to solve specific problems, sometimes there will be pieces in the programming that the linter complains about but that are actually perfectly fine. It is possible to tell the linter to ignore these things, but do so at your own peril lest you then create problems that the linter should find, but will miss.

**Setting up and using a linter is not a expectation of your class assignments or your final projects for this course. This is being offered as an extension of the material that we have already covered.**

##Setup & Use
Here's what you need to know to get a linter set up and running.

1. To install ESLint, run ```npm install -g eslint``` in the terminal, from any location.

2. In the terminal, while at the root level of the directory for the project that you want to lint, run ```eslint --init```. This will guide you through a series of questions that will ask for your preferences on a variety of stylistic conventions, and then store those in a *.eslintrc* file. You can use that *.eslintrc* or the one that is provided at the end of this document, which has more specific settings.

3. Add a *.eslintignore* file. A sample will be provided below. It needs to list the relative path to all files you do not want the linter to check. After all, a JS linter is going to look at at a HTML file as a huge mess of errors. Same applies to CSS files and image files and anything else you may have in your project. PROTIP: make sure to tell ESLint to ignore any JS libraries you are using, such as ChartJS, jQuery, Underscore, and so on. Those libraries have already been tested and tested, and tend to make ESLint throw thousands of errors. It's terrifying.

4. Once you have these things in place, in the terminal from the root level of your project, run ```eslint *``` and wait for the errors to start listing.

5. The errors will report like this: ```27:32     error     A space is required after ','     comma-spacing```, where ```27:32``` is the line of code and the column where the error occurs, and then the kind of error is indicated. Go back into your code, repair the errors one by one, and re-run the linter. Eventually, hopefully, your errors get down to zero! Note that sometimes, fixing one error begets others!

6. Using a linter can be an educational process that helps you to write better code. It can also make your code cleaner and more professional in appearance. However... use the tool wisely. Keep in mind that it is just a tool that does certain things. Keep in mind that time spent fixating and fooling around with a tool can be an impediment to progress and the problem-solving that is needed to write good useful code.

## Sample *.eslintrc* and *.eslintignore* files
###*.eslintrc*
```
{
  // http://eslint.org/docs/rules/

  "env": {
    "browser": true,      // browser global variables.
  },

  "rules": {

    // Possible Errors
    "no-extra-semi": 1,            // disallow unnecessary semicolons
    "no-inner-declarations": 2,    // disallow function or variable declarations in nested blocks


    // Best Practices
    "curly": 2,                 // specify curly brace conventions for all control statements
    "no-eval": 2,               // disallow use of eval()
    "no-extend-native": 2,      // disallow adding to native types
    "no-new-wrappers": 2,       // disallows creating new instances of String, Number, and Boolean
    "no-with": 2,               // disallow use of the with statement


    // Variables
    "no-undef": 2,                   // disallow use of undeclared variables unless mentioned in a /*global */ block


    // Stylistic Issues
    "array-bracket-spacing": [2, "never"], // enforce spacing inside array brackets (off by default)
    "indent": [2, 2],                      // this option sets a specific tab width for your code (off by default)
    "no-array-constructor": 2,             // disallow use of the Array constructor
    "no-mixed-spaces-and-tabs": 2,         // disallow mixed spaces and tabs for indentation
    "object-curly-spacing": [2, "never"],  // require or disallow padding inside curly braces (off by default)
    "quotes": [2, "single"],               // use single quotes in JS
    "semi": 2,                             // require or disallow use of semicolons instead of ASI
  }
}
```

###*.eslintignore*
```node_modules/**
README.md
**.html
**.css
package.json
css/**
img/**
JavaScript/jquery-1.11.3.min.js
.DS_Store
.eslintrc
.eslintignore
```
