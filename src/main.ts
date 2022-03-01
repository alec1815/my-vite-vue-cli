export function render(){
  document.querySelector("#app")!.innerHTML = "main"
}

render()

if(import.meta.hot){
  import.meta.hot.accept((newModule)=>{
    console.log("render")
    newModule.render()
  })
}

console.log("page main")