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

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/modal.tsx
var import_react = require("react");
var import_Modal = __toESM(require("@mui/material/Modal"));
var import_Fab = __toESM(require("@mui/material/Fab"));
var import_jsx_runtime = require("react/jsx-runtime");
function InteractiveNavModal({ children }) {
  const [open, setOpen] = (0, import_react.useState)(true);
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
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children })
      }
    )
  ] });
}

// src/interactive.tsx
var import_material = require("@mui/material");

// src/dccs.json
var dccs_default = [{ id: "b3028db2-209c-5862-8f4d-33c5b312332e", label: "GTEx", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/GTEx.png", description: "Gene expression and regulation across human tissues", homepage: "https://info.cfde.cloud/dcc/GTEx" }, { id: "089d8d63-3364-526f-9706-80d62d0ec88c", label: "Metabolomics", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Metabolomics.png", description: "Metabolomics", homepage: "https://info.cfde.cloud/dcc/Metabolomics" }, { id: "f3f490cf-fd69-579c-8ea3-472c7cf3fb59", label: "LINCS", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/LINCS-logo.png", description: "Omics signatures for drug & target discovery", homepage: "https://info.cfde.cloud/dcc/LINCS" }, { id: "d6bb00c3-7224-5001-b9c5-9838622fba40", label: "4DN", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/4DN.png", description: "Nuclear organization in space and time", homepage: "https://info.cfde.cloud/dcc/4DN" }, { id: "dd66e8a5-0e05-5a43-a0ca-18cc3698bb36", label: "SenNet", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/SenNet.png", description: "Mapping senescent cells", homepage: "https://info.cfde.cloud/dcc/SenNet" }, { id: "f65babf7-2875-5725-9635-210d654533f1", label: "ExRNA", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/exRNA.png", description: "Extracellular RNA communication", homepage: "https://info.cfde.cloud/dcc/ExRNA" }, { id: "a2e04869-b6e4-5951-9654-f3d9c5105692", label: "SMaHT", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/smath.png", description: "Mapping somatic mutations' health implications", homepage: "https://info.cfde.cloud/dcc/SMaHT" }, { id: "38468653-8c59-5fdb-b6ca-afa16d9c5c1e", label: "SCGE", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/scge.png", description: "Reducing the burden of diseases caused by genetic changes", homepage: "https://info.cfde.cloud/dcc/SCGE" }, { id: "a9aeab22-4fbc-5329-aef6-21110f463c23", label: "MoTrPAC", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/MoTrPAC.png", description: "The molecular map of exercise", homepage: "https://info.cfde.cloud/dcc/MoTrPAC" }, { id: "830ddbac-bf21-5612-af1a-75c713045299", label: "KOMP2", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/KOMP2.svg", homepage: "https://info.cfde.cloud/dcc/KOMP2" }, { id: "e31052b0-ac50-5ede-9828-698ff3610427", label: "GlyGen", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/glygen.png", description: "Computational and informatics resources for glycoscience", homepage: "https://info.cfde.cloud/dcc/GlyGen" }, { id: "cbfd44b8-684d-56b9-bfd4-45c0e259f896", label: "HMP", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/HMP.png", description: "Human microbiome in health and disease", homepage: "https://info.cfde.cloud/dcc/HMP" }, { id: "2399794e-74c6-5735-a039-0782cdeeb1e2", label: "SPARC", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/SPARC.svg", description: "Bridging the body and brain", homepage: "https://info.cfde.cloud/dcc/SPARC" }, { id: "65af85ae-82d5-5b81-bc66-6bddaa6420ce", label: "Kids First", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Kids First.png", description: "Data, tools, and resources empowering pediatric research", homepage: "https://info.cfde.cloud/dcc/Kids First" }, { id: "e332dadd-8084-5fbc-be41-29d75775aab3", label: "A2CPS", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/A2CPS.png", description: "Understanding the complex biological processes underlying chronic pain", homepage: "https://info.cfde.cloud/dcc/A2CPS" }, { id: "803ad44d-e7a2-550a-95c6-57855bf06be8", label: "HuBMAP", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/HuBMAP.png", description: "Cellular spatial atlas of the human body", homepage: "https://info.cfde.cloud/dcc/HuBMAP" }, { id: "a1289ebb-0306-59a1-b0fc-e4d03a4790d7", label: "IDG", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/IDG.png", description: "Illuminating GPCRs, kinases, ion channels, & other drug targets", homepage: "https://info.cfde.cloud/dcc/IDG" }, { id: "75b3be39-a021-5d80-b7e2-2a7938a1e11a", label: "Bridge2AI", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Bridge2AI.png", description: "Biomedical AI \u2194 people, data & ethics", homepage: "https://info.cfde.cloud/dcc/Bridge2AI" }];

// src/interactive.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var centers = (radius) => [
  {
    label: "coordination",
    endpoint: "https://info.cfde.cloud/centers/ICC",
    rotate: "216deg",
    position: {
      // right: "50%",
      // top: "0%"
      // top: 60
      transform: `translate(${-radius / 20}px, ${radius / 3.2}px)`
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
      transform: `translate(${radius / 2.5}px, ${radius / 1.77}px)`
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
      transform: `translate(${radius / 3.25}px, ${radius * 1.07}px)`
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
      transform: `translate(${-radius / 5}px, ${radius * 1.135}px)`
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
      transform: `translate(${-radius / 2.4}px, ${radius / 1.49}px)`
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
  const [dimensions, setDimensions] = (0, import_react2.useState)(() => ({ height: window.innerHeight, width: window.innerWidth }));
  (0, import_react2.useEffect)(() => {
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
function InteractiveNavComponent() {
  const pie_chunk = 2 * Math.PI / dccs_default.length;
  const dimensions = useViewportDimensions();
  const radius = Math.max(Math.min(dimensions.width / 2, dimensions.height / 2, default_radius) - 30, 100);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: { position: "relative", height: "100vh" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: { position: "absolute", margin: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material.Container, { sx: { position: "relative", display: "flex", justifyContent: "center", marginTop: 10, height: radius * 2.9 }, children: [
    dccs_default.map((dcc, i) => {
      const angle = pie_chunk * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle) + radius;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Tooltip, { title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Typography, { children: dcc.description }), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Link, { href: dcc.homepage, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material.Box,
            {
              sx: {
                position: "relative",
                width: radius / 5,
                overflow: "hidden",
                height: radius / 5
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
      ) }, dcc.label || "");
    }),
    centers(radius).map((center, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Button, { sx: __spreadValues({
        position: "absolute",
        width: radius / 1.47,
        height: radius / 1.47
      }, center.position || {}), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { sx: {
        position: "relative",
        width: radius / 1.65,
        height: radius / 1.65
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Typography, { sx: __spreadValues({ color: "#FFF", position: "absolute", textTransform: "uppercase", fontSize: radius / 17.5 }, center.text_position || {}), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: center.label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Container, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: `https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`, alt: center.label, style: __spreadValues({ position: "absolute", width: radius / 7, height: radius / 7, zIndex: 100 }, center.image_position || {}) }) })
      ] }) }) }, center.label);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material.Button,
      {
        variant: "contained",
        sx: {
          background: "#fff",
          borderRadius: 1e3,
          width: radius / 2.3,
          height: radius / 2.3,
          position: "absolute",
          transform: `translate(${radius / 250}px, ${radius / 1.14}px)`,
          padding: 1,
          zIndex: 100
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Link, { href: "https://info.cfde.cloud", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_material.Box,
          {
            sx: {
              position: "relative",
              width: radius / 3,
              overflow: "hidden",
              height: radius / 3,
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
          width: radius / 1.2,
          height: radius / 1.2,
          position: "absolute",
          transform: `translate(${radius / 250}px, ${radius / 1.46}px)`,
          opacity: "0.5"
        }
      }
    )
  ] }) }) });
}

// src/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CFDEWheel = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavModal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavComponent, {}) });
};
var index_default = CFDEWheel;
