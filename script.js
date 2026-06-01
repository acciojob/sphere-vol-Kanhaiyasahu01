function volume_sphere() {
    //Write your code here
	const radius = document.querySelector("#radius");
	const volume = document.querySelector("#volume");

	const calculate = document.querySelector("#submit")

	calculate.addEventListener("click", 
							  ()=>{
								  
								  const vofs = 4/3 * 3.14 * Number(radius.value)*Number(radius.value) * Number(radius.value);
									  volume.value = vofs;
							  }
							  )
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
