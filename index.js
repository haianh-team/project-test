let count = 0;
hello = async (items)=>{
  	items.forEach(async()=>{
     	await someAPICall();
     	count++;
  	})
  	console.log("count = " + count);
}
someAPICall = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("done")
		},100);
	})
}
<<<<<<< HEAD

hello(['1','2','3','4']);//haianh323
//2345///345

=======
<<<<<<< HEAD
hello(['1','2','3','4']);//haianh323
//2345///345
//qua ok

=======
hello(['1','2','3','4']);//haianh3234555
>>>>>>> index123
>>>>>>> home-js
