const quizData = {
    html: [
        {
            question: "Which of the following is the correct way to implement a custom data attribute in HTML5?",
            options: [
                "<div data:custom='value'>",
                "<div data.custom='value'>",
                "<div data-custom='value'>",
                "<div custom-data='value'>"
            ],
            correct: 2
        },
        {
            question: "In HTML5, which attribute must be added to allow drag and drop operations?",
            options: [
                "draggable='true'",
                "drag='allow'",
                "dragdrop='true'",
                "allowdrag='true'"
            ],
            correct: 0
        },
        {
            question: "What is the correct way to specify the character encoding in HTML5?",
            options: [
                "<meta charset='UTF-8'>",
                "<meta encoding='UTF-8'>",
                "<meta char='UTF-8'>",
                "<meta character-set='UTF-8'>"
            ],
            correct: 0
        },
        {
            question: "Which HTML5 element is used for self-contained content?",
            options: [
                "<div>",
                "<article>",
                "<section>",
                "<container>"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the 'srcset' attribute in the <img> tag?",
            options: [
                "To specify multiple image sources for different screen sizes",
                "To set the source of an image",
                "To create a set of related images",
                "To define image dimensions"
            ],
            correct: 0
        },
        {
            question: "Which HTML5 input type validates email addresses automatically?",
            options: [
                "type='mail'",
                "type='email'",
                "type='emailaddress'",
                "type='address'"
            ],
            correct: 1
        },
        {
            question: "What is the correct HTML5 element for playing video files?",
            options: [
                "<media>",
                "<movie>",
                "<video>",
                "<player>"
            ],
            correct: 2
        },
        {
            question: "Which HTML5 element defines navigation links?",
            options: [
                "<navigation>",
                "<links>",
                "<nav>",
                "<menu>"
            ],
            correct: 2
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<lb>",
                "<break>",
                "<br>",
                "<newline>"
            ],
            correct: 2
        },
        {
            question: "Which attribute specifies an alternate text for an image?",
            options: [
                "title",
                "alt",
                "description",
                "caption"
            ],
            correct: 1
        },
        {
            question: "What is the correct HTML for creating a hyperlink?",
            options: [
                "<link href='url'>",
                "<a url='http://example.com'>",
                "<a href='http://example.com'>",
                "<hyperlink='http://example.com'>"
            ],
            correct: 2
        },
        {
            question: "Which HTML5 element is used to specify a footer for a document section?",
            options: [
                "<bottom>",
                "<section-footer>",
                "<footer>",
                "<end>"
            ],
            correct: 2
        },
        {
            question: "What is the correct HTML for making a checkbox?",
            options: [
                "<check>",
                "<checkbox>",
                "<input type='check'>",
                "<input type='checkbox'>"
            ],
            correct: 3
        },
        {
            question: "Which HTML attribute specifies extra information about an element?",
            options: [
                "title",
                "info",
                "data",
                "description"
            ],
            correct: 0
        },
        {
            question: "What is the correct HTML for making a text area?",
            options: [
                "<input type='textbox'>",
                "<input type='textarea'>",
                "<textarea>",
                "<text>"
            ],
            correct: 2
        },
        {
            question: "Which HTML5 element is used to specify a header for a document or section?",
            options: [
                "<head>",
                "<top>",
                "<header>",
                "<section>"
            ],
            correct: 2
        },
        {
            question: "What is the correct HTML for making a drop-down list?",
            options: [
                "<list>",
                "<select>",
                "<input type='dropdown'>",
                "<dropdown>"
            ],
            correct: 1
        },
        {
            question: "Which HTML element defines the title of a document?",
            options: [
                "<meta>",
                "<head>",
                "<title>",
                "<header>"
            ],
            correct: 2
        },
        {
            question: "What is the correct HTML for inserting an image?",
            options: [
                "<img href='image.gif'>",
                "<image src='image.gif'>",
                "<img src='image.gif'>",
                "<picture src='image.gif'>"
            ],
            correct: 2
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                "class",
                "styles",
                "style",
                "css"
            ],
            correct: 2
        }
    ],
    css: [
        {
            question: "Which CSS property controls the text size?",
            options: [
                "text-size",
                "font-size",
                "text-style",
                "font-style"
            ],
            correct: 1
        },
        {
            question: "What is the correct CSS syntax for making all the <p> elements bold?",
            options: [
                "p {text-size: bold}",
                "p {font-weight: bold}",
                "<p style='font-size: bold'>",
                "p {text-weight: bold}"
            ],
            correct: 1
        },
        {
            question: "How do you display hyperlinks without an underline?",
            options: [
                "a {text-decoration: none}",
                "a {underline: none}",
                "a {text-decoration: no-underline}",
                "a {decoration: no-underline}"
            ],
            correct: 0
        },
        {
            question: "How do you make each word in a text start with a capital letter?",
            options: [
                "text-transform: capitalize",
                "text-style: capitalize",
                "transform: capitalize",
                "text-case: capitalize"
            ],
            correct: 0
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "bgcolor",
                "background-color",
                "color",
                "background"
            ],
            correct: 1
        },
        {
            question: "How do you make a list not display bullet points?",
            options: [
                "list-style-type: none",
                "list: none",
                "bullets: none",
                "list-style: no-bullet"
            ],
            correct: 0
        },
        {
            question: "What is the correct CSS syntax for making all the <span> elements bold and red?",
            options: [
                "span {font-weight: bold; color: red}",
                "span {text-size: bold; color: red}",
                "<span style='bold: true; color: red'>",
                "span {bold: true; color: red}"
            ],
            correct: 0
        },
        {
            question: "Which property is used to change the font of an element?",
            options: [
                "font-family",
                "font-style",
                "font-type",
                "font-name"
            ],
            correct: 0
        },
        {
            question: "How do you make the text bold?",
            options: [
                "font: bold",
                "font-weight: bold",
                "style: bold",
                "text: bold"
            ],
            correct: 1
        },
        {
            question: "How do you display a border like this: 'border: 1px solid red;'?",
            options: [
                "border-line: 1px solid red",
                "border: 1px solid red",
                "border-style: 1px solid red",
                "border-type: 1px solid red"
            ],
            correct: 1
        },
        {
            question: "What property is used to change the left margin of an element?",
            options: [
                "margin-left",
                "padding-left",
                "left-margin",
                "indent"
            ],
            correct: 0
        },
        {
            question: "When using the padding property, are you allowed to use negative values?",
            options: [
                "Yes",
                "No",
                "Only on block elements",
                "Only on inline elements"
            ],
            correct: 1
        },
        {
            question: "How do you make a text shadow in CSS?",
            options: [
                "text-shadow: 2px 2px #ff0000",
                "shadow: 2px 2px #ff0000",
                "font-shadow: 2px 2px #ff0000",
                "text-style: shadow 2px 2px #ff0000"
            ],
            correct: 0
        },
        {
            question: "Which CSS property controls the text size?",
            options: [
                "text-size",
                "font-size",
                "text-style",
                "font-style"
            ],
            correct: 1
        },
        {
            question: "What is the correct CSS syntax for making all the <p> elements bold?",
            options: [
                "p {text-size: bold}",
                "p {font-weight: bold}",
                "<p style='font-size: bold'>",
                "p {text-weight: bold}"
            ],
            correct: 1
        },
        {
            question: "How do you display hyperlinks without an underline?",
            options: [
                "a {text-decoration: none}",
                "a {underline: none}",
                "a {text-decoration: no-underline}",
                "a {decoration: no-underline}"
            ],
            correct: 0
        },
        {
            question: "Which property is used to change the font of an element?",
            options: [
                "font-family",
                "font-style",
                "font-type",
                "font-name"
            ],
            correct: 0
        },
        {
            question: "How do you make the text bold?",
            options: [
                "font: bold",
                "font-weight: bold",
                "style: bold",
                "text: bold"
            ],
            correct: 1
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: [
                "text-color",
                "color",
                "font-color",
                "text-style"
            ],
            correct: 1
        },
        {
            question: "What is the correct CSS syntax for making all the <p> elements bold?",
            options: [
                "p {text-size: bold}",
                "p {font-weight: bold}",
                "<p style='font-size: bold'>",
                "p {text-weight: bold}"
            ],
            correct: 1
        }
    ],
    javascript: [
        {
            question: "Which operator is used to assign a value to a variable?",
            options: [
                "x",
                "*",
                "=",
                "-"
            ],
            correct: 2
        },
        {
            question: "What will the following code return: Boolean(10 > 9)",
            options: [
                "NaN",
                "false",
                "true",
                "undefined"
            ],
            correct: 2
        },
        {
            question: "Is JavaScript case-sensitive?",
            options: [
                "Yes",
                "No",
                "Only in functions",
                "Only in variables"
            ],
            correct: 0
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = ['red', 'green', 'blue']",
                "var colors = 'red', 'green', 'blue'",
                "var colors = {red, green, blue}"
            ],
            correct: 1
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            options: [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            correct: 0
        },
        {
            question: "How do you find the number with the highest value of x and y?",
            options: [
                "Math.max(x, y)",
                "Math.ceil(x, y)",
                "top(x, y)",
                "ceil(x, y)"
            ],
            correct: 0
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: [
                "onmouseclick",
                "onclick",
                "onchange",
                "onmouseover"
            ],
            correct: 1
        },
        {
            question: "How do you declare a JavaScript variable?",
            options: [
                "variable carName",
                "v carName",
                "var carName",
                "carName = var"
            ],
            correct: 2
        },
        {
            question: "Which operator is used to multiply numbers?",
            options: [
                "*",
                "x",
                "%",
                "#"
            ],
            correct: 0
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function = myFunction()",
                "function:myFunction()",
                "function myFunction()",
                "myFunction() = function"
            ],
            correct: 2
        },
        {
            question: "How do you call a function named 'myFunction'?",
            options: [
                "call myFunction()",
                "call function myFunction()",
                "myFunction()",
                "execute myFunction()"
            ],
            correct: 2
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i = 5 then",
                "if i == 5 then",
                "if (i == 5)",
                "if i = 5"
            ],
            correct: 2
        },
        {
            question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            options: [
                "if (i != 5)",
                "if i <> 5",
                "if i =! 5 then",
                "if (i <> 5)"
            ],
            correct: 0
        },
        {
            question: "How does a WHILE loop start?",
            options: [
                "while (i <= 10; i++)",
                "while (i <= 10)",
                "while i = 1 to 10",
                "while (i <= 10; i++)"
            ],
            correct: 1
        },
        {
            question: "How does a FOR loop start?",
            options: [
                "for (i = 0; i <= 5)",
                "for (i <= 5; i++)",
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)"
            ],
            correct: 3
        },
        {
            question: "How can you add a comment in JavaScript?",
            options: [
                "'This is a comment",
                "//This is a comment",
                "<!--This is a comment-->",
                "#This is a comment"
            ],
            correct: 1
        },
        {
            question: "What is the correct way to write a JavaScript object?",
            options: [
                "var person = {firstName: 'John', lastName: 'Doe'}",
                "var person = (firstName: 'John', lastName: 'Doe')",
                "var person = 'firstName: John, lastName: Doe'",
                "var person = [firstName: 'John', lastName: 'Doe']"
            ],
            correct: 0
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            options: [
                "round(7.25)",
                "Math.rnd(7.25)",
                "Math.round(7.25)",
                "rnd(7.25)"
            ],
            correct: 2
        },
        {
            question: "How do you find the number with the highest value of x and y?",
            options: [
                "Math.ceil(x, y)",
                "top(x, y)",
                "Math.max(x, y)",
                "Math.highest(x, y)"
            ],
            correct: 2
        },
        {
            question: "What is the correct JavaScript syntax to change the content of the HTML element? <p id='demo'>This is a demonstration.</p>",
            options: [
                "document.getElementById('demo').innerHTML = 'Hello World!'",
                "document.getElement('p').innerHTML = 'Hello World!'",
                "#demo.innerHTML = 'Hello World!'",
                "document.getElementByName('p').innerHTML = 'Hello World!'"
            ],
            correct: 0
        }
    ]
}; 