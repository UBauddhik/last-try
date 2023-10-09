import { html, css, LitElement } from 'lit';

export class LastTry extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-card-text-color, #000);
    }
  `;

__changeTitle(){
  if(this.title=="Description"){
    this.title="Something Else"
  }
  else{
    this.title="Description"
  }
}

// to select entire card this.parentNode
// outside card document.querySelector("last-try").shadowRoot.document.querySelector('button').addEventListener('click', (e) => {
  //   const cardClone = document.querySelector('.card').cloneNode(true);
  //   document.body.appendChild(cardClone);

  document.querySelector('last-try').shadowRoot.document.queryselector('button').addEventListener('click', (e) => {
    const cardClone = document.querySelector('.card').cloneNode(true);
    document.body.appendChild(cardClone);
  })

  // document.querySelector('#backgroundColor').addEventListener('click', () => {
  //   const card = document.querySelector('.card');
  //   card.classList.toggle('light-mode');
  //   card.classList.toggle('dark-mode');
  // })

  // document.querySelector('#changeText').addEventListener('click', () => {
  //   const heading = document.querySelector('h1');
  //   heading.textContent = "Something Else";
  // })

  // document.querySelector('#delete').addEventListener('click', () => {
  //   const cards = document.querySelectorAll('.card');
  //   if (cards.length > 1) {
  //       const lastCard = cards[cards.length - 1];
  //       lastCard.remove();
  //   }
  // })

  // document.querySelector('#detailsButton').addEventListener('click', () => {
  //   const description = document.querySelector('#description');
  //   description.style.display = (description.style.display === 'none') ? 'block' : 'none';
  // })

  static properties = {
    header: { type: String },
    counter: { type: Number },
    title: { type: String }
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    this.title = "Description";
  }


  render() {
    return html`
    <button>Button</button>
    <div class="all">
        <button id="backgroundColor">Background Color</button>
        <button @click=${this.__changeTitle}>Change Text</button>
        <button id="delete">Delete Last Card</button>
        <div class="card">
            <img src="https://www.dalycollege.org/images/slider-1.jpg" >
            <h1>${this.title}</h1>
            <p id="description" style="display: none;">
                The Daly College is a group of institutions in Indore, India that includes a co-educational boarding school, a junior school, an undergraduate management school, and a postgraduate business school.
            </p>
            <button id="detailsButton">Details</button>
        </div>
    </div>
    `;
  }
}

customElements.define('last-try', LastTry)
