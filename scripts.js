// Small helper for mobile nav toggle and smooth anchor scroll
document.addEventListener('DOMContentLoaded', function(){
  var t = document.getElementById('nav-toggle');
  if(t){
    t.addEventListener('click', function(){
      var m = document.getElementById('mobile-nav');
      if(m) m.classList.toggle('hidden');
    });
  }
  var t2 = document.getElementById('nav-toggle-2');
  if(t2){
    t2.addEventListener('click', function(){
      var m = document.getElementById('mobile-nav');
      if(m) m.classList.toggle('hidden');
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length > 1){
        var el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
});
