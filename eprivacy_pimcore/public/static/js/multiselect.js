function multiSelectOnClickEventHandlerFunc(parent) {
  return function(e) {
     e.preventDefault();
     let element = e.target;
     let originalScrollTop = parent.scrollTop;
     if (element.hasAttribute('selected')) {
        element.removeAttribute('selected');
     } else {
        element.setAttribute('selected', true);
     }
     parent.focus();
     setTimeout(function() {
        parent.scrollTop = originalScrollTop;
     }, 0);
  };
};

window.addEventListener('load', function(e) {
     let rootElement = getComputedStyle(document.querySelector(':root'));
     let msOptionContentAttr = rootElement.getPropertyValue('--ms-option-content-attr').trim();
     let msOptionContentAttrSelector = 'option:not([' + msOptionContentAttr + '])';
     let selectElements = document.querySelectorAll('select.multiselect[multiple]');
     selectElements.forEach(function(el) {
          let func = multiSelectOnClickEventHandlerFunc(el);
          el.ontouchstart = func;
          el.onmousedown = func;
          el.querySelectorAll('option:not([value])').forEach(function(option) {
            option.setAttribute('value', option.value);
          });
          el.querySelectorAll(msOptionContentAttrSelector).forEach(function(option) {
            option.setAttribute(msOptionContentAttr, option.value);
          });
     });
});
