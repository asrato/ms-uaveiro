const banner_template = document.createElement('template');

banner_template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>


<banner>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <img width="150" height="150" src="assets/rato.png">
                </div>
                <div class="col-md-9 col-lg-10">
                    <h1 class="display-4">André da Silva Rato
                    </h1>
                    <blockquote class="blockquote">
                        <p class="mb-0">"<b>You control</b> your own life. Your own <b>will</b> is extremely <b>powerfull</b>."
                        <footer class="blockquote-footer">J. K. Rowling
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</banner>
`

class Banner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(banner_template.content.cloneNode(true));
    }
}

window.customElements.define('my-banner', Banner);