var user = localStorage.getItem("username");
var pass =  localStorage.getItem("password");
if(user != null && pass != null) {
	var btn = document.createElement("button");
	btn.innerText = "Login as existing user";
    btn.setAttribute("id","remember");
	document.getElementById("form").appendChild(btn);
}
document.getElementById("submit").addEventListener("click",(e)=>{
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
document.getElementById("remember").addEventListener("click",(e)=> {
    e.preventDefault();
	alert(`Logged in as ${localStorage.getItem("username")}`);
});
