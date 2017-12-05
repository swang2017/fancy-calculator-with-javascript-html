var isNewInput = false

function c(val){
  document.getElementById("d").value=val
}
function v(val){
  if(isNewInput) {
    document.getElementById("d").value = ""
    isNewInput = false 
  }
  document.getElementById("d").value+=val
}
function n(val){
  document.getElementById("d").value=-document.getElementById("d").value

}
function p(val){
  document.getElementById("d").value=document.getElementById("d").value/100

}
function e(){
  try{
    c(eval(document.getElementById("d").value))
    isNewInput = true
  }
  catch(e){
    c('syntax Error')
  }

}
