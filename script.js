const items = [
  {title:'Sakura'}, {title:'Mountain'}, {title:'Sea'}, {title:'Forest'},
  {title:'City'}, {title:'Night'}, {title:'River'}, {title:'Field'}
];
const grid = document.getElementById('grid');
const tpl = document.getElementById('cardTpl');
items.forEach(it=>{
  const node = tpl.content.cloneNode(true);
  node.querySelector('h3').textContent = it.title;
  grid.appendChild(node);
});