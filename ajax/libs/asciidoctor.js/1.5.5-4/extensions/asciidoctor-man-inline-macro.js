/* Generated by Opal 0.10.1 */
Opal.modules["man-inline-macro/extension"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$==', '$include', '$use_dsl', '$named', '$name_positional_attributes', '$[]', '$register', '$document', '$render', '$create_anchor']);
  if ($scope.get('RUBY_ENGINE')['$==']("opal")) {};
  self.$include(Opal.get('Asciidoctor'));
  return (function($base, $super) {
    function $ManInlineMacro(){};
    var self = $ManInlineMacro = $klass($base, $super, 'ManInlineMacro', $ManInlineMacro);

    var def = self.$$proto, $scope = self.$$scope, TMP_1;

    self.$use_dsl();

    self.$named("man");

    self.$name_positional_attributes("volnum");

    return (Opal.defn(self, '$process', TMP_1 = function ːprocess(parent, target, attrs) {
      var $a, self = this, text = nil, manname = nil, suffix = nil, volnum = nil;

      text = manname = target;
      suffix = "";
      target = "" + (manname) + ".html";
      suffix = (function() {if ((($a = (volnum = attrs['$[]']("volnum"))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return "(" + (volnum) + ")"
        } else {
        return nil
      }; return nil; })();
      parent.$document().$register("links", target);
      return "" + ((self.$create_anchor(parent, text, $hash2(["type", "target"], {"type": "link", "target": target}))).$render()) + (suffix);
    }, TMP_1.$$arity = 3), nil) && 'process';
  })($scope.base, (($scope.get('Extensions')).$$scope.get('InlineMacroProcessor')));
};

/* Generated by Opal 0.10.1 */
(function(Opal) {
  var $a, $b, TMP_1, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$==', '$require', '$register', '$inline_macro']);
  if ($scope.get('RUBY_ENGINE')['$==']("opal")) {
    self.$require("man-inline-macro/extension")};
  return ($a = ($b = $scope.get('Extensions')).$register, $a.$$p = (TMP_1 = function(){var self = TMP_1.$$s || this;

  return self.$inline_macro($scope.get('ManInlineMacro'))}, TMP_1.$$s = self, TMP_1.$$arity = 0, TMP_1), $a).call($b, "uri_schemes");
})(Opal);
