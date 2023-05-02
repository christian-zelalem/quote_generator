//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [ { quote: '"I cant give you a sure-fire formula for success, but I can give you a formula for failure try to please everybody all the time."', 
person: 'Herbert Bayard Swope' }, 
 {
    quote:'“It is better to fail in originality than to succeed in imitation.”' , person:'Herman Melville'
},
{
    quote:'“Success is not how high you have climbed, but how you make a positive difference to the world.”' , person:'Roy T. Bennett, The Light in the Heart'
},
{
    quote:'“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”' , person:'Steve Maraboli'
},
{
    quote:'“Success is getting what you want, happiness is wanting what you get”' , person:'W.P. Kinsella'
},
{
    quote:'“Failure is the condiment that gives success its flavor.”', person:'Truman Capote'
},
{
    quote:'“Success is stumbling from failure to failure with no loss of enthusiasm.”', person:'Winston S. Churchill'
},
{
    quote:'“The worst part of success is trying to find someone who is happy for you.”' , person:'Bette Midler'
},
{
    quote:'“The way to get started is to quit talking and begin doing. ”' , person:'Walt Disney'
},
{
    quote:'“All you need in this life is ignorance and confidence; then success is sure. ”', person:'Mark Twain'
},
];



btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})