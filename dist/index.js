"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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

// src/interactive.tsx
var import_material = require("@mui/material");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var centers = (radius) => [
  {
    label: "coordination",
    endpoint: "https://info.cfde.cloud/centers/ICC",
    rotate: "216deg",
    position: {
      // right: "50%",
      // top: "0%"
      // top: 60
      transform: `translate(${-radius / 20}px, ${radius / 3.2 + 10}px)`
    },
    text_position: {
      top: "30%",
      left: "23%"
    },
    image_position: {
      top: "60%",
      left: "47%"
    }
  },
  {
    label: "cloud",
    endpoint: "https://info.cfde.cloud/centers/CWIC",
    rotate: "-72deg",
    position: {
      // left: "40%",
      // top: "70%"
      transform: `translate(${radius / 2.5}px, ${radius / 1.77 + 10}px)`
    },
    text_position: {
      top: "50%",
      left: "55%"
    },
    image_position: {
      top: "50%",
      left: "20%"
    }
  },
  {
    label: "knowledge",
    endpoint: "https://info.cfde.cloud/centers/KC",
    position: {
      transform: `translate(${radius / 3.25}px, ${radius * 1.07 + 10}px)`
    },
    text_position: {
      top: "75%",
      left: "10%"
    },
    image_position: {
      top: "30%",
      left: "13%"
    }
  },
  {
    label: "training",
    endpoint: "https://info.cfde.cloud/centers/TC",
    rotate: "72deg",
    position: {
      transform: `translate(${-radius / 5}px, ${radius * 1.135 + 10}px)`
    },
    text_position: {
      top: "65%",
      left: "15%"
    },
    image_position: {
      top: "20%",
      left: "45%"
    }
  },
  {
    label: "data",
    endpoint: "https://info.cfde.cloud/centers/DRC",
    rotate: "144deg",
    position: {
      transform: `translate(${-radius / 2.4}px, ${radius / 1.49 + 10}px)`
    },
    text_position: {
      top: "25%",
      left: "25%"
    },
    image_position: {
      top: "35%",
      left: "60%"
    }
  }
];
var default_radius = 280;
function useViewportDimensions() {
  const [dimensions, setDimensions] = (0, import_react.useState)(() => ({ height: window.innerHeight, width: window.innerWidth }));
  (0, import_react.useEffect)(() => {
    const ctx = {};
    const listener = () => {
      if (ctx.resizeTimeout) clearTimeout(ctx.resizeTimeout);
      ctx.resizeTimeout = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        });
      }, 200);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);
  return dimensions;
}
function InteractiveNavComponent({ dccs, handleClose }) {
  const pie_chunk = 2 * Math.PI / dccs.length;
  const dimensions = useViewportDimensions();
  const radius = Math.max(Math.min(dimensions.width / 2, dimensions.height / 2, default_radius) - 30, 100);
  const divRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (divRef.current) {
      divRef.current.addEventListener("click", handleClose);
    }
  }, [divRef.current]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Container, { sx: { position: "relative", height: "100vh" }, ref: divRef, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Container, { sx: { position: "absolute", margin: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_material.Container, { sx: { position: "relative", display: "flex", justifyContent: "center", marginTop: 10, height: radius * 2.9 }, children: [
    dccs.map((dcc, i) => {
      const angle = pie_chunk * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle) + radius;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Tooltip, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Typography, { children: dcc.description }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_material.IconButton,
        {
          sx: {
            background: "#fff",
            borderRadius: 1e3,
            width: radius / 3.5,
            height: radius / 3.5,
            position: "absolute",
            transform: `translate(${x}px, ${y}px)`
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Link, { href: dcc.homepage, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.Box,
            {
              sx: {
                position: "relative",
                width: radius / 5,
                overflow: "hidden",
                height: radius / 5
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: dcc.icon || "", alt: dcc.short_label || "", style: {
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
      ) }, dcc.label || "");
    }),
    centers(radius).map((center, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_material.Button,
        {
          sx: __spreadValues({
            position: "absolute",
            width: radius / 1.47,
            height: radius / 1.47
          }, center.position || {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Container, { sx: {
            position: "relative",
            width: radius / 1.65,
            height: radius / 1.65
          }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { href: center.endpoint, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label}.png`, alt: center.label, loading: "lazy", decoding: "async", sizes: "100vw", style: {
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Typography, { sx: __spreadValues({ color: "#FFF", position: "absolute", textTransform: "uppercase", fontSize: radius / 17.5 }, center.text_position || {}), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: center.label }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`, alt: center.label, style: __spreadValues({ position: "absolute", width: radius / 7, height: radius / 7, zIndex: 100 }, center.image_position || {}) }) })
          ] }) })
        },
        center.label
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_material.Button,
      {
        variant: "contained",
        sx: {
          background: "#fff",
          borderRadius: 1e3,
          width: radius / 2.3,
          height: radius / 2.3,
          position: "absolute",
          transform: `translate(${radius / 250}px, ${radius / 1.14 + 10}px)`,
          padding: 1,
          zIndex: 100
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Link, { href: "https://info.cfde.cloud", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_material.Box,
          {
            sx: {
              position: "relative",
              width: radius / 3,
              overflow: "hidden",
              height: radius / 3,
              zIndex: 1e3
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/CFDE_logo.png", alt: "CFDE_Logo", style: {
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_material.Container,
      {
        sx: {
          background: "#000",
          borderRadius: "50%",
          width: radius / 1.2,
          height: radius / 1.2,
          position: "absolute",
          transform: `translate(${radius / 250}px, ${radius / 1.46 + 10}px)`,
          opacity: "0.5"
        }
      }
    )
  ] }) }) });
}

// src/index.tsx
var import_react2 = require("react");
var import_Modal = __toESM(require("@mui/material/Modal"));
var import_Fab = __toESM(require("@mui/material/Fab"));
var import_Button = __toESM(require("@mui/material/Button"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var FabComponent = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_Fab.default, __spreadProps(__spreadValues({}, props), { sx: {
    position: "fixed",
    bottom: 50,
    right: 50,
    height: 70,
    width: 70,
    backgroundColor: "#FFF",
    padding: 0
  }, children }));
};
var CFDEWheel = ({ button }) => {
  const [dccs, setDccs] = (0, import_react2.useState)([]);
  const [open, setOpen] = (0, import_react2.useState)(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Wrapper = button ? import_Button.default : FabComponent;
  (0, import_react2.useEffect)(() => {
    const fetch_dccs = () => __async(null, null, function* () {
      const r = yield fetch("https://raw.githubusercontent.com/MaayanLab/cfde-wheel/refs/heads/main/src/dccs.json");
      setDccs(yield r.json());
    });
    fetch_dccs();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Wrapper, { onClick: handleOpen, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: "https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/cfde_unified_icon.svg", alt: "nav-but", width: 120, height: 120 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_Modal.default,
      {
        open,
        onClose: handleClose,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InteractiveNavComponent, { dccs, handleClose }) })
      }
    )
  ] });
};
var index_default = CFDEWheel;
