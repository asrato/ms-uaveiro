/**************************
 * HTML Element Selectors *
 **************************/

/** Selector for the first #balance_in_screen element (top-right info about user's current balance) */
const balanceDisplayElement = document.querySelector('#balance_in_screen');

/** Selector for the first #betting element (badge that shows how much the user is betting) */
const betting = document.querySelector('#betting');

/** Selector for the first #bet_warning element (displays the warning messages in the bet modal) */
const betWarningElement = document.querySelector('#bet_warning');

/** Selector for the first body element */
const bodyElement = document.querySelector('body');

/** Selector for the first #cancel_bet element (button that allows the user to cancel a bet) */
const cancelBetBtnElement = document.querySelector('#cancel_bet');

/** Selector for the first #player_cards element (div that contains all the player played cards) */
const cardsPlayerElement = document.querySelector('#player_cards');

/** Selector for the first #dealer_cards element (div that contains all the dealer played cards) */
const cardsDealerElement = document.querySelector('#dealer_cards');

/** Selector for the first #card_values element (div that contains all the card and respective values to be displayed in the help modal) */
const cardValuesElement = document.querySelector('#card_values');

/** Selector for the first #close-btn (button that allows the user to close the help modal) */
const closeHelpBtnElement = document.querySelector('#close-btn');

/** Selector for the first #computer_score element (displays the computer score) */
const computerScoreElement = document.querySelector('#computer_score');

/** Selector for the first #my_current_money (displays user's current balance in bet modal) */
const currentBalanceElement = document.querySelector('#my_current_money');

/** Selector for the first #draw_card element (button that allows the user to draw a new card) */
const drawCardBtnElement = document.querySelector('#draw_card');

/** Selector for the first #end_turn element (button that allows the user to end their turn) */
const endTurnBtnElement = document.querySelector('#end_turn');

/** Selector for the first #games_hist element (hyperref that toggles the games history modal) */
const gamesHistoryElement = document.querySelector('#games_hist');

/** Selector for the first .help element (button that allows the user to open the help modal) */
const helpBtnElement = document.querySelector('.help');

/** Selector for the first #input_money (input where the user can type the bet value) */
const betValueInputElement = document.querySelector('#input_money');

/** Selector for the first #loading_play element (loading animated circle) */
const loadingElement = document.querySelector('#loading_play');

/** Selector for the first #make_a_bet element (button that allows the user to make a new bet and start a new game)  */
const makeBetBtnElement = document.querySelector('#make_a_bet');

/** Selector for the first nav element */
const navElement = document.querySelector('nav');

/** Selector for the first #new_game element (button that allows the user to start a new game) */
const newGameBtnElement = document.querySelector('#new_game');

/** Selector for the first #place_bet element (button that allows the user to place a new bet) */
const placeBetBtnElement = document.querySelector('#place_bet');

/** Selector for the first #player_score element (displays the player score) */
const playerScoreElement = document.querySelector('#player_score');

/** Selector for the first #report-btn element (button that allows the user to download the project report file) */
const reportBtnElement = document.querySelector('#report-btn');

/** Selector for the first #theme_toggler element (allows the user to switch between light and dark mode) */
const themeTogglerElement = document.querySelector('#theme_toggler');

/** Selector for the first .navbar-brand element (website logo) */
const websiteLogoElement = document.querySelector('.navbar-brand');


/******************
 * Game Variables *
 ******************/

/** API Base URL = 'https://deckofcardsapi.com/api' */
const apiUrl = 'https://deckofcardsapi.com/api';

/** Amount of RATS that are being bet */
let betValue = 0;

/** Numbers of points that the computer has */
let computerScore = 0;

/** ID of the current deck */
let gameId = '';

/** Numbers of points that the user has */
let playerScore = 0;

/** Array of all possible card values */
const possibleCards = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


/**********************
 * Decoding Functions *
 **********************/

/** Gets the card character according to its name --> string */
const getCardChar = (cardName) => {
    switch (cardName) {
        case 'JACK':
            return 'J';
        case 'QUEEN':
            return 'Q';
        case 'KING':
            return 'K';
        case 'ACE':
            return 'A';
        default:
            return cardName;
    }
}

