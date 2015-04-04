// Javascript is called the view model or viewmodel in KO
// OBSERVABLES
// KO documentation states that the viewmodel is a pure-code representation of the data and operations
// of a UI. In a list editor the viewmodel is an object holding a list of items, and exposing methods to 
// add and remove items.
// The viewmodel holds unsaved data that the user is working with in the model. 
// KO viewmodels are pure JavaScript objects that hold no knowledge of HTML. The viewmodel is 
// an abstract of the view. Think of it as points connected to a hub. This allows scalability 
// and the management of highly sophisticated behaviors without getting lost in code.

// Creating a viewmodel
/*var myViewModel = {
	personName: 'JP',
	personAge: 34
};*/

// Creating a viewmodel and declaring model properties as observables
// observables can be updated without changing the data-bind syntax in the view
// note that observable objects are actually functions 
var myViewModel = {
	personName: ko.observable('JP'),
	personAge: ko.observable(34),
};

// Read the observable by calling it with no parameters
console.log(myViewModel.personName());
console.log(myViewModel.personAge());

// Write a new value to the observable by passing a new value in the parameter.
myViewModel.personName('John Patrick');
// Write multiple observable properties on a model object (i.e. myViewModel) by chaining syntax
// chaining syntax can be employed with dot notation
myViewModel.personName('JP Miller').personAge(33);
// The text binding attribute in the view automatically listens for updates of the correlating DOM
// element

// observableArrays are useful for displaying and editing multiple values
var myObservableArray = ko.observableArray(); //establishes an emptay array
myObservableArray.push('Array Value'); //pushes the value to the array and notifies observers

// Create a populated observableArray 
var anotherObservableArray = ko.observableArray([
	{ name: "Business", type: "Startup" },
	{ name: "Origin", type: "Founder"},
	{ name: "Second", type: "VP"},
]);
// observableArrays are observables with array as a value. Treat observableArrays as any other
// observable for reading and writing
console.log('The length of the array is ' + anotherObservableArray().length);
console.log('The first element is ' + myObservableArray()[0]);

console.log(myObservableArray.indexOf('Array Value')); //returns index number of parameter or -1 if none
console.log(myObservableArray.slice('Array Value'));


ko.applyBindings(myViewModel);

// Parameters of ko.applyBindings declares what viewmodel will be used with the declarative bindings
// it activates.
// A second parameter can be passed such as ko.applyBindings(myViewModel, document.getElementById('anElementId'))
// This restricts the activation to a single element and its children. 
// This is useful for creating multiple viewmodels.
