"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/modal.tsx
var import_react = require("react");
var import_Box = __toESM(require("@mui/material/Box"));
var import_Modal = __toESM(require("@mui/material/Modal"));
var import_Fab = __toESM(require("@mui/material/Fab"));
var import_jsx_runtime = require("react/jsx-runtime");
function InteractiveNavModal({ children }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Fab.default, { onClick: handleOpen, sx: {
      position: "fixed",
      bottom: 50,
      right: 50,
      height: 70,
      width: 70,
      backgroundColor: "#FFF",
      padding: 0
    }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/cfde_unified_icon.svg", alt: "nav-but", width: 120, height: 120 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Modal.default,
      {
        open,
        onClose: handleClose,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { children })
      }
    )
  ] });
}

// src/interactive.tsx
var import_react2 = require("react");
var import_material = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var centers = [
  {
    label: "cloud",
    endpoint: "https://info.cfde.cloud/centers/CWIC",
    rotate: "-72deg",
    position: {
      left: { md: 85, xs: 60 },
      top: { md: 310, xs: 320 }
    },
    text_position: {
      top: { md: 80, xs: 55 },
      left: { md: "50%", xs: "63%" }
    },
    image_position: {
      top: 90,
      left: "20%"
    },
    image_position_small: {
      top: 70,
      left: "30%"
    }
  },
  {
    label: "knowledge",
    endpoint: "https://info.cfde.cloud/centers/KC",
    position: {
      left: { md: 58, xs: 40 },
      top: { md: 449, xs: 420 }
    },
    text_position: {
      top: { md: 125, xs: 100 },
      left: "10%"
    },
    image_position: {
      top: 53,
      left: "13%"
    },
    image_position_small: {
      top: 45,
      left: "15%"
    }
  },
  {
    label: "training",
    endpoint: "https://info.cfde.cloud/centers/TC",
    rotate: "72deg",
    position: {
      left: { md: -83, xs: -65 },
      top: { md: 467, xs: 434 }
    },
    text_position: {
      top: { md: 105, xs: 85 },
      left: "15%"
    },
    image_position: {
      top: 35,
      left: "45%"
    },
    image_position_small: {
      top: 30,
      left: "42%"
    }
  },
  {
    label: "data",
    endpoint: "https://info.cfde.cloud/centers/DRC",
    rotate: "144deg",
    position: {
      left: { md: -143, xs: -110 },
      top: { md: 338, xs: 337 }
    },
    text_position: {
      top: { md: 50, xs: 30 },
      left: { md: "25%", xs: "12%" }
    },
    image_position: {
      top: 65,
      left: "55%"
    },
    image_position_small: {
      top: 55,
      left: "45%"
    }
  },
  {
    label: "coordination",
    endpoint: "https://info.cfde.cloud/centers/ICC",
    rotate: "216deg",
    position: {
      left: { md: -39, xs: -31 },
      top: { md: 240, xs: 265 }
    },
    text_position: {
      top: { md: 60, xs: 30 },
      left: "23%"
    },
    image_position: {
      top: 100,
      left: "47%"
    },
    image_position_small: {
      top: 55,
      left: "47%"
    }
  }
];
var radius = 280;
var radius_small = 195;
function InteractiveNavComponent() {
  const [dccs, setDccs] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    const get_dccs = () => __async(null, null, function* () {
      const res = yield fetch("http://localhost:3000/chat/dccInfo");
      const { dccs: dccs2 } = yield res.json();
      setDccs(dccs2);
    });
    get_dccs();
  }, []);
  const pie_chunk = 2 * Math.PI / dccs.length;
  console.log(dccs);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material.Container, { sx: { position: "relative", width: 200 }, children: [
    dccs.map((dcc, i) => {
      const angle = pie_chunk * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle) + 400;
      const x_small = radius_small * Math.cos(angle);
      const y_small = radius_small * Math.sin(angle) + 400;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Tooltip, { title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Typography, { children: dcc.description }), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_material.Button,
        {
          variant: "contained",
          sx: {
            background: "#fff",
            borderRadius: 1e3,
            width: { md: 90, xs: 60 },
            height: { md: 90, xs: 60 },
            position: "absolute",
            transform: { md: `translate(${x}px, ${y}px)`, xs: `translate(${x_small}px, ${y_small}px)` }
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Link, { href: dcc.homepage, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material.Box,
            {
              sx: {
                position: "relative",
                width: { md: 60, xs: 40 },
                overflow: "hidden",
                height: { md: 60, xs: 40 }
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: dcc.icon || "", alt: dcc.short_label || "", style: {
                top: 0,
                left: 0,
                position: "absolute",
                maxWidth: "100%",
                height: "100%",
                objectFit: "contain",
                color: "transparent"
              } })
            }
          ) })
        }
      ) }, dcc.short_label || "");
    }),
    centers.map((center, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Button, { sx: __spreadValues({
        position: "absolute",
        width: { md: 190, xs: 150 },
        height: { md: 190, xs: 150 }
      }, center.position || {}), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: {
        position: "relative",
        width: { md: 170, xs: 125 },
        height: { md: 170, xs: 125 }
      }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { href: center.endpoint, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label}.png`, alt: center.label, loading: "lazy", decoding: "async", sizes: "100vw", style: {
          position: "absolute",
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          inset: "0px",
          objectFit: "contain",
          color: "transparent",
          display: "block",
          transform: `rotate(${center.rotate || "0deg"})`
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Typography, { sx: __spreadValues({ color: "#FFF", position: "absolute", textTransform: "uppercase", fontSize: { md: 16, xs: 11.5 } }, center.text_position || {}), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: center.label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: { display: { md: "block", xs: "none" } }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`, alt: center.label, style: __spreadValues({ position: "absolute", width: 40, height: 40, zIndex: 100 }, center.image_position || {}) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: { display: { md: "none", xs: "block" } }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`, alt: center.label, style: __spreadValues({ position: "absolute", zIndex: 100, width: 30, height: 30 }, center.image_position_small || {}) }) })
      ] }) }) }, center.label);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material.Button,
      {
        variant: "contained",
        sx: {
          background: "#fff",
          borderRadius: 1e3,
          width: { md: 120, xs: 110 },
          height: { md: 120, xs: 110 },
          position: "absolute",
          top: { md: 395, xs: 365 },
          left: { md: 5, xs: -5 },
          padding: 1,
          zIndex: 100
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Link, { href: "https://info.cfde.cloud", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_material.Box,
          {
            sx: {
              position: "relative",
              width: { md: 100, xs: 80 },
              overflow: "hidden",
              height: { md: 100, xs: 80 },
              zIndex: 100
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: "https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/CFDE_logo.png", alt: "CFDE_Logo", style: {
              top: 0,
              left: 0,
              position: "absolute",
              maxWidth: "100%",
              height: "100%",
              objectFit: "contain",
              color: "transparent"
            } })
          }
        ) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material.Container,
      {
        sx: {
          background: "#000",
          borderRadius: "50%",
          width: { md: 230, xs: 200 },
          height: { md: 230, xs: 200 },
          position: "absolute",
          top: { md: 340, xs: 320 },
          left: { md: -50, xs: -50 },
          opacity: "0.5"
        }
      }
    )
  ] });
}

// src/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CFDEWheel = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavModal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavComponent, {}) });
};
var index_default = CFDEWheel;