/** Gets the card value according to its character --> number */
const getCardValue = (cardChar) => {
    switch (cardChar) {
        case 'J':
        case 'Q':
        case 'K':
            return 10;
        case 'A':
            return 11;
        default:
            return parseInt(cardChar);
    }
}

/****************************
 * API Connection Functions *
 ****************************/

/** Generates and executes a request according to the url and method passed through the args. After the request is completed, it executes the callback function passed as arg --> void */
const makeRequest = (url, method, callback) => {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText)
        }
    }

    xmlHttp.open(method, url, true); // true will cause that the request is asyncronous
    xmlHttp.send();
}

/************************
 * Game Logic Functions *
 ************************/

/** Draws a new a card sending a request to the draw card endpoint and, after that, trigger the callback function passed as arg --> void */
const drawCard = (callback) => {
    makeRequest(apiUrl + '/deck/' + gameId + '/draw?count=1', 'GET', (responseText) => {
        const response = JSON.parse(responseText);

        callback(response);
    });
}

/** Creates a new playing card using the 'playing-card' web component and appending the generated card to the begining of the cards div, updating the correct score --> void */
const createCard = (cardInfo, player) => {
    const playingCard = document.createElement('playing-card');
    const cardChar = getCardChar(cardInfo.value);

    playingCard.setAttribute('value', cardChar);
    playingCard.setAttribute('suit', cardInfo.suit);
    playingCard.setAttribute('player', player);


    if (player) { // player = true --> player is playing
        cardsPlayerElement.prepend(playingCard); // append at the start of the childsList
        playerScore += getCardValue(cardChar);
    } else {
        cardsDealerElement.prepend(playingCard); // append at the start of the childsList
        computerScore += getCardValue(cardChar);
    }

    updateScore(player, getCardValue(cardChar));
}

/** According to the player, updates the score using the passed args --> void */
const updateScore = (player, cardValue) => {
    if (player) { // player = true --> player is playing
        playerScoreElement.innerText = parseInt(playerScoreElement.innerText) + parseInt(cardValue);
    } else {
        computerScoreElement.innerText = parseInt(computerScoreElement.innerText) + parseInt(cardValue);
    }
}

/** Makes the Dealer able to know if he should draw a new card and executes that play; its execution is dealyed 2 seconds (2000 miliseconds) --> void */
const let_computer_play = () => {
    setTimeout(() => drawCard(card => {
        createCard(card.cards[0], false);

        if (verify_play(false)) let_computer_play();

    }), 2000);
}

/** Verifies the state of the game after one of the players make his play --> boolean */
const verify_play = (player) => {
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');

    if (playerScore === computerScore) { // player and dealer have the same score (Dealer Wins)
        modalTitle.innerText = 'OOPS! YOU LOST THE GAME!';
        modalBody.innerText = 'You and the Dealer have the same score, but the rules said that you lost! Dealer won the game!';

        document.querySelector('.modal-content').classList.remove('win');
        document.querySelector('.modal-content').classList.add('lost');

        $('#modal').modal('show');

        postCookie('history', `${playerScore} ${computerScore} L ${betValue}`);

        return false;
    } else { // player and dealer scores are not the same
        if (player) { // player is playing
            if (playerScore > 21) { // the player score is bigger than 21 (Dealer Wins)
                modalTitle.innerText = 'IT SEEMS YOU LOST THE GAME!'
                modalBody.innerText = 'Your score passed the limit of 21! Dealer won the game!';

                document.querySelector('.modal-content').classList.remove('win');
                document.querySelector('.modal-content').classList.add('lost');

                $('#modal').modal('show');

                postCookie('history', `${playerScore} ${computerScore} L ${betValue}`);

                return false;
            }
        } else { // dealer is playing
            if (computerScore > 21) { // the dealer score is bigger than 21, (Player Wins)
                modalTitle.innerText = 'CONGRATULATIONS, YOU WON THE GAME!';
                modalBody.innerText = 'Dealer\'s score passed the limit of 21! You won the game!';

                document.querySelector('.modal-content').classList.remove('lost');
                document.querySelector('.modal-content').classList.add('win');

                $('#modal').modal('show');

                postCookie('history', `${playerScore} ${computerScore} W ${betValue}`);

                const balance = parseInt(getCookies()['EDRrMakaRAT5']) + 2 * betValue;

                deleteCookie('EDRrMakaRAT5');
                postCookie('EDRrMakaRAT5', balance);

                balanceDisplayElement.innerText = balance;

                return false;
            } else if (computerScore < 18 || computerScore < playerScore) { // the dealer score is smaller than 18 or the dealer score is smaller than the player one (Continue to play)
                return true;
            } else { // the dealer score is higher than the player one and it didn't exceed the value of 21 (Dealer Wins)
                modalTitle.innerText = 'WOW! THE DEALER IS LUCKIER THAN YOU!';
                modalBody.innerText = 'Dealer\'s score is higher than yours and it didn\'t pass the limit of 21! Dealer won the game!';

                document.querySelector('.modal-content').classList.remove('win');
                document.querySelector('.modal-content').classList.add('lost');

                $('#modal').modal('show');

                postCookie('history', `${playerScore} ${computerScore} L ${betValue}`);

                return false;
            }
        }
    }
}

