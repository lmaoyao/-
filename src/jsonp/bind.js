let name={name:3}
let obj = {
    name:6,
    sd : function(){
          console.log(this.name)
    }
}
obj.sd();
let fn =obj.sd
fn.bind(name)()
