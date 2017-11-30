/* CODIGO PESTAÑAS*/
var show = function(e) {
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  if(tabSeleccionado === 'tabOverview'){
    students.style.display='none';
    teachers.style.display= 'none';
    overview.style.display= 'block'
;
  }else if (tabSeleccionado === 'tabStudents') {
    overview.style.display='none';
    teachers.style.display='none';
    students.style.display='block';
    console.log('students')
  }else if (tabSeleccionado === 'tabTeachers') {
    overview.style.display='none';
    students.style.display='none';
    teachers.style.display='block';
    console.log('teachers')
  }
};
var chargePage = function() {
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  students.style.display='none';
  teachers.style.display= 'none';
  overview.style.display= 'block'
  var elementsTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementsTab.length;i++) {
    elementsTab[i].addEventListener('click', show);
  }
};

chargePage ();


/* menu*/
$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};
