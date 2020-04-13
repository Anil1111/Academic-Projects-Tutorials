const source = document.getElementById('ice-cream').innerHTML;
const template = Handlebars.compile(source);

const context = {
  flavor: 'chocolate',
  opinion: true,
  someArray: ['First', 'Second', 'Third'],
  objArray: [
    {shape: 'Triangle'},
    {shape: 'Circle'},
    {shape: 'Square'}
  ] 
};
const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
