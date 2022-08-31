fetch('js/feature1.js')
  .then((response)=>response.text())
  .then((text)=>{
    console.log(text);
    eval(text)});
            

fetch('js/feature2.js')
    .then((response)=>response.text())
    .then((text)=>{
      console.log(text);
      eval(text)});
              
  
