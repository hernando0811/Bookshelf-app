class Book {                                           //sets a book class 
    constructor(author, language, subject, title, numPages, categories, comments) {   // this is a class that constructs books inside of the parenthesis is what i will pass into the books
      this.author = author;
      this.language = language;       //  with this keyword i can then use that to manipulate the book that i will create and pass in the data in bookdata 
      this.subject = subject;
      this.title = title;
      this.numPages = numPages 
      this.categories = categories;
      this.comments = comments;

  
      this.numPages = Math.floor(Math.random() * 150) + 1;  // this will set a random number of pages between 1 and 150 
      
      categories = this.numPages ; // sets categories to numPages
      if (categories > 100 ) {    // saying if categories is greater than 100 
       (this.categories  = "Novel");  // this.categories will be set to "Novel" 
      } else {                           // with this code it took me forever to figure out  i rendered it properly but
      (this.categories = "Short story");        // i am still a little confused on how "this." keyword is working in this instance !!!
      } 



}


    render() {                                         // this function creates elements via DOM and appends them 
      const ul = document.createElement('ul');    // create this as a unordered list then i will return this in the end to display

   
      const li1 = document.createElement("li")    // these are the individual elemments and added a value so i can manipulate them 
      li1.textContent =`Title : ${this.title}`;             // this is how to add the text that will go into the element created  use `` to insert the text in the class

      const li2 = document.createElement("li");
      li2.textContent = `Author : ${this.author}`; 

      const li3 = document.createElement("li");
      li3.textContent = `Language : ${this.language}`; 

      const li4 = document.createElement("li");
      li4.textContent = `Subject(s) : ${this.subject}`; 

      const li5 = document.createElement("li");
      li5.textContent = `Category  : ${this.categories}`;

      const li6 = document.createElement("li");
      li6.textContent = `Number of Pages: ${this.numPages}`;
      
    

      ul.append(li1);
      ul.append(li2);    // these lines of code takes in the ul element that i created and appends the li elments to it so then i can render / display them
      ul.append(li3);
      ul.append(li4);
      ul.append(li5);
      ul.append(li6);
      
      
       

      return ul;   // this returns the ul with all the li elemnts inside of it so that i can then use that to render / display my book / books
      
    }             
  }


