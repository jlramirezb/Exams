(function () {
   //verifica el metodo at()
   if (!Array.prototype.at) {
     Array.prototype.at = function (index) {
       if (index < 0) {
         index = this.length + index;
       }
       if (index >= 0 && index < this.length) {
         return this[index];
       }
       return undefined;
     };
   }

   if (!String.prototype.trim) {
     (function () {
         // Make sure we trim BOM and NBSP
         var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
         String.prototype.trim = function () {
           return this.replace(rtrim, '');
         };
      })();
   }

})();
