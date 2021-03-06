(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProfileForm',
  data: function data() {
    return {
      user: [],
      ageList: [{
        text: '非公開',
        value: null
      }, {
        text: '10代',
        value: 10
      }, {
        text: '20代',
        value: 20
      }, {
        text: '30代',
        value: 30
      }, {
        text: '40代',
        value: 40
      }, {
        text: '50代',
        value: 50
      }, {
        text: '60代',
        value: 60
      }, {
        text: '70代',
        value: 70
      }, {
        text: '80代',
        value: 80
      }, {
        text: '90代',
        value: 90
      }],
      occupationList: [{
        text: '非公開',
        value: null
      }, {
        text: 'ミュージシャン',
        value: 'ミュージシャン'
      }, {
        text: '社会人',
        value: '社会人'
      }, {
        text: '社会人（音楽関係）',
        value: '社会人（音楽関係）'
      }, {
        text: '学生',
        value: '学生'
      }, {
        text: '学生（音楽系の部活・サークル所属）',
        value: '学生（音楽系の部活・サークル所属）'
      }, {
        text: '無職',
        value: '無職'
      }],
      nameRules: {
        required: function required(v) {
          return !!v || '入力は必須です';
        }
      },
      emailRules: {
        required: function required(v) {
          return !!v || '入力は必須です';
        },
        regex: function regex(v) {
          return /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'メールアドレスの形式が違います';
        }
      }
    };
  },
  computed: {
    responsiveMaxWidth: function responsiveMaxWidth() {
      return this.$vuetify.breakpoint.smAndUp ? 488 : 366;
    }
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      axios.get('/users/get').then(function (response) {
        _this.user = response.data.user;
      });
    },
    edit: function edit() {
      var _this2 = this;

      axios.put('/users/profile', this.user).then(function (response) {
        if (response.status == 200) {
          _this2.$router.push('/');
        }
      });
    }
  },
  created: function created() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.width-xs[data-v-7e50aeab] {\n  max-width: 300px;\n}\n.width-sm-up[data-v-7e50aeab] {\n  max-width: 424px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      attrs: { color: "grey lighten-5", "max-width": _vm.responsiveMaxWidth },
    },
    [
      _c("v-card-title", { staticClass: "pa-8" }, [
        _c("div", { staticClass: "text-h5 font-weight-bold" }, [
          _vm._v("プロフィール設定"),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-form",
        { ref: "form" },
        [
          _c(
            "v-card-text",
            {
              staticClass: "mx-auto",
              class: {
                "width-sm-up": _vm.$vuetify.breakpoint.smAndUp,
                "width-xs": _vm.$vuetify.breakpoint.xs,
              },
            },
            [
              _c(
                "v-row",
                { staticClass: "my-4" },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: [_vm.nameRules.required],
                      "validate-on-blur": "",
                      outlined: "",
                      label: "ユーザー名",
                    },
                    model: {
                      value: _vm.user.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.user, "name", $$v)
                      },
                      expression: "user.name",
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
                      rules: [_vm.emailRules.required, _vm.emailRules.regex],
                      "validate-on-blur": "",
                      outlined: "",
                      label: "メールアドレス",
                    },
                    model: {
                      value: _vm.user.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.user, "email", $$v)
                      },
                      expression: "user.email",
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
                  _c("v-select", {
                    attrs: {
                      items: _vm.ageList,
                      "item-text": "text",
                      "item-value": "value",
                      label: "年齢",
                      outlined: "",
                    },
                    model: {
                      value: _vm.user.age,
                      callback: function ($$v) {
                        _vm.$set(_vm.user, "age", $$v)
                      },
                      expression: "user.age",
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
                  _c("v-select", {
                    attrs: {
                      items: _vm.occupationList,
                      "item-text": "text",
                      "item-value": "value",
                      label: "職業",
                      outlined: "",
                    },
                    model: {
                      value: _vm.user.occupation,
                      callback: function ($$v) {
                        _vm.$set(_vm.user, "occupation", $$v)
                      },
                      expression: "user.occupation",
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
                      attrs: { color: "primary", height: "56", block: "" },
                      on: { click: _vm.edit },
                    },
                    [_vm._v("\n          更新\n        ")]
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
                        to: "/vue/password",
                      },
                    },
                    [_vm._v("\n          パスワード変更\n        ")]
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

/***/ "./resources/js/components/users/ProfileForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/users/ProfileForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true& */ "./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true&");
/* harmony import */ var _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& */ "./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e50aeab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/ProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=style&index=0&id=7e50aeab&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_7e50aeab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/ProfileForm.vue?vue&type=template&id=7e50aeab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_7e50aeab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);