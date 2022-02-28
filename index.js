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
hello(['1','2','3','4']);//haianh3234
