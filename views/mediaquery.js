var template = Handlebars.compile(document.getElementById('size-template').innerHTML);
var results = document.getElementById("results");

var queries = {
  small: 'screen and (min-width:1px) and (max-width:499px)',
  medium: 'screen and (min-width:500px) and (max-width:1000px)',
  large: 'screen and (min-width:1001px) and (max-width:1500px)',
  huge: 'screen and (min-width:1501px)'
};

for (var size in queries){
  var query = window.matchMedia(queries[size]);
  query.addListener(handleChange.bind(this, query, size));
  handleChange(query, size); //handle initial match
}
  
/* update the DOM when the matching media query changes. Fires both when the query matches and when it stops matching. */
function handleChange(query, size){
  if(query.matches){
    results.innerHTML = template({size: size});
  }
}