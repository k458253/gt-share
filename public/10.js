(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PasswordForm',
  data: function data() {
    var _this = this;

    return {
      user: [],
      hasError: false,
      passwordForm: {
        old_password: '',
        password: '',
        password_confirmation: ''
      },
      passwordShow: false,
      passwordRules: {
        required: function required(v) {
          return !!v || '入力は必須です';
        },
        min: function min(v) {
          return v && v.length >= 8 || '8文字以上入力してください';
        },
        same: function same(v) {
          return v !== _this.passwordForm.old_password || '現在のパスワードと同じです';
        },
        confirm: function confirm(v) {
          return v === _this.passwordForm.password || 'パスワードが一致しません';
        }
      }
    };
  },
  methods: {
    getUser: function getUser() {
      var _this2 = this;

      axios.get('/users/get').then(function (response) {
        _this2.user = response.data.user;
      });
    },
    change: function change() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        axios.put('/users/password', this.passwordForm).then(function (response) {
          if (response.status == 200) {
            _this3.$router.push('/');
          }
        })["catch"](function (error) {
          _this3.hasError = true;
        });
      }
    }
  },
  created: function created() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticClass: "mx-auto elevation-4",
      attrs: { color: "grey lighten-5", "max-width": "488" },
    },
    [
      _c("v-card-title", { staticClass: "pa-8" }, [
        _c("div", { staticClass: "text-h5 font-weight-bold" }, [
          _vm._v("パスワード変更"),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-alert",
        {
          staticClass: "mx-14 mt-n6 mb-n4",
          attrs: { type: "error", dense: "" },
          model: {
            value: _vm.hasError,
            callback: function ($$v) {
              _vm.hasError = $$v
            },
            expression: "hasError",
          },
        },
        [_vm._v("\n    現在のパスワードが正しくありません\n  ")]
      ),
      _vm._v(" "),
      _c(
        "v-form",
        { ref: "form" },
        [
          _c(
            "v-card-text",
            { staticClass: "mx-auto", staticStyle: { "max-width": "424px" } },
            [
              _c(
                "v-row",
                { staticClass: "my-4" },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: [
                        _vm.passwordRules.required,
                        _vm.passwordRules.min,
                      ],
                      "validate-on-blur": "",
                      type: "password",
                      outlined: "",
                      autofocus: "",
                      label: "現在のパスワード",
                    },
                    model: {
                      value: _vm.passwordForm.old_password,
                      callback: function ($$v) {
                        _vm.$set(_vm.passwordForm, "old_password", $$v)
                      },
                      expression: "passwordForm.old_password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "my-4" },
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.passwordShow
                        ? "mdi-eye"
                        : "mdi-eye-off",
                      rules: [
                        _vm.passwordRules.required,
                        _vm.passwordRules.min,
                        _vm.passwordRules.same,
                      ],
                      "validate-on-blur": "",
                      type: _vm.passwordShow ? "text" : "password",
                      outlined: "",
                      label: "新しいパスワード",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.passwordShow = !_vm.passwordShow
                      },
                    },
                    model: {
                      value: _vm.passwordForm.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.passwordForm, "password", $$v)
                      },
                      expression: "passwordForm.password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "my-4" },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: [
                        _vm.passwordRules.required,
                        _vm.passwordRules.confirm,
                      ],
                      type: "password",
                      outlined: "",
                      label: "新しいパスワード（確認用）",
                    },
                    model: {
                      value: _vm.passwordForm.password_confirmation,
                      callback: function ($$v) {
                        _vm.$set(_vm.passwordForm, "password_confirmation", $$v)
                      },
                      expression: "passwordForm.password_confirmation",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-12 mb-8" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "text-subtitle-1",
                      attrs: { color: "warning", height: "56", block: "" },
                      on: { click: _vm.change },
                    },
                    [_vm._v("\n          変更\n        ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-8 mb-4", attrs: { justify: "center" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        to: "/vue/profile",
                      },
                    },
                    [_vm._v("\n          プロフィール設定\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/users/PasswordForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/users/PasswordForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordForm.vue?vue&type=template&id=96da355e& */ "./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e&");
/* harmony import */ var _PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordForm.vue?vue&type=script&lang=js& */ "./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/PasswordForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/PasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordForm.vue?vue&type=template&id=96da355e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/PasswordForm.vue?vue&type=template&id=96da355e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_96da355e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);