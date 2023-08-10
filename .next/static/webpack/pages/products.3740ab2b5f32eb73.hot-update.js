"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products.js":
/*!*******************************!*\
  !*** ./src/pages/products.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/pages/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showRemoveModal, setShowRemoveModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedProductIndex, setSelectedProductIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchProducts = async ()=>{\n        try {\n            const res = await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://dummyjson.com/products\", {\n                params: {\n                    limit: 10\n                }\n            });\n            setProducts(res.data.products);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n    }, []);\n    const handleRemoveClick = (index)=>{\n        setSelectedProductIndex(index);\n        setShowRemoveModal(true);\n    };\n    const handleConfirmRemove = ()=>{\n        if (selectedProductIndex !== null) {\n            const updatedProducts = products.filter((_, index)=>index !== selectedProductIndex);\n            setProducts(updatedProducts);\n            const deletedProductId = products[selectedProductIndex].id; // Tentukan ID produk yang akan dihapus\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"https://dummyjson.com/products/\".concat(deletedProductId)).then((response)=>{\n                console.log(\"Product deleted:\", response.data);\n            }).catch((error)=>{\n                console.error(\"Error deleting product:\", error);\n            });\n        }\n        setShowRemoveModal(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-600 text-white pb-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"min-h-screen mx-auto max-w-6xl pt-24\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex justify-between items-center mb-3 px-3 lg:px-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                class: \"font-bold text-4xl mb-6\",\n                                children: \"Products\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"add\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    role: \"button\",\n                                    class: \"inline-block bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-blue-600\",\n                                    children: \"Add new product\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid lg:grid-cols-4 grid-cols-2 gap-6 px-3 lg:px-0\",\n                        children: products && products.length > 0 && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-700 rounded-lg p-3 min-h-[20rem] relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                        className: \"block h-[10rem] bg-slate-100 rounded-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: product.thumbnail,\n                                            alt: product.title,\n                                            className: \"w-full h-full object-contain aspect-auto\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"py-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg\",\n                                                children: product.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"text-sm\",\n                                                children: [\n                                                    \"Rp \",\n                                                    product.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex space-x-3 justify-between align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleRemoveClick(index),\n                                                type: \"button\",\n                                                className: \"border border-red-600 bg-white text-red-600 block w-full px-5 py-2 hover:bg-red-600 hover:text-white rounded-lg text-sm\",\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/edit\",\n                                                type: \"button\",\n                                                className: \"border text-center border-emerald-600 bg-white text-emerald-600 block w-full px-5 py-2 hover:bg-emerald-600 hover:text-white rounded-lg text-sm\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    showRemoveModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-6 text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"mb-5 text-lg font-normal text-gray-500\",\n                                        children: [\n                                            \"Are you sure you want to delete \",\n                                            products[selectedProductIndex].title,\n                                            \"?\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleConfirmRemove,\n                                        type: \"button\",\n                                        className: \"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                        children: \"Ok\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setShowRemoveModal(false),\n                                        type: \"button\",\n                                        className: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                                lineNumber: 100,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                            lineNumber: 98,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\Telkom DBT\\\\21 Jul\\\\src\\\\pages\\\\products.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"/aTxo3xxXwvW7/8Fw9laHHu1bfE=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ0k7QUFFOUIsU0FBU0s7O0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNTLHNCQUFzQkMsd0JBQXdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpFLE1BQU1XLGdCQUFnQjtRQUNsQixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNVixpREFBS0EsQ0FBQyxrQ0FBa0M7Z0JBQ3REVyxRQUFRO29CQUNKQyxPQUFPO2dCQUNYO1lBQ0o7WUFDQVIsWUFBWU0sSUFBSUcsSUFBSSxDQUFDVixRQUFRO1FBQ2pDLEVBQUUsT0FBT1csS0FBSztZQUNWQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFFQWYsZ0RBQVNBLENBQUM7UUFDTlU7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNUSxvQkFBb0IsQ0FBQ0M7UUFDdkJWLHdCQUF3QlU7UUFDeEJaLG1CQUFtQjtJQUN2QjtJQUVBLE1BQU1hLHNCQUFzQjtRQUN4QixJQUFJWix5QkFBeUIsTUFBTTtZQUMvQixNQUFNYSxrQkFBa0JqQixTQUFTa0IsTUFBTSxDQUFDLENBQUNDLEdBQUdKLFFBQVVBLFVBQVVYO1lBQ2hFSCxZQUFZZ0I7WUFDWixNQUFNRyxtQkFBbUJwQixRQUFRLENBQUNJLHFCQUFxQixDQUFDaUIsRUFBRSxFQUFFLHVDQUF1QztZQUNuR3hCLHVEQUFZLENBQUMsa0NBQW1ELE9BQWpCdUIsbUJBQzFDRyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0haLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JXLFNBQVNkLElBQUk7WUFDakQsR0FDQ2UsS0FBSyxDQUFDLENBQUNDO2dCQUNKZCxRQUFRYyxLQUFLLENBQUMsMkJBQTJCQTtZQUM3QztRQUVSO1FBQ0F2QixtQkFBbUI7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ3dCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDOUIsK0NBQU1BOzs7OzswQkFDUCw4REFBQzZCO2dCQUFJRSxPQUFNOztrQ0FDUCw4REFBQ0Y7d0JBQUlFLE9BQU07OzBDQUNQLDhEQUFDQztnQ0FBR0QsT0FBTTswQ0FBMEI7Ozs7OzswQ0FDcEMsOERBQUNFO2dDQUFFQyxNQUFLOzBDQUNKLDRFQUFDQztvQ0FBS0MsTUFBSztvQ0FBU0wsT0FBTTs4Q0FBNkU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcvRyw4REFBQ0Y7d0JBQUlDLFdBQVU7a0NBQ1Y1QixZQUNHQSxTQUFTbUMsTUFBTSxHQUFHLEtBQ2xCbkMsU0FBU29DLEdBQUcsQ0FBQyxDQUFDQyxTQUFTdEIsc0JBQ25CLDhEQUFDWTtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNVO3dDQUFPVixXQUFVO2tEQUNkLDRFQUFDVzs0Q0FDR0MsS0FBS0gsUUFBUUksU0FBUzs0Q0FDdEJDLEtBQUtMLFFBQVFNLEtBQUs7NENBQ2xCZixXQUFVOzs7Ozs7Ozs7OztrREFHbEIsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2dCO2dEQUFHaEIsV0FBVTswREFBV1MsUUFBUU0sS0FBSzs7Ozs7OzBEQUN0Qyw4REFBQ0U7Z0RBQUdqQixXQUFVOztvREFBVTtvREFBSVMsUUFBUVMsS0FBSzs7Ozs7Ozs7Ozs7OztrREFFN0MsOERBQUNuQjt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNtQjtnREFDR0MsU0FBUyxJQUFNbEMsa0JBQWtCQztnREFDakNrQyxNQUFLO2dEQUNMckIsV0FBVTswREFDYjs7Ozs7OzBEQUdELDhEQUFDRztnREFDR0MsTUFBSztnREFDTGlCLE1BQUs7Z0RBQ0xyQixXQUFVOzBEQUNiOzs7Ozs7Ozs7Ozs7OytCQXhCZ0ViOzs7Ozs7Ozs7O29CQWlDcEZiLGlDQUNHLDhEQUFDeUI7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUVYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNnQjt3Q0FBR2hCLFdBQVU7OzRDQUF5Qzs0Q0FDbEI1QixRQUFRLENBQUNJLHFCQUFxQixDQUFDdUMsS0FBSzs0Q0FBQzs7Ozs7OztrREFFMUUsOERBQUNJO3dDQUNHQyxTQUFTaEM7d0NBQ1RpQyxNQUFLO3dDQUNMckIsV0FBVTtrREFDYjs7Ozs7O2tEQUdELDhEQUFDbUI7d0NBQ0dDLFNBQVMsSUFBTTdDLG1CQUFtQjt3Q0FDbEM4QyxNQUFLO3dDQUNMckIsV0FBVTtrREFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQztHQXhIUzdCO0tBQUFBO0FBMEhULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy5qcz85MzhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2hvd1JlbW92ZU1vZGFsLCBzZXRTaG93UmVtb3ZlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RJbmRleCwgc2V0U2VsZWN0ZWRQcm9kdWN0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cycsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVDbGljayA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFByb2R1Y3RJbmRleChpbmRleCk7XG4gICAgICAgIHNldFNob3dSZW1vdmVNb2RhbCh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ29uZmlybVJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkUHJvZHVjdEluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gc2VsZWN0ZWRQcm9kdWN0SW5kZXgpO1xuICAgICAgICAgICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRQcm9kdWN0SWQgPSBwcm9kdWN0c1tzZWxlY3RlZFByb2R1Y3RJbmRleF0uaWQ7IC8vIFRlbnR1a2FuIElEIHByb2R1ayB5YW5nIGFrYW4gZGloYXB1c1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGBodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvJHtkZWxldGVkUHJvZHVjdElkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0IGRlbGV0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgc2V0U2hvd1JlbW92ZU1vZGFsKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXNsYXRlLTYwMCB0ZXh0LXdoaXRlIHBiLTYnPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWluLWgtc2NyZWVuIG14LWF1dG8gbWF4LXctNnhsIHB0LTI0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTMgcHgtMyBsZzpweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTR4bCBtYi02XCI+UHJvZHVjdHM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB4LTUgcHktMiBob3ZlcjpiZy1ibHVlLTYwMFwiPkFkZCBuZXcgcHJvZHVjdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGxnOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC02IHB4LTMgbGc6cHgtMCc+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1zbGF0ZS03MDAgcm91bmRlZC1sZyBwLTMgbWluLWgtWzIwcmVtXSByZWxhdGl2ZScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSdibG9jayBoLVsxMHJlbV0gYmctc2xhdGUtMTAwIHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9IC8vIFViYWggJ3Byb2R1Y3QudGh1bWJuYWlsJyBtZW5qYWRpIFVSTCBnYW1iYXIgcHJvZHVrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfSAvLyBUYW1iYWhrYW4gYXRyaWJ1dCBhbHQgdW50dWsgYWtzZXNpYmlsaXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBvYmplY3QtY29udGFpbiBhc3BlY3QtYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWxnJz57cHJvZHVjdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1zbSc+UnAge3Byb2R1Y3QucHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMyBqdXN0aWZ5LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVDbGljayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1yZWQtNjAwIGJnLXdoaXRlIHRleHQtcmVkLTYwMCBibG9jayB3LWZ1bGwgcHgtNSBweS0yIGhvdmVyOmJnLXJlZC02MDAgaG92ZXI6dGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2VkaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyIHRleHQtY2VudGVyIGJvcmRlci1lbWVyYWxkLTYwMCBiZy13aGl0ZSB0ZXh0LWVtZXJhbGQtNjAwIGJsb2NrIHctZnVsbCBweC01IHB5LTIgaG92ZXI6YmctZW1lcmFsZC02MDAgaG92ZXI6dGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFJlbW92ZSBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICB7c2hvd1JlbW92ZU1vZGFsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGJnLXdoaXRlIHctZnVsbCBtYXgtdy1tZCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTYgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi01IHRleHQtbGcgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHtwcm9kdWN0c1tzZWxlY3RlZFByb2R1Y3RJbmRleF0udGl0bGV9P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25maXJtUmVtb3ZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVtb3ZlTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTIwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1zbSBmb250LW1lZGl1bSBweC01IHB5LTIuNSBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOnotMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJOYXZiYXIiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzaG93UmVtb3ZlTW9kYWwiLCJzZXRTaG93UmVtb3ZlTW9kYWwiLCJzZWxlY3RlZFByb2R1Y3RJbmRleCIsInNldFNlbGVjdGVkUHJvZHVjdEluZGV4IiwiZmV0Y2hQcm9kdWN0cyIsInJlcyIsInBhcmFtcyIsImxpbWl0IiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZW1vdmVDbGljayIsImluZGV4IiwiaGFuZGxlQ29uZmlybVJlbW92ZSIsInVwZGF0ZWRQcm9kdWN0cyIsImZpbHRlciIsIl8iLCJkZWxldGVkUHJvZHVjdElkIiwiaWQiLCJkZWxldGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJoMSIsImEiLCJocmVmIiwic3BhbiIsInJvbGUiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiZmlndXJlIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiLCJoMyIsImg0IiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.js\n"));

/***/ })

});