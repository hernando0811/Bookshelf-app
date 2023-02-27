# Foundations.Assessment.BookshelfData

## Overview

*Flavor Text*  
The backend team has got our API up, the library data is flowing, and a sample of the book data is waiting for you on Github. Use it to begin building the frontend of our app, Bookshelf. We will be working on Bookshelf for the next few weeks, iterating on what you write today and adding features. Be sure to establish a good foundation by following OOP best practices and documenting your code so it will be easy to pick up again later. Submit a link to your Github repo and remember to use the help desk if you get stuck.

This assessment will test your ability to design classes that show a solid understanding of OOP best practices and build a small project given high level descriptions.

Refer to Canvas for more information as well as the rubric.



Hi Hernan, you will need to complete the following on your project:

TDD 3 Alternate: there is a DOM element that indicates the average number of subjects per Book in the Bookshelf. 

TDD 4 Alternate: add two properties to the Book class: `numPages` and `category`. Randomly generate a number of pages for each book. If the book has more than 100 pages, its category is "novel". Otherwise, its category is "short story".

TDD 5 Alternate: use the `filter` method on search terms so that the word "THE" doesn't affect any search term outcomes



general code 
design choices explained and documented in comments 
dom elements are styled via css


Add books 
1 users can enter book title, author , subjects, language and also add a new book.
2 the bookshelf instance is updated accordingly
3 the bookshelf instance renders books accurately

navigation
1 A navigation bar is included in the web app with the links to other parts of the site  including  about and contact 
2 no real info is required  use dummy data


commented 
users can leave comments no longer than 280 characters on any book they want 
2 users can "comment" button which reveals "text" input element .users can then type thir comment and click"send" to add it to the book 
3 the book and bookshelf instaces are updated accordingly 
4 the comments persist even if when the books are rendered
5 data can be stored locally or in state memory, a database is not required