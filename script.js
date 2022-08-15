const URL = 'http://www.boredapi.com/api/activity/';
const $form = $('form');
const $main = $('main');

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
    $main.html(`
        <p>TRY THIS: <br>${anything.activity}!!!</p>
        <p>TYPE OF ACTIVITY: <br>[ ${anything.type} ]</p>
        <p>PARTICIPANTS REQUIRED: <br>${anything.participants}</p>
    `)
};