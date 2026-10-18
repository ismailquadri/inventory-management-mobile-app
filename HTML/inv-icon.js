import ICONS from './components/icon-data.js';

class InvIcon extends HTMLElement {
  static get observedAttributes() { return ['name', 'size']; }
  constructor() { super(); this._root = this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    if (!this._root) return;
    const n = this.getAttribute('name');
    const s = this.getAttribute('size') || 20;
    const d = ICONS[n];
    const css = '<style>:host{display:inline-flex;align-items:center;justify-content:center;width:' + s + 'px;height:' + s + 'px;flex:none;line-height:0}</style>';
    const svg = d ? '<svg width="' + s + '" height="' + s + '" viewBox="' + d.viewBox + '" fill="none" style="display:block;overflow:visible">' + d.body + '</svg>' : '';
    this._root.innerHTML = css + svg;
  }
}
if (!customElements.get('inv-icon')) customElements.define('inv-icon', InvIcon);