/** Requests a new deck to the API and updates the gameId variable value --> void */
const resetGame = () => {
    makeRequest(apiUrl + '/deck/new/shuffle', 'GET', (responseText) => {
        const response = JSON.parse(responseText);
        gameId = response.deck_id;
    });
}



/*****************************
 * Broswer Cookies Functions *
 *****************************/

/** Creates a Javascript object with the content of the user's browser cookies --> Object: { cookieName: cookieValue} */
const getCookies = () => {
    const cookiesArray = document.cookie.split('; ');
    let cookiesJsonObject = {};

    if (document.cookie.length > 0)
        for (const cookie of cookiesArray) {
            const aux = cookie.split('=');
            cookiesJsonObject[aux[0]] = aux[1];
        }

    return cookiesJsonObject;
}

/** Deletes a cookie given its name --> void */
const deleteCookie = (name) => {
    document.cookie = name + '=;Max-Age=-99999999;';
}

/** Posts a cookie if it doesn't exist; if it exists, append the value passed as arg to the existing cookie content --> void */
const postCookie = (name, value) => {
    const cookies = getCookies();

    if (cookies[name] != null) {
        document.cookie = `${name}=${cookies[name]}@${escape(value)};`;
    } else {
        document.cookie = `${name}=${escape(value)};`;
    }
}


/***********************
 * Game Data Functions *
 ***********************/

/** Collects the content of the 'history' cookie and converts it to an array of arrays --> Array: Array: string */
const getHistory = () => {
    const history = getCookies().history;

    if (history != null) {
        const previousResults = history.split('@');
        let resultsArray = [];

        for (const result of previousResults) {
            resultsArray.push(result.split('%20'));
        }

        return resultsArray;
    }

    return [];
}

/**
 * General Event Handlers:
 */

/** Triggered when the window is loaded --> Garantees that there are no data content remaining in the page when it is loaded and displays the correct user's current balance value */
window.addEventListener('load', () => {
    const onLoadCookies = getCookies();

    resetGame();

    // EDRrMakaRAT5 = Euro, Dolar or Real are Money aka Rats --> cookie name
    if (onLoadCookies['EDRrMakaRAT5'] == null) {
        postCookie('EDRrMakaRAT5', 500);
    }

    balanceDisplayElement.innerText = getCookies()['EDRrMakaRAT5'];

    /** Generates the cards to be placed in the Help modal */
    for (const possibleCard of possibleCards) {
        const divElement = document.createElement('div');
        const element = document.createElement('playing-card');
        const text = document.createElement('span');

        element.setAttribute('value', possibleCard);
        element.setAttribute('suit', 'question_mark');
        element.setAttribute('suit-style', 'filter: brightness(0) saturate(100%)');
        element.setAttribute('card-style', 'border-color: #000');

        divElement.className = 'd-flex flex-column align-items-center justify-content-center';
        divElement.style = 'gap: 5px';

        text.innerText = getCardValue(possibleCard);

        divElement.appendChild(element);
        divElement.appendChild(text);

        cardValuesElement.appendChild(divElement);
    }
});

