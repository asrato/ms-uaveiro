/** Returns red for red suits and black for black suits --> string */
const getClassBySuit = (suit) => {
    switch (suit) {
        case 'HEARTS':
        case 'DIAMONDS':
            return 'red';
        default:
            return 'black';
    }
}

/** PlayingCard web component --> it receives data through the element attributes and renders a playing card */
class PlayingCard extends HTMLElement {
    connectedCallback() {
        const suit = this.attributes.suit?.value; // card suit
        const value = this.attributes.value?.value; // card value
        const player = this.attributes.player?.value === 'true'; // player or dealer
        const suitStyle = this.attributes['suit-style']?.value; // styles for the suit svg image
        const cardStyle = this.attributes['card-style']?.value; // styles for the card element

        this.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">

<div class="playing-card d-flex flex-column align-items-center justify-content-center${player ? ' player' : ''}" style="${cardStyle}">
    <span class="card-value ${getClassBySuit(suit)}">${value}</span>
    <img src="images/${suit}.svg" class="card-suit" style="${suitStyle}"/>
</div>
`
    }
}

window.customElements.define('playing-card', PlayingCard);