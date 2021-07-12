		
		
		let startСounting = () => {			
			
			let result;
			let timeParts = [];					
			
			let inputValue = document.getElementById('floatingInput').value.trim(); 		
			
			timeParts = [
				inputValue[0] + inputValue[1],
				inputValue[3] + inputValue[4],
				inputValue[6] + inputValue[7]
			];		
			
			const combiningTimeParts = timeParts.reduce((total, value) => total + value);
				
				if (isNaN(combiningTimeParts) || combiningTimeParts.length > 6 || inputValue.length > 9) { 
					 
					 alert(" Enter your time in the text box accoding to the example below !!!");
					 return;
					 
				} else {
					
					result = timeParts.reduce( (total, value) => {
				
					const milliseconds = 1000;
					
					if(value == timeParts[0]){
						
						value = 3600 * value * milliseconds;
						
					} else if(value == timeParts[1]){
						
						value = 60 * value * milliseconds;
						
					} else if(value == timeParts[2]){
						
						value = value * milliseconds;
						
					}
					
					return (total + value);			
				
								
				}, 0)				
							
			}
			
	let timer = () => {
		
		let seconds = 0;
		let minutes = 0;
		let hours = 0;
		
		const secondsInsertCode = document.getElementById("seconds"); 
		const minutesInsertCode = document.getElementById("minutes");
		const hoursInsertCode = document.getElementById("hours");
		
		let time = setInterval(() => {
			
			if( seconds < 59 ) {				
				
				++seconds

			} else {
				
				seconds = 0;				
				++minutes;
			}
			if( minutes >= 60 ) {
				
				minutes = 0;
				++hours;
			}
			
			secondsInsertCode.innerText =  (seconds < 10 ? 0 + `${seconds}` : `${seconds}`) + ' s  ';
			minutesInsertCode.innerText = (minutes < 10 ? 0 + `${minutes}` : `${minutes}`) + ' m  ';
			hoursInsertCode.innerText = (hours < 10 ? 0 + `${hours}` : `${hours}`) + ' h  ';
			
			
		}, 1000);
		
		
		
		let stopTimer = setTimeout( () => { 
			
				clearInterval(time);
				
			}, result);
			
				
		}
		timer();
		
		setTimeout( () => { 								
									
					alert("Timer stopped!!!")	
			
			}, result + 1000);
			
			console.log(result);
			return(result)
	};
	
	
	