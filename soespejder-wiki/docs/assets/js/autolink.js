(function(){
  function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  function isExcluded(node){
    if(!node) return false;
    const p = node.parentElement;
    if(!p) return false;
    const tag = p.tagName;
    return ['A','CODE','PRE','KBD','SAMP','SCRIPT','STYLE'].includes(tag) || p.closest('a, code, pre, kbd, samp, script, style');
  }
  function findSiteBase(){
    // Try to detect GitHub Pages project base (e.g., /sea-scouts/)
    var path = window.location.pathname;
    var m = path.match(/^\/(.+?)\//);
    if(m) return '/' + m[1] + '/';
    return '/';
  }
  function autolink(glossary){
    const base = findSiteBase();
    const linked = new Set();
    const terms = Object.keys(glossary);
    if(!terms.length) return;
    const walker = document.createTreeWalker(document.querySelector('.md-content'), NodeFilter.SHOW_TEXT, null);
    let node;
    while((node = walker.nextNode())){
      if(!node.nodeValue || isExcluded(node)) continue;
      let text = node.nodeValue;
      for(const term of terms){
        if(linked.has(term)) continue;
        const entry = glossary[term];
        const re = new RegExp('(^|\\b)(' + escapeRegExp(term) + ')(\\b|$)','i');
        const match = text.match(re);
        if(match){
          const before = text.slice(0, match.index + match[1].length);
          const found = match[2];
          const after = text.slice((match.index + match[0].length));
          const a = document.createElement('a');
          a.href = base + entry.href.replace(/^\//,'');
          a.textContent = found;
          const parent = node.parentNode;
          if(before) parent.insertBefore(document.createTextNode(before), node);
          parent.insertBefore(a, node);
          if(after) parent.insertBefore(document.createTextNode(after), node);
          parent.removeChild(node);
          linked.add(term);
          break; // move to next text node after inserting one link
        }
      }
    }
  }
  function init(){
    fetch((findSiteBase() + 'assets/glossary.json').replace(/\/+/g,'/'))
      .then(r=>r.ok?r.json():{})
      .then(data=>{ if(data && typeof data === 'object') autolink(data); })
      .catch(()=>{});
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

