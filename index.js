function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    function namedFunction(){
        console.log('This is a named function!');
    }
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log('This is an anonymous function!');
    };
  }
  