(function() {
  var VueEditable = {
    install: function(Vue) {
      Vue.prototype.$editable = function(e, callback, css) {
        var target = e.target,
          value = target.innerText;
        var target = e.target,
          value = target.innerText;
        // var par = target.parentNode;
        var input = document.createElement("input")
        input.type = "text";
        input.value = value;
        if (css) {
          Object.assign(input.style, css)
        }
        var bcr = target.getBoundingClientRect();
        console.log(bcr)
        input.style.left = bcr.left + "px";
        input.style.top = bcr.top + "px";
        input.style.width = (bcr.right - bcr.left) + "px";
        input.style.height = (bcr.bottom - bcr.top) + "px";
        input.style.position = "fixed";

        document.body.appendChild(input)
        input.focus();
        var len = input.value.length;
        if (document.selection) {
          var sel = input.createTextRange();
          sel.moveStart('character', len);
          sel.collapse();
          sel.select();
        } else if (typeof input.selectionStart == 'number' && typeof input.selectionEnd == 'number') {
          input.selectionStart = input.selectionEnd = len;
        }

        var action = function() {
          input.removeEventListener("blur", action, false);
          document.body.removeChild(input);
          if (value != this.value) {
            callback(this.value)
          }
        };
        input.addEventListener("blur", action, false);
      }
    }
  }

  if (typeof exports == "object") {
    module.exports = VueEditable;
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return VueEditable;
    });
  } else if (window.Vue) {
    window.VueEditable = VueEditable;
    Vue.use(VueEditable);
  };
})();
