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
        <p>do this: ${anything.activity}</p>
    `)
};