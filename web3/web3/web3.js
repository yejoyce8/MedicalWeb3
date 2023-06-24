export let web3Instance;
window.onload = async ()=>{
  console.log("running");
  if(window.ethereum){
    web3Instance = new Web3(window.ethereum);
    try{
      await ethereum.enable();
      console.log("ethereum enabled");
    }catch(err){
      console.log(err);
    }
  }
};

