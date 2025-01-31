import { generateUtilityClass, generateUtilityClasses } from '../className';

export interface ListClasses {
  /** Classname applied to the root element. */
  root: string;
  /** Classname applied to the root element if wrapped with nested context. */
  nesting: string;
  /** Styles applied to the root element, if `orientation="vertical"`. */
  vertical: string;
  /** Styles applied to the root element, if `orientation="horizontal"`. */
  horizontal: string;
  /** Classname applied to the root element if `scoped` is true. */
  scoped: string;
  /** Classname applied to the root element if `size="sm"`. */
  sizeSm: string;
  /** Classname applied to the root element if `size="md"`. */
  sizeMd: string;
  /** Classname applied to the root element if `size="lg"`. */
  sizeLg: string;
  /** Classname applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Classname applied to the root element if `color="neutral"`. */
  colorNeutral: string;
  /** Classname applied to the root element if `color="danger"`. */
  colorDanger: string;
  /** Classname applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Classname applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Classname applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** Classname applied to the root element if `variant="plain"`. */
  variantPlain: string;
  /** Classname applied to the root element if `variant="outlined"`. */
  variantOutlined: string;
  /** Classname applied to the root element if `variant="soft"`. */
  variantSoft: string;
  /** Classname applied to the root element if `variant="solid"`. */
  variantSolid: string;
}

export type ListClassKey = keyof ListClasses;

export function getListUtilityClass(slot: string): string {
  return generateUtilityClass('JoyList', slot);
}

const listClasses: ListClasses = generateUtilityClasses('JoyList', [
  'root',
  'nesting',
  'vertical',
  'horizontal',
  'scoped',
  'sizeSm',
  'sizeMd',
  'sizeLg',
  'colorPrimary',
  'colorNeutral',
  'colorDanger',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
  'variantPlain',
  'variantOutlined',
  'variantSoft',
  'variantSolid',
]);

export default listClasses;