/** Triggered when the light bulb is clicked --> Handles the light/dark theme toggling */
themeTogglerElement.addEventListener('click', () => {
    bodyElement.classList.toggle('bg-light');
    bodyElement.classList.toggle('bg-dark');
    bodyElement.classList.toggle('text-light');
    bodyElement.classList.toggle('text-dark');

    navElement.classList.toggle('bg-light');
    navElement.classList.toggle('bg-dark');

    if (themeTogglerElement.alt === 'off') {
        themeTogglerElement.src = 'images/lights_on.svg';
        themeTogglerElement.alt = 'on';
    } else {
        themeTogglerElement.src = 'images/lights_off.svg';
        themeTogglerElement.alt = 'off';
    }

    websiteLogoElement.classList.toggle('light');
});


/******************************
 * Game Action Event Handlers *
 ******************************/

/** Triggered when the "Draw Card" button is clicked --> Hides the game action buttons, displays the loading element and draws a new card; then creates it and verify the resultant game state */
drawCardBtnElement.addEventListener('click', () => {
    loadingElement.style.display = 'inline-block';
    drawCardBtnElement.style.display = 'none';
    endTurnBtnElement.style.display = 'none';

    drawCard(card => {
        createCard(card.cards[0], true);
        verify_play(true);

        loadingElement.style.display = 'none';
        drawCardBtnElement.style.display = 'inline-block';
        endTurnBtnElement.style.display = 'inline-block';

        if (makeBetBtnElement.style.display !== 'none') {
            makeBetBtnElement.style.display = 'none';
        }
    });
});

/** Triggered when the "End Turn" button is clicked --> Hides the game action buttons, displayes the loading element and starts the Dealer's turn */
endTurnBtnElement.addEventListener('click', () => {
    loadingElement.style.display = 'inline-block';
    drawCardBtnElement.style.display = 'none';
    endTurnBtnElement.style.display = 'none';

    let_computer_play();
});

/** Triggered when the "New Game" button is clicked --> Hides the loading element, reset all game variables and calls the resetGame function */
newGameBtnElement.addEventListener('click', () => {
    computerScoreElement.innerText = 0;
    computerScore = 0;
    playerScoreElement.innerText = 0;
    playerScore = 0;
    betValue = 0;

    cardsPlayerElement.innerHTML = '';
    cardsDealerElement.innerHTML = '';

    loadingElement.style.display = 'none';
    makeBetBtnElement.style.display = 'inline-block';
    drawCardBtnElement.style.display = 'none';
    endTurnBtnElement.style.display = 'none';
    betting.style.display = 'none';

    resetGame();

    $('#modal').modal('hide');
});

/** Triggered when the "Make A Bet" button is clicked --> Opens the betting modal, hides the "Make A Bet" button and change the displayed value of the user's current balance */
makeBetBtnElement.addEventListener('click', () => {
    $('#modal_bet').modal('show');

    makeBetBtnElement.style.display = 'none';

    currentBalanceElement.innerText = getCookies()['EDRrMakaRAT5'];
});

/** Triggered when the betting input value is changed --> validates the value in terms of being an integer, being 0 or higher and not exceeding the limit of the user's balance; if it's not valid, displays the error warning under the input field */
betValueInputElement.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    const balance = parseInt(getCookies()['EDRrMakaRAT5']);

    if (value < 0) { // user can't bet negative values
        betWarningElement.style.display = 'inline-block';
        betWarningElement.innerText = 'The value can\'t be negative!';
        betValueInputElement.style.borderColor = 'red';
    } else if (value == 0) { // user can play just for fun without betting
        betWarningElement.style.display = 'none';
        betValueInputElement.style.borderColor = '';
    } else if (parseFloat(e.target.value) - value > 0) { // user can't bet non-integer values
        betWarningElement.style.display = 'inline-block';
        betWarningElement.innerText = 'The value must be an integer!';
        betValueInputElement.style.borderColor = 'red';
    } else if (value > balance) { // user can't bet more than he has
        betWarningElement.style.display = 'inline-block';
        betWarningElement.innerText = 'You don\'t have enough money';
        betValueInputElement.style.borderColor = 'red';
    } else { // user input is valid
        betWarningElement.style.display = 'none';
        betValueInputElement.style.borderColor = '';
    }
});

