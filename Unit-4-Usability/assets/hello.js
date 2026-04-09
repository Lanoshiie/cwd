
let myForm = document.querySelector("#myForm")
myForm.adEventListener("submit", (event) => {
	event.preventDefault(); 

// console.log("Hello");

console.log(this.msg.value) 

}); 


