const e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea"),l=document.querySelector("button");e.addEventListener("input",(function(){const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),l.addEventListener("click",(function(e){e.preventDefault(),t.value&&a.value&&(localStorage.clear(),t.value="",a.value="")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(t.value=e.email,a.value=e.message):(t.value="",a.value="",console.log(""))}();
//# sourceMappingURL=03-feedback.377ab464.js.map