/** Triggered when the "Place Bet" button of the betting modal is clicked --> if the bet value is valid, hides the button, updates the current balance cookie, displays the current bet badge and sets the game state to the player turn */
placeBetBtnElement.addEventListener('click', () => {
    if (betValueInputElement.style.borderColor !== 'red' && betValueInputElement.value !== '' && parseInt(getCookies()['EDRrMakaRAT5']) >= parseInt(betValueInputElement.value)) {
        betValue = parseInt(betValueInputElement.value);

        betting.style.display = 'inline-block';
        betting.innerText = `You bet ${betValue} RATS`;

        const new_balance = parseInt(getCookies()['EDRrMakaRAT5']) - betValue;

        deleteCookie('EDRrMakaRAT5');
        balanceDisplayElement.innerText = new_balance;
        postCookie('EDRrMakaRAT5', new_balance);

        $('#modal_bet').modal('hide');

        betValueInputElement.value = '';
        betWarningElement.style.display = 'none';
        betValueInputElement.style.borderColor = '';
        drawCardBtnElement.style.display = 'inline-block';
        endTurnBtnElement.style.display = 'inline-block';
    }
});

/****************************************
 * Extra Functionalities Event Handlers *
 ****************************************/

/** Triggered when the "Games History" header option is clicked --> Opens a modal, creates a table with the data returned by the getHistory function and appends it to the modal body */
gamesHistoryElement.addEventListener('click', () => {
    const history = getHistory();
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    for (const e of history) {
        const tr = document.createElement('tr');
        const tdPlayer = document.createElement('td');
        const tdComputer = document.createElement('td');
        const tdResult = document.createElement('td');
        const tdBet = document.createElement('td');

        const tempBetValue = parseInt(e[3]);

        tdPlayer.innerText = e[0];
        tdPlayer.style = "text-align: center";

        tdComputer.innerText = e[1];
        tdComputer.style = "text-align: center";

        tdResult.innerText = e[2];
        tdResult.style = `color: ${e[2] === 'W' ? 'green' : 'red'}; text-align: center;`;

        tdBet.innerText = `${e[2] === 'W' ? `+${2 * tempBetValue}` : `-${tempBetValue}`} RATS`;
        tdBet.style = `color: ${e[2] === 'W' ? 'green' : 'red'}; text-align: center;`;

        tr.appendChild(tdPlayer);
        tr.appendChild(tdComputer);
        tr.appendChild(tdBet);
        tr.appendChild(tdResult);

        tbody.prepend(tr);
    }

    $('#modal_leaderboard').modal('show');
});

/** Triggered when the "Help" button is clicked --> Opens the help modal */
helpBtnElement.addEventListener('click', () => {
    $('#modal_help').modal('show');
});

/** Triggered when the "Close" button of the help modal is clicked --> Closes the Help modal */
closeHelpBtnElement.addEventListener('click', () => {
    $('#modal_help').modal('hide');
});

/** Triggered when the "Get Project Report" button of the help modal is clicked --> Opens the project report file in a new tab */
reportBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('../project/project-report.pdf');
});

/** Triggered when the "Cancel" button of the betting modal is clicked --> Closes the Make A Bet modal */
cancelBetBtnElement.addEventListener('click', () => {
    $('#modal_bet').modal('hide');
    makeBetBtnElement.style.display = 'inline-block';
    betValueInputElement.value = '';
    betWarningElement.style.display = 'none';
    betValueInputElement.style.borderColor = '';
});

/** Triggered when th website logo is clicked --> Resets user's balance, setting it to 500 RATS */
websiteLogoElement.addEventListener('click', () => {
    const currentBalance = getCookies()['EDRrMakaRAT5'];
    const currentHref = window.location.href;

    if (currentBalance == null || currentBalance == 0) {
        deleteCookie('EDRrMakaRAT5');

        postCookie('EDRrMakaRAT5', 500);

        window.location = currentHref;
    }
});