(() => {
var exports = {};
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 4314:
/***/ ((module) => {

// Exports
module.exports = {
	"sizeReviewList": "SizeReviewList_sizeReviewList__Za3kV",
	"sizeReview": "SizeReviewList_sizeReview__oWeq0",
	"date": "SizeReviewList_date__bjO4e",
	"profile": "SizeReviewList_profile__SgiTY",
	"fit": "SizeReviewList_fit__uvUJf"
};


/***/ }),

/***/ 5665:
/***/ ((module) => {

// Exports
module.exports = {
	"spinner": "Spinner_spinner__iiwLJ",
	"rotate": "Spinner_rotate__bE7Ow"
};


/***/ }),

/***/ 9331:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "Product_loading__q6962",
	"name": "Product_name__WPaVF",
	"englishName": "Product_englishName__5NB_3",
	"content": "Product_content__IoRn4",
	"image": "Product_image__F2aS0",
	"section": "Product_section__gkEVY",
	"sectionTitle": "Product_sectionTitle__UaZDz",
	"info": "Product_info__NOQ1g",
	"infoTable": "Product_infoTable__vD_Fc",
	"salePrice": "Product_salePrice__RwUHV",
	"starRating": "Product_starRating__D3AtJ",
	"like": "Product_like__Dl6fi",
	"sizeForm": "Product_sizeForm__0sYzN",
	"label": "Product_label__m45_S",
	"input": "Product_input__CZJLW",
	"submit": "Product_submit__f3khk"
};


/***/ }),

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SizeReviewList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./lib/formatDate.js
function formatDate(date) {
    const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(date.getUTCDate()).padStart(2, "0");
    const YYYY = String(date.getUTCFullYear());
    return `${YYYY}. ${MM}. ${dd}.`;
}

;// CONCATENATED MODULE: ./lib/sizeReviewLabels.js
const sizeReviewLabels = {
    sex: {
        male: "남자",
        female: "여자"
    },
    fit: {
        small: "작음",
        good: "적당함",
        big: "큼"
    }
};
/* harmony default export */ const lib_sizeReviewLabels = (sizeReviewLabels);

// EXTERNAL MODULE: ./components/SizeReviewList.module.css
var SizeReviewList_module = __webpack_require__(4314);
var SizeReviewList_module_default = /*#__PURE__*/__webpack_require__.n(SizeReviewList_module);
;// CONCATENATED MODULE: ./components/SizeReviewList.js




function SizeReviewList({ sizeReviews  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (SizeReviewList_module_default()).sizeReviewList,
        children: sizeReviews.map((sizeReview)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (SizeReviewList_module_default()).sizeReview,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (SizeReviewList_module_default()).date,
                                children: formatDate(new Date(sizeReview.createdAt))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SizeReviewList_module_default()).profile,
                                children: [
                                    "(",
                                    lib_sizeReviewLabels.sex[sizeReview.sex],
                                    " ",
                                    sizeReview.height,
                                    "cm 기준) ",
                                    sizeReview.size
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SizeReviewList_module_default()).fit,
                        children: lib_sizeReviewLabels.fit[sizeReview.fit]
                    })
                ]
            }, sizeReview.id))
    });
}


/***/ }),

/***/ 5779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Spinner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/spinner.svg
/* harmony default export */ const spinner = ({"src":"/_next/static/media/spinner.bab76ccd.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./components/Spinner.module.css
var Spinner_module = __webpack_require__(5665);
var Spinner_module_default = /*#__PURE__*/__webpack_require__.n(Spinner_module);
;// CONCATENATED MODULE: ./components/Spinner.js




function Spinner({ className =""  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        className: `${(Spinner_module_default()).spinner} ${className}`,
        src: spinner,
        width: 45,
        height: 45,
        alt: "로딩 중...."
    });
}


/***/ }),

/***/ 3865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1979);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9331);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_SizeReviewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(254);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9706);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_3__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: "1"
                }
            },
            {
                params: {
                    id: "2"
                }
            }
        ],
        fallback: true
    };
}
async function getStaticProps(context) {
    const productId = context.params["id"];
    const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/products/${productId}`);
    const product = res.data;
    return {
        props: {
            product
        }
    };
}
function Product({ product  }) {
    const [sizeReviews, setSizeReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = router.query;
    async function getSizeReviews(targetId) {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/size_reviews/?product_id=${targetId}`);
        const nextSizeReviews = res.data.results ?? [];
        setSizeReviews(nextSizeReviews);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!id) return;
        getSizeReviews(id);
    }, [
        id
    ]);
    if (!product) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().loading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
                children: [
                    product.name,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().englishName),
                        children: product.englishName
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                            fill: true,
                            src: product.imgUrl,
                            alt: product.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().section),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionTitle),
                                        children: "제품 정보"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().info),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                            className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().infoTable),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "브랜드 / 품번"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                children: [
                                                                    product.brand,
                                                                    " / ",
                                                                    product.productCode
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "제품명"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: product.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "가격"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().salePrice),
                                                                        children: [
                                                                            product.price.toLocaleString(),
                                                                            "원"
                                                                        ]
                                                                    }),
                                                                    " ",
                                                                    product.salePrice.toLocaleString(),
                                                                    "원"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "포인트 적립"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: product.point.toLocaleString()
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "구매 후기"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().starRating),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StarRating__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        value: product.starRating
                                                                    }),
                                                                    " ",
                                                                    product.starRatingCount.toLocaleString()
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "좋아요"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().like),
                                                                children: [
                                                                    "♥",
                                                                    product.likeCount.toLocaleString()
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().section),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionTitle),
                                        children: "사이즈 추천"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SizeReviewList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        sizeReviews: sizeReviews ?? []
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().section),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionTitle),
                                    children: "사이즈 추천하기"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,357], () => (__webpack_exec__(3865)));
module.exports = __webpack_exports__;

})();