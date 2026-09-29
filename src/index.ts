// The package's public interface (see docs/component-interface.md).
//
// The components are styled with PrimeVue and render with KaTeX, which the
// host provides: install PrimeVue (with a theme) and import
// 'katex/dist/katex.min.css', 'primeicons/primeicons.css' and
// 'vue3-math-editor/style.css'.

// The editor.
export { default as EquationWorkbench } from './components/EquationWorkbench.vue'
export type { EquationLine, UnitsIssue, VariableUnits } from './editor/units'
export { importContentMathML, looksLikeContentMathML } from './editor/mathmlImport'
export type { MathMLImport } from './editor/mathmlImport'
export { CELLML_NAMESPACE } from './editor/exports'

// Units checking (optional; libcellml.js is provided by the host).
export { default as UnitsPanel } from './units/UnitsPanel.vue'
export { useUnitsChecker, LIBCELLML_KEY } from './units/useUnitsChecker'
export type {
  ProvidedLibCellML,
  UnitsCheckerOptions,
  UnitsCheckerStatus,
} from './units/useUnitsChecker'
export { UnitsChecker, missingUnits } from './units/check'
export { UnitsLibrary } from './units/library'
export type { UnitsLibraryProblem, UnitsSource } from './units/library'
export { NEW_UNITS_SOURCE, PREFIXES, newUnitsFile } from './units/definitions'
export type { UnitsDefinition, UnitsPart } from './units/definitions'
export type { LibCellML } from './units/libcellml'
