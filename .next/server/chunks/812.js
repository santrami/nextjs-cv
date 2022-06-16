"use strict";
exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 3812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./components/Navigation.js







const navStyle = {
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center"
};
const navBorder = {
    borderRadius: "0 0 20px 20px"
};
const Navigation = ()=>/*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        bg: "dark",
        expand: "lg",
        variant: "dark",
        style: navBorder,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                        children: "My CV"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                        className: "ms-auto pe-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faDiagramProject,
                                style: {
                                    color: "white",
                                    alignSelf: "center",
                                    fontSize: "0.8em"
                                },
                                transform: "shrink-1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/github",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const components_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/Layout.js


const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container py-4",
                children: children
            })
        ]
    })
;
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;