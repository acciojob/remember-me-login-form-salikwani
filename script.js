var user = localStorage.getItem("username");
var pass =  localStorage.getItem("password");
console.log(user,pass);
if(user != null && pass != null) {
	var btn = document.createElement("button");
	btn.innerText = "Login as existing user";
    btn.setAttribute("id","remember");
	document.getElementById("form").appendChild(btn);
	btn.addEventListener("click",(e)=> {
		alert(`Logged in as ${localStorage.getItem("username")}`);
	});
}
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
	var uName = document.getElementById("username").value;
	var pWord = document.getElementById("password").value;
	var rMe =  document.getElementById("checkbox").checked;
	if(rMe == true) {
		localStorage.setItem("username",uName);
		localStorage.setItem("password",pWord);
	}
	alert(`Logged in as ${uName}`);
});