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
    // Link longer terms first to avoid partial matches overshadowing
    const terms = Object.keys(glossary).sort((a,b)=>b.length-a.length);
    if(!terms.length) return;
    const walker = document.createTreeWalker(document.querySelector('.md-content'), NodeFilter.SHOW_TEXT, null);
    let node;
    while((node = walker.nextNode())){
      if(!node.nodeValue || isExcluded(node)) continue;
      let text = node.nodeValue;
      for(const term of terms){
        const entry = glossary[term];
        // global, case-insensitive, word-boundary-ish
        const re = new RegExp('(^|\\b)(' + escapeRegExp(term) + ')(\\b|$)','ig');
        let lastIndex = 0;
        let parts = [];
        let m;
        while((m = re.exec(text))){
          // push text before match
          parts.push(document.createTextNode(text.slice(lastIndex, m.index + m[1].length)));
          const a = document.createElement('a');
          a.href = base + entry.href.replace(/^\//,'');
          a.textContent = m[2];
          parts.push(a);
          lastIndex = m.index + m[0].length;
        }
        if(parts.length){
          // push remaining text and replace node
          parts.push(document.createTextNode(text.slice(lastIndex)));
          const parent = node.parentNode;
          for(const p of parts){ parent.insertBefore(p, node); }
          parent.removeChild(node);
          // set node to last inserted text node so walker continues correctly
          break;
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
