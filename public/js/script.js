$(document).ready(function(){
  $('.delete').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/students/'+id,
      dataType: 'text',
      success: function(response){
        alert('Student has been deleted');
        window.location.href='/regstudents';
      },
      error: function(err){
        console.log(err);
      }
    });
    console.log(id);
  });
});
