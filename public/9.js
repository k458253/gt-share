(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Ranking',
  data: function data() {
    return {
      songs: [],
      selectedSongs: [],
      instruments: [],
      instrumentIndex: 0,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10
    };
  },
  computed: {
    selectedInstrumentId: {
      get: function get() {
        if (this.instruments.length) {
          return this.instruments[this.instrumentIndex].id;
        }
      },
      set: function set(value) {
        this.instrumentIndex = this.instruments.indexOf(value);
      }
    },
    headers: function headers() {
      // 画面サイズによって表示項目を変更
      if (this.$vuetify.breakpoint.mdAndUp) {
        return [{
          text: '',
          value: 'rank',
          align: 'start',
          width: '5%',
          sortable: false
        }, {
          text: '曲名',
          value: 'name',
          align: 'start',
          width: '30%',
          sortable: false
        }, {
          text: 'アーティスト名',
          value: 'artist',
          align: 'start',
          width: '45%',
          sortable: false
        }, {
          text: '簡単度',
          value: 'average_score_easy',
          align: 'start',
          width: '20%',
          sortable: true
        }];
      } else {
        return [{
          text: '',
          value: 'rank',
          align: 'start',
          width: '5%',
          sortable: false
        }, {
          text: '曲名',
          value: 'name',
          align: 'start',
          width: '50%'
        }, {
          text: 'アーティスト名',
          value: 'artist.name',
          align: 'end',
          width: '45%',
          filterable: false
        }];
      }
    },
    dense: function dense() {
      // 画面幅960px以下なら'dense'を返す
      return this.$vuetify.breakpoint.smAndDown ? {
        'dense': true
      } : {};
    }
  },
  methods: {
    getSongs: function getSongs() {
      var _this = this;

      axios.get('/ranking').then(function (response) {
        _this.songs = response.data.songs;
        _this.instruments = response.data.instruments;

        _this.fetchSongs();
      });
    },
    clickRow: function clickRow(e) {
      this.$router.push({
        path: "/vue/songs/".concat(e.id)
      });
    },
    fetchSongs: function fetchSongs() {
      var _this2 = this;

      if (this.songs.length > 0) {
        this.selectedSongs = this.songs.filter(function (song) {
          return song.instrument_id === _this2.selectedInstrumentId;
        });
      }
    },
    postIndexLink: function postIndexLink(item) {
      this.$router.push({
        path: "/vue/songs/".concat(item.id)
      });
    },
    artistShowLink: function artistShowLink(item) {
      this.$router.push({
        path: "/vue/artists/".concat(item.artist_id)
      });
    }
  },
  created: function created() {
    this.getSongs();
  },
  watch: {
    selectedInstrumentId: function selectedInstrumentId() {
      this.fetchSongs();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.song-ranking tr:hover td {\n  background: #f0f8ff;\n}\n.song-ranking th {\n  background: #f5f5f5;\n}\n.song-link,\n.artist-link {\n  text-decoration: none;\n  color: inherit !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ranking.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "p",
            {
              staticClass: "font-weight-bold",
              class: {
                "text-h5": _vm.$vuetify.breakpoint.mdAndUp,
                "text-subtitle-1": _vm.$vuetify.breakpoint.smAndDown,
              },
            },
            [_vm._v("\n      簡単な曲ランキング\n    ")]
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "8", sm: "6", md: "4", lg: "3", xl: "3" } },
                [
                  _c(
                    "v-select",
                    _vm._b(
                      {
                        attrs: {
                          items: _vm.instruments,
                          "item-value": "id",
                          "item-text": "name",
                          "return-object": "",
                          "prepend-icon": "mdi-guitar-acoustic",
                          label: "楽器を選択",
                          outlined: "",
                        },
                        model: {
                          value: _vm.selectedInstrumentId,
                          callback: function ($$v) {
                            _vm.selectedInstrumentId = $$v
                          },
                          expression: "selectedInstrumentId",
                        },
                      },
                      "v-select",
                      _vm.dense,
                      false
                    )
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 song-ranking",
            attrs: {
              items: _vm.selectedSongs,
              headers: _vm.headers,
              page: _vm.page,
              "items-per-page": _vm.itemsPerPage,
              "hide-default-footer": "",
              "mobile-breakpoint": "0",
            },
            on: {
              "click:row": _vm.clickRow,
              "update:page": function ($event) {
                _vm.page = $event
              },
              "page-count": function ($event) {
                _vm.pageCount = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function () {
                  return [
                    _c(
                      "v-toolbar",
                      {
                        staticClass: "mb-1",
                        attrs: { flat: "", dark: "", color: "blue darken-3" },
                      },
                      [
                        _c(
                          "v-toolbar-title",
                          {
                            class: {
                              "text-subtitle-1":
                                _vm.$vuetify.breakpoint.smAndDown,
                            },
                          },
                          [
                            _c("v-icon", [
                              _vm._v("\n              mdi-crown\n            "),
                            ]),
                            _vm._v("\n            曲一覧\n          "),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-divider", {
                          staticClass: "mx-4",
                          attrs: { inset: "", vertical: "" },
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                      ],
                      1
                    ),
                  ]
                },
                proxy: true,
              },
              {
                key: "item.rank",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("span", { staticClass: "font-weight-bold pink--text" }, [
                      _vm._v(
                        _vm._s(
                          _vm.selectedSongs.findIndex(function (song) {
                            return song.id == item.id
                          }) + 1
                        )
                      ),
                    ]),
                  ]
                },
              },
              {
                key: "item.name",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "a",
                      {
                        staticClass: "font-weight-bold song-link",
                        on: {
                          click: function ($event) {
                            $event.stopPropagation()
                            return _vm.postIndexLink(item)
                          },
                        },
                      },
                      [_vm._v(_vm._s(item.name))]
                    ),
                  ]
                },
              },
              {
                key: "item.artist",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "a",
                      {
                        staticClass: "artist-link",
                        on: {
                          click: function ($event) {
                            $event.stopPropagation()
                            return _vm.artistShowLink(item)
                          },
                        },
                      },
                      [_vm._v(_vm._s(item.artist.name))]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-pagination", {
            staticClass: "text-center pt-2",
            attrs: { length: _vm.pageCount, "total-visible": 7 },
            model: {
              value: _vm.page,
              callback: function ($$v) {
                _vm.page = $$v
              },
              expression: "page",
            },
          }),
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

/***/ "./resources/js/components/songs/Ranking.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/songs/Ranking.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ranking.vue?vue&type=template&id=1dfb7b6c& */ "./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c&");
/* harmony import */ var _Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ranking.vue?vue&type=script&lang=js& */ "./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ranking.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/songs/Ranking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ranking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ranking.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ranking.vue?vue&type=template&id=1dfb7b6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/songs/Ranking.vue?vue&type=template&id=1dfb7b6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ranking_vue_vue_type_template_id_1dfb7b6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);