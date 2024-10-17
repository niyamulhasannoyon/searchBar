let avialableKeywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Redux',
    'Django',
    'Gatsby',
    'Tailwind CSS',
    'GraphQL',
    'Apollo Client',
    'Firebase',
    'Docker',
    'Kubernetes',
    'AWS Lambda',
    'Netlify',
    'Vercel',
    'AWS Amplify',
    'Svelte',
    'Next.js',
    'Nuxt.js',
    'TypeScript',
    'Flow',
    'Babel',
    'Webpack',
    'Jest',
    'Cypress',
    'Puppeteer',
    'Selenium',
    'Mocha',
    'Chai',
    'Jasmine',
    'Nightwatch',
    'TestCafe',
    'BackstopJS',
    'Storybook',
    'Jest Storybook',
    'Enzyme',
    'React Testing Library',
    'React Testing Utils',
    'React DOM Testing Library',
    'React Testing Renderers',
    'React Testing Hooks',
    'React Testing Context',
    'React Testing Effects',
    'Easy Tutorial',
    'Beginner Tutorial',
    'Intermediate Tutorial',
    'Advanced Tutorial',
    'Code Snippet',
    'API Integration',
    'Where to learn codding',
    'How to create a website ',
    'How to build a mobile app',
    'How to create a web application',
    'How to create a desktop application',
    'How to create a software application',
    'How to create a game',
    'How to create a software',
    'How to create a web app',
    'How to create a mobile app',
    'How to create a desktop app',
    'How to create a game',
    'How to create a web application',
    'How to create a mobile app',
    'How to create a desktop app',
    'How to create a game',
    'How to create a software',
    'Raihan','Momin',
    'Sakib','Rimal',
    'Taimour','Tasdik',
    'Shahriar','Imtiaz',
    'Rahim','Shah',
    'Mahmoud','Risad',
    'Noyon','Rakib','Abdul Hi',
    'Sajid','Korim', 'Abdullah',
    'Mujahid','Helal','Santo',
    'Mujibur','Maybur','Sad',
    'Mushfiqur','Musfik','Sayeed',
    'Maruf','Mahid', 'Raihan Programmer',

];

const searchResult = document.getElementById('search-results');
const searchInput = document.getElementById('input-box');

searchInput.onkeyup = function(){
    let result = [];
    let input = searchInput.value;
    if(input.length){
        result = avialableKeywords.filter(keyword =>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);

    if(!result.length){
        searchResult.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) => {
        return '<li onClick = selectInput(this) >'+ list +'</li>';
    })
    searchResult.innerHTML = '<ul>'+ content.join('') +'</ul>';
};

function selectInput(element){
    searchInput.value = element.innerText;
    searchResult.innerHTML = '';
}