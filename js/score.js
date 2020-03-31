/*  there are other libraries that could use "$" - so it is 100% save to use "jQuery" instead of "$"
    if you don't use any other libraries than jQuery you could still go with "$"
    so the following line would be
    $(document).ready(function() {
*/
jQuery(document).ready(function() {

    // if variable gameFinished is set true then save score
    if (gameFinished){
        saveScore(userScore);
    }


});
function saveScore(userScore) {

    $.ajax({
        'url': 'index',
        'method': 'post',
        'data': {'action': 'saveScore', 'score': userScore},
        'success': function (receivedData) {
            if (receivedData.result) {
                //after save change url to scoreboard
                //location.href = 'scoreboard'; mit overlay austauschen
            }
        }
    });
}