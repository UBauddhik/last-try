import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker"

class LastTry extends LitElement {
  static properties = {
    image: { type: String },
    alt: { type: String },
    title: { type: String },
    description: { type: String },
    dark: { type: Boolean, reflect: true }
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: black;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--last-try-background-color);
    }

    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: white;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    max-width: 400px;
    border: solid black;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    background-color: white;
  }

  .container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .card-content {
    margin-top: 0;
    text-align: center;
  }

  .card-title {
    margin: 16px;
    text-align: center;
  }

  .description {
    margin: 4px;
  }

  .toggle-button {
    display: block;
    text-align: center;
    padding: 8px;
    border: solid black;
    border-radius: 4px;
    margin-top: 16px;
    color: black;
    background-color: #0074D9;
  }
  .details-link {
    display: none;
    margin-top: 16px;
    text-align: center;
  }

  .toggle-button:hover,
  .toggle-button:focus {
    background-color: #0056b3;
  }

  .light-mode {
    background-color: #ffffff;
    color: #000000;
  }
  .dark-mode {
    background-color: #000000;
    color: #ffffff;
  }

  .hidden {
    display: none;
  }
  @media (max-width: 800px) {
    .button-details {
      display: none;
    }
}`

constructor() {
  super();
  this.image = 'https://www.dalycollege.org/images/slider-1.jpg';
  this.title = 'Card';
  this.description = 'The Daly College is a group of institutions in Indore, India that includes a co-educational boarding school, a junior school, an undergraduate management school, and a postgraduate business school.';
  }

duplicateCard() {
  const cardTemplate = this.shadowRoot.querySelector('.container');
  const clone = cardTemplate.cloneNode(true);

  clone.querySelector('.toggle-button').classList.remove('hidden');
  const cardDescription = clone.querySelector('.description');
  const toggleDescriptionButton = clone.querySelector('.toggle-button');
  
  toggleDescriptionButton.addEventListener('click', () => {
    cardDescription.classList.toggle('hidden');
  });

  this.shadowRoot.querySelector('.wrapper').appendChild(clone);
}


toggleColor() {
  const card = this.shadowRoot.querySelector('.container');
  card.classList.toggle('light-mode');
  card.classList.toggle('dark-mode');

}

toggleDescription() {
  const cardDescription = this.shadowRoot.querySelector('.description');
  cardDescription.classList.toggle('hidden');
}

changeTitle() {
  const cardTitle = this.shadowRoot.querySelector('.card-title');
  cardTitle.textContent = 'something else';
}

deleteLastCard() {
  const cards = this.shadowRoot.querySelectorAll('.container');
  if (cards.length > 1) {
    const lastCard = cards[cards.length - 1];
    lastCard.remove();
  }
}

render() {
  return html`
    <main>
      <div class="wrapper">
      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
      </meme-maker>
        <div class="container">
          <div class="card">
            <div class="card-content">
              <img src="${this.image}" >
              <h2 class="card-title">${this.title}</h2>
              <div class="description-toggle">
                <div class="description"><slot>${this.description}</slot></div>
                <div class="toggle-button" @click="${this.toggleDescription}">Details</div>
              </div>
              <a class="details-link" href="${this.link}">Details</a>
            </div>
          </div>
        </div>
      </div>
      <button class="duplicateButton" @click="${this.duplicateCard}">Duplicate Card</button>
      <button class="toggleColorButton" @click="${this.toggleColor}">Toggle Color</button>
      <button class="changeTitleButton" @click="${this.changeTitle}">Change Title</button>
      <button class="deleteCardButton" @click="${this.deleteLastCard}">Delete Last Card</button>
    </main>
  `;
}
}

customElements.define('last-try', LastTry);

