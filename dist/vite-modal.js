import { css as a, LitElement as d, html as l } from "lit";
import { property as m, customElement as p } from "lit/decorators.js";
var b = Object.defineProperty, f = Object.getOwnPropertyDescriptor, u = (s, o, n, r) => {
  for (var t = r > 1 ? void 0 : r ? f(o, n) : o, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (t = (r ? c(o, n, t) : c(t)) || t);
  return r && t && b(o, n, t), t;
};
let e = class extends d {
  constructor() {
    super(...arguments), this.count = 0;
  }
  render() {
    return l`
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `;
  }
  _onClick() {
    this.count++;
  }
};
e.styles = a`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .card {
      padding: 2em;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      button {
        background-color: #f9f9f9;
      }
    }
  `;
u([
  m({ type: Number })
], e.prototype, "count", 2);
e = u([
  p("my-element")
], e);
