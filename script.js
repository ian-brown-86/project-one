const URL = 'http://www.boredapi.com/api/activity/';
const $form = $('form');
const $main = $('main');
const $secondColumn = $('#secondColumn');
const $thirdColumn = $('#thirdColumn');
const $fourthColumn = $('#fourthColumn');

const options = {
  method: 'GET',
  url: 'http://www.boredapi.com/api/activity/',
};

$form.on('submit', handleSubmit)

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
        <p>TRY THIS: <br>${anything.activity}!!!</p>
    `);
    $thirdColumn.html(`
        <p>TYPE OF ACTIVITY: <br>[ ${anything.type} ]</p>
    `);
    $fourthColumn.html(`
        <p>PARTICIPANTS REQUIRED: <br>${anything.participants}</p>
    `);
};

