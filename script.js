const URL = 'https://www.boredapi.com/api/activity/';
const $form = $('form');
const $main = $('main');
const $secondColumn = $('#secondColumn');
const $thirdColumn = $('#thirdColumn');
const $fourthColumn = $('#fourthColumn');
const submitBtn = document.getElementById('demo');
const submitBtnOriValue = document.getElementById('demo').value;

const options = {
  method: 'GET',
  url: 'https://www.boredapi.com/api/activity/',
};

$form.on('submit', handleSubmit);

submitBtn.onmouseover  = function () {
    submitBtn.value = "SURE THING, BOSS"
};
submitBtn.onmouseout  = function() {
    submitBtn.value = submitBtnOriValue;
};


function handleSubmit(event) {
    event.preventDefault();
    const promise = $.ajax(`${URL}`);

    promise.then(
        function(data){
            console.log('data: ', data);
            render(data);
        },
        function(error){
        console.log('error: ', error);
        }
    );
};

function render(anything) {
    $secondColumn.html(`
        <p class="linear-wipe">TRY THIS: <br>${anything.activity}!!!</p>
    `);
    $thirdColumn.html(`
        <p class="linear-wipe">TYPE OF ACTIVITY: <br>[ ${anything.type} ]</p>
    `);
    $fourthColumn.html(`
        <p class="linear-wipe">PARTICIPANTS REQUIRED: <br>${anything.participants}</p>
    `);
};
