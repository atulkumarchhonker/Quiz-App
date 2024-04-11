const questions = [

    {
        'que': ' Which Language is used for Backend Programming ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Bootstrap',
        'd': 'Node Js',
        'correct': 'd'
    },
    {
        'que': ' Which of the following is the Database ?',
        'a': 'Node Js',
        'b': 'CSS',
        'c': 'MongoDB',
        'd': 'Node Js',
        'correct': 'c'
    },
    {
        'que': ' Which of the following is a Programming Language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'C++',
        'd': 'Node Js',
        'correct': 'c'
    },
    {
        'que': ' Which HTML tag is used to create a hyperlink ?',
        'a': '<link>',
        'b': '<href>',
        'c': '<a>',
        'd': '<hyperlink',
        'correct': 'c'
    },
    {
        'que': ' Which of the following programming language is commonly used for server-side scripting in web development ?', 
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'd'
    },
    {
        'que': ' What does <td> stand for ?',
        'a': 'Table database',
        'b': 'Table data',
        'c': 'Table directory',
        'd': 'Table direct row',
        'correct': 'b'
    },
    {
        'que': ' Which HTML tag is used to create an ordered list in webpage ?',
        'a': '<ol>',
        'b': '<ul>',
        'c': '<li>',
        'd': '<ol> and <ul>',
        'correct': 'a'
    },
    {
        'que': ' Which CSS property is used to specify the width of an element ?',
        'a': 'Padding',
        'b': 'Margin',
        'c': 'Height',
        'd': 'Width',
        'correct': 'd'
    },
    {
        'que': ' Which of the following keywords is used to define a variable in Javascript ?',
        'a': 'var',
        'b': 'let',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': ' What keywords is used to check weather a given property is valid or not ?',
        'a': 'in',
        'b': 'is in',
        'c': 'exists',
        'd': 'lies',
        'correct': 'a'
    },
]

let index = 0;
let total = questions.length;
let right = 0 , wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {

    if(index == total) //jab questions complete ho jynge tab next nahi hoga,
    {
        return endQuiz(); 
    }
    reset();
    const data = questions[index];
    // console.log(data); 
    quesBox.innerText = `${index + 1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()

    //yaha answer ki checking ho rhi hai.
    if(ans==data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value; //kaun sa option select kiye hai vo yaha se mil rha hai.
            }
        }
    )
    return answer;
}

const reset=()=>{
     optionInputs.forEach(
        (input)=>{
            input.checked = false; //jab next question mai jynge to check ko htane ke liye.
        }
     )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3>Thankyou for Playing the Quiz</h3>
    <h2>${right} / ${total} are Correct.</h2>
    </div>
    
    `
}

//initial call - when we refresh the page

loadQuestion();