// Active menu glow (auto)
(function(){
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === file) a.classList.add("active");
  });
})();
