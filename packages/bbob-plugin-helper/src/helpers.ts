import { N } from "./char";
import TagNode from "./TagNode";

const isTagNode = (el: TagNode | string): el is TagNode =>
  typeof el === "object" && !!el.tag;
const isStringNode = (el: TagNode | string): el is string =>
  typeof el === "string";
const isEOL = (el: TagNode | string): el is string => el === N;

const keysReduce = <T, R>(
  obj: Record<string, T>,
  reduce: (carry: R, key: string) => R,
  def: R
): R => Object.keys(obj).reduce(reduce, def);

const getNodeLength = (node: TagNode | string): number => {
  if (isTagNode(node)) {
    return node.content.reduce(
      (count, contentNode) => count + getNodeLength(contentNode),
      0
    );
  }
  if (isStringNode(node)) {
    return node.length;
  }

  return 0;
};

/**
 * Appends value to Tag Node
 * @param value
 */
const appendToNode = (node: TagNode, value: string | TagNode) => {
  node.content.push(value);
};

/**
 * Replaces " to &qquot;
 */
const escapeHTML = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    // eslint-disable-next-line no-script-url
    .replace(/(javascript|data|vbscript):/gi, "$1%3A");

/**
 * Accept name and value and return valid html5 attribute string
 */
const attrValue = (name: string, value: any): string => {
  const type = typeof value;

  const types: Record<string, () => string> = {
    boolean: () => (value ? `${name}` : ""),
    number: () => `${name}="${value}"`,
    string: () => `${name}="${escapeHTML(value)}"`,
    object: () => `${name}="${escapeHTML(JSON.stringify(value))}"`,
  };

  return types[type] ? types[type]() : "";
};

/**
 * Transforms attrs to html params string
 */
const attrsToString = (
  values: Record<string, string | boolean> | null | undefined
): string => {
  // To avoid some malformed attributes
  if (values == null) {
    return "";
  }

  return keysReduce(
    values,
    (arr, key) => [...arr, attrValue(key, values[key])],
    [""]
  ).join(" ");
};

/**
 * Gets value from
 * @example
 * getUniqAttr({ 'foo': true, 'bar': bar' }) => 'bar'
 */
const getUniqAttr = (attrs: Record<string, any>) =>
  keysReduce(
    attrs,
    (res, key) => (attrs[key] === key ? attrs[key] : null),
    null as any
  );

export {
  attrsToString,
  attrValue,
  appendToNode,
  escapeHTML,
  getNodeLength,
  getUniqAttr,
  isTagNode,
  isStringNode,
  isEOL,
};
