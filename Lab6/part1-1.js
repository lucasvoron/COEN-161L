(function () {
	const resources = "http://students.engr.scu.edu/~adiaztostado/resources/";

	// Create an XMLHttpRequest object
	const req1 = new XMLHttpRequest();

	// Handle succesful responses
	req1.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.getElementById("sample1").innerHTML = this.responseText;
		}
	};

	// Get sample1.php
	req1.open("GET", resources + "sample1.php", true);
	req1.send();

	// Create an XMLHttpRequest object
	const req2 = new XMLHttpRequest();

	// Handle succesful responses
	req2.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			document.getElementById("sample2").innerHTML = this.responseText;
		}
	};

	// Get sample2.php
	req2.open("GET", resources + "sample2.php", true);
	req2.send();

	// Create an XMLHttpRequest object
	const req3 = new XMLHttpRequest();

	// Handle succesful responses
	req3.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			const response = JSON.parse(this.responseText);
			const unorderedList = document.createElement("ul");
			for (let i = 0; i < response.friends.length; i++) {
				const listItem = document.createElement("li");
				unorderedList.appendChild(listItem);
				listItem.appendChild(document.createTextNode(response.friends[i].name));
			}

			document.getElementById("sample3").appendChild(unorderedList);
		}
	};

	// Get sample3.php
	req3.open("GET", resources + "sample3.php", true);
	req3.send();
})();
