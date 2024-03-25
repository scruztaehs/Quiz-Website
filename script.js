$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('#answer1').val();
    const answer2 = $('#answer2').val();


    
    if (answer1 === 'yes' && answer2 >= 8) {
      showResult("Zoom","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/63a60891-e35d-423c-967e-c124e1271f89/dg8cxrt-245110c3-e983-42c8-946e-da18bcab4869.png/v1/fill/w_1280,h_1506,q_80,strp/zoom__hunter_zolomon__by_kafrilas69_dg8cxrt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwNiIsInBhdGgiOiJcL2ZcLzYzYTYwODkxLWUzNWQtNDIzYy05NjdlLWMxMjRlMTI3MWY4OVwvZGc4Y3hydC0yNDUxMTBjMy1lOTgzLTQyYzgtOTQ2ZS1kYTE4YmNhYjQ4NjkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cLJDPs5Sq3Ag7eRMpEStq-4KQ5Txzi0IxAcm8q7fbKc");
    } else if (answer1 === 'no' && answer2 >= 5) {
      showResult("Joker","https://cdn.europosters.eu/image/1300/art-photo/joker-three-jokers-i121285.jpg");
    } else if (answer1 === 'yes' && answer2 < 8) {
      showResult("Batman","https://cdn.europosters.eu/image/1300/art-photo/the-batman-2022-i122573.jpg");
    } else {
      showResult("Hulk","https://cdn.pixabay.com/photo/2023/06/28/20/03/ai-generated-8095115_640.png");
    }
      
    quizCount++;
    updateQuizCount();
  });

  function showResult(character,imagePath) {
    const resultText = `Your character result is: ${character}.`;
    const imageElement = `<img src="${imagePath}" alt="${character}" class="result-image">`;
    $('#result').empty().append(resultText).append(imageElement);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});
$('#restartBtn').click(function() {
    $(location).attr('href',);
    $('#answer1').val('');
    $('#answer2').val('');
    $('#result').empty();
});