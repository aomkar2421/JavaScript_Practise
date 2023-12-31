function abc(){
    console.log("abc");
}
abc();

(function def(){
    console.log("def")
})();

//IIFE not requires to call them
// ; is must in iife

(function def(name){
    console.log(`hello ${name}`)
})("omkar");

(function def(name){
    console.log(`hello ${name}`)
});

//def("omkar")   gives error


