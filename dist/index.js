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
var import_material = require("@mui/material");

// src/dccs.json
var dccs_default = [{ id: "b3028db2-209c-5862-8f4d-33c5b312332e", label: "GTEx", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/GTEx.png", description: "Gene expression and regulation across human tissues", homepage: "https://info.cfde.cloud/dcc/GTEx" }, { id: "089d8d63-3364-526f-9706-80d62d0ec88c", label: "Metabolomics", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Metabolomics.png", description: "Metabolomics", homepage: "https://info.cfde.cloud/dcc/Metabolomics" }, { id: "f3f490cf-fd69-579c-8ea3-472c7cf3fb59", label: "LINCS", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/LINCS-logo.png", description: "Omics signatures for drug & target discovery", homepage: "https://info.cfde.cloud/dcc/LINCS" }, { id: "d6bb00c3-7224-5001-b9c5-9838622fba40", label: "4DN", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/4DN.png", description: "Nuclear organization in space and time", homepage: "https://info.cfde.cloud/dcc/4DN" }, { id: "dd66e8a5-0e05-5a43-a0ca-18cc3698bb36", label: "SenNet", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/SenNet.png", description: "Mapping senescent cells", homepage: "https://info.cfde.cloud/dcc/SenNet" }, { id: "f65babf7-2875-5725-9635-210d654533f1", label: "ExRNA", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/exRNA.png", description: "Extracellular RNA communication", homepage: "https://info.cfde.cloud/dcc/ExRNA" }, { id: "a2e04869-b6e4-5951-9654-f3d9c5105692", label: "SMaHT", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/smath.png", description: "Mapping somatic mutations' health implications", homepage: "https://info.cfde.cloud/dcc/SMaHT" }, { id: "38468653-8c59-5fdb-b6ca-afa16d9c5c1e", label: "SCGE", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/scge.png", description: "Reducing the burden of diseases caused by genetic changes", homepage: "https://info.cfde.cloud/dcc/SCGE" }, { id: "a9aeab22-4fbc-5329-aef6-21110f463c23", label: "MoTrPAC", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/MoTrPAC.png", description: "The molecular map of exercise", homepage: "https://info.cfde.cloud/dcc/MoTrPAC" }, { id: "830ddbac-bf21-5612-af1a-75c713045299", label: "KOMP2", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/KOMP2.svg", homepage: "https://info.cfde.cloud/dcc/KOMP2" }, { id: "e31052b0-ac50-5ede-9828-698ff3610427", label: "GlyGen", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/glygen.png", description: "Computational and informatics resources for glycoscience", homepage: "https://info.cfde.cloud/dcc/GlyGen" }, { id: "cbfd44b8-684d-56b9-bfd4-45c0e259f896", label: "HMP", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/HMP.png", description: "Human microbiome in health and disease", homepage: "https://info.cfde.cloud/dcc/HMP" }, { id: "2399794e-74c6-5735-a039-0782cdeeb1e2", label: "SPARC", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/SPARC.svg", description: "Bridging the body and brain", homepage: "https://info.cfde.cloud/dcc/SPARC" }, { id: "65af85ae-82d5-5b81-bc66-6bddaa6420ce", label: "Kids First", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Kids First.png", description: "Data, tools, and resources empowering pediatric research", homepage: "https://info.cfde.cloud/dcc/Kids First" }, { id: "e332dadd-8084-5fbc-be41-29d75775aab3", label: "A2CPS", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/A2CPS.png", description: "Understanding the complex biological processes underlying chronic pain", homepage: "https://info.cfde.cloud/dcc/A2CPS" }, { id: "803ad44d-e7a2-550a-95c6-57855bf06be8", label: "HuBMAP", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/HuBMAP.png", description: "Cellular spatial atlas of the human body", homepage: "https://info.cfde.cloud/dcc/HuBMAP" }, { id: "a1289ebb-0306-59a1-b0fc-e4d03a4790d7", label: "IDG", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/IDG.png", description: "Illuminating GPCRs, kinases, ion channels, & other drug targets", homepage: "https://info.cfde.cloud/dcc/IDG" }, { id: "75b3be39-a021-5d80-b7e2-2a7938a1e11a", label: "Bridge2AI", icon: "https://cfde-drc.s3.amazonaws.com/assets/img/Bridge2AI.png", description: "Biomedical AI \u2194 people, data & ethics", homepage: "https://info.cfde.cloud/dcc/Bridge2AI" }];

// src/interactive.tsx
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
var radius_small = 160;
function InteractiveNavComponent() {
  const pie_chunk = 2 * Math.PI / dccs_default.length;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material.Container, { sx: { position: "relative", width: 200 }, children: [
    dccs_default.map((dcc, i) => {
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
            width: { md: 90, xs: 40 },
            height: { md: 90, xs: 40 },
            position: "absolute",
            transform: { md: `translate(${x}px, ${y}px)`, xs: `translate(${x_small}px, ${y_small}px)` }
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Link, { href: dcc.homepage, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material.Box,
            {
              sx: {
                position: "relative",
                width: { md: 60, xs: 30 },
                overflow: "hidden",
                height: { md: 60, xs: 30 }
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
var import_material2 = require("@mui/material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var CFDEWheel = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavModal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.Box, { sx: { position: "relative" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InteractiveNavComponent, {}) }) });
};
var index_default = CFDEWheel;
