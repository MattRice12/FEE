CSS:
  background-image — insert image
  background-repeat — set whether it repeats or not
  background-size — "cover" ; use this rather than setting height/width to add flexibility
  background-position — use this to position the background image without changing the content position

  Where to add styling:
    1) In-line Styling
    2) Internal Stylesheet
    3) External Stylesheet

JS:
  Where to add scripts
    1) Embedded scripts
      ```
        <script>
          //JS
        </script>
      ```

    2) External scripts
    `<script src="main.js" charset="utf-8"></script>`
      -- put this in the body; not the head. We want HTML document to load first rather than wait until the JS file loads.
        - This way the user sees something quickly, even if it's just plain HTML.
        - Also, we use JS to respond to HTML elements. It can't do that if the JS loads before the HTML elements even exist.
      -- src attribute tells our HTML where to find JS file

    3) Inline scripts


  Etc.
    - `==` will type coerce when evaluating
    - `===` will not type coerce when evaluating

  Coersion:
    String(123)     /=> '123'
    Number('hello') /=> NaN
    Boolean(0)      /=> false

    Truthy:
      Non-zero numbers,
      (+/-)Infinity,
      Strings

    Falsey:
      0,
      NaN,


  Objects (Hashes):
    Keys are called "properties" in JS.
    ```
      names = {

      }
    ```
  Functions:
    ```
      function sayHi() {
        console.log("Hi");
      }
    ```

  Document:
    The "document" in JS is the HTML document that the JS is a part of. We call this the Document Object Model of **DOM**. This allows the HTML to be represented as an Object.
    ```
      console.log(document);
    ```

    If I want to see my document as an object in the console, I `console.dir` it.
    ```
      console.dir(document);
    ```

    ### Accessing elements in the document
      ```
        document.querySelector('.fancy');
      ```
