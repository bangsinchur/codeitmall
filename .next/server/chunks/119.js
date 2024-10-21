exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 8972:
/***/ ((module) => {

// Exports
module.exports = {
	"productList": "ProductList_productList__9CraL",
	"product": "ProductList_product__3n2Wo",
	"image": "ProductList_image__7f3Dj",
	"content": "ProductList_content__LSYDN",
	"divider": "ProductList_divider__h6anX",
	"name": "ProductList_name__NH2Mx",
	"prices": "ProductList_prices__GFpo8",
	"originalPrice": "ProductList_originalPrice__3DfmU",
	"starRating": "ProductList_starRating__IGcwx",
	"likeCount": "ProductList_likeCount__0koiN"
};


/***/ }),

/***/ 418:
/***/ ((module) => {

// Exports
module.exports = {
	"searchForm": "SearchForm_searchForm__UEKBn",
	"searchInput": "SearchForm_searchInput__P7SYk",
	"searchButton": "SearchForm_searchButton__dpQJJ"
};


/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8972);
/* harmony import */ var _ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1571);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function ProductList({ className ="" , products  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `${(_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().productList)} ${className}`,
        children: products?.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().product),
                    href: `/items/${product.id}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                fill: true,
                                src: product.imgUrl,
                                alt: product.name
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().prices),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().originalPrice),
                                                    children: [
                                                        product.price.toLocaleString(),
                                                        "원"
                                                    ]
                                                }),
                                                product.salePrice.toLocaleString(),
                                                "원"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().divider)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().starRating),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarRating__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    value: product.starRating
                                                }),
                                                product.starRatingCount.toLocaleString()
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().likeCount),
                                            children: [
                                                "♥",
                                                product.likeCount.toLocaleString()
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, product.id))
    });
}


/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__);




function SearchForm({ initialValue =""  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialValue);
    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!value) {
            router.push("/");
            return;
        }
        router.push(`/search?q=${value}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchForm),
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchInput),
                name: "q",
                value: value,
                placeholder: "찾고 싶은 옷을 검색해보세요.",
                onChange: handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchButton),
                children: "검색"
            })
        ]
    });
}


/***/ }),

/***/ 1571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RATINGS = [
    1,
    2,
    3,
    4,
    5
];
function StarRating({ value =1  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: RATINGS.map((rating)=>value >= rating ? "★" : "✩")
    });
}
6;


/***/ }),

/***/ 1979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://learn.codeit.kr/api/codeitmall"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;