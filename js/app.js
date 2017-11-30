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
    for (var j = 0; j < valuesofPromsforSede.length; j++) {
      // Creamos un elemento para mostrar las promociones
      var optionproms = document.createElement('option');
      // le asignamos el valor a mostrar
      optionproms.label = promsforSede[j];
      optionproms.id = 'optionproms' + j;
      // le asignamos donde lo va a mostrar

      optgroupsedes.appendChild(optionproms);

      // var nameProm = searchInArray(promsforSede, promsforSede[j]);
      var nameProm = document.getElementById('optionproms' + j).label;

      var numberOfStudentsforProm = valuesofPromsforSede[j].students.length;
      // console.log(numberOfStudentsforProm);
      var numberStudentsActiveforProm = parseInt(serchStudentsActive(valuesofPromsforSede[j].students));
      var numberStudentsInactiveforProm = numberOfStudentsforProm - numberStudentsActiveforProm;
      // console.log(numberStudentsActiveforProm);

      arrayNumberStudentsActiveforSede.push(numberStudentsActiveforProm);

      // Porcentaje de alumnas activas por promoción
      var percentSatudentsActiveforProm = Math.round((numberStudentsActiveforProm * 100) / numberOfStudentsforProm);
      // Porcentaje de alumnas inactivas por promoción
      var percentSatudentsIntiveforProm = Math.round((numberStudentsInactiveforProm * 100) / numberOfStudentsforProm);


      // console.log(numberOfStudentsforProm);

      selectSede.addEventListener('change', function(event) {
        var valueSelector = nameSede + nameProm;
        console.log(valueSelector);
        switch (valueSelector) {
          case (nameProm):
            nameshow.textContent = nameSede + ' ' + valueSelector;

            break;
        }
      });


      /* ACCEDER A LAS NOTAS DE LAS ESTUDIANTES*/
      var dataStudent = valuesofPromsforSede[j].students;
      // recorremos las estudiantes
      var arrayPercentTotalProm = [];

      for (var f = 0; f < dataStudent.length; f++) {
        var arraysprints = dataStudent[f].sprints;
        // console.log(dataStudent[f]);
        // console.log(arraysprints);

        var arrayPercentTotalStudent = [];
        // recorremos los sprints
        for (var g = 0; g < arraysprints.length; g++) {
          // console.log(arraysprints[g]);
          // notas por sprint
          var notaTech = arraysprints[g]['score']['tech'];
          var notaHSE = arraysprints[g]['score']['hse'];
          var percenNotaTech = Math.round(notaTech / 18);
          var percenNotaHSE = Math.round(notaTech / 12);
          // porcentaje por sprint
          var percenTotalforSprint = (percenNotaTech + percenNotaHSE) / 2;
          // console.log(percenTotalforSprint);
          arrayPercentTotalStudent.push(percenTotalforSprint);
        }

        var PercentTotalStudent = parseInt(sumElementArray(arrayPercentTotalStudent) / arraysprints.length);
        // console.log(PercentTotalStudent);
        arrayPercentTotalProm.push(PercentTotalStudent);
      }

      var PercentTotalProm = parseInt(sumElementArray(arrayPercentTotalProm) / dataStudent.length);
      // console.log(PercentTotalProm);
      /* FIN ACCEDER*/

    }
    // total de studiantes por sede;
    var numberOfStudentsforSede = activeforSede(arrayNumberStudentsActiveforSede);
    // console.log(numberOfStudentsforSede);
  }
  /* FIN DE CÓDIGO MOSTRAR SEDES Y PROMOCIONES */

  /* CODIGO PESTAÑAS*/
  var show = function(e) {
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    console.log(tabSeleccionado);
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');
    if (tabSeleccionado === 'tabOverview') {
      students.style.display = 'none';
      teachers.style.display = 'none';
      overview.style.display = 'block';
    } else if (tabSeleccionado === 'tabStudents') {
      overview.style.display = 'none';
      teachers.style.display = 'none';
      students.style.display = 'block';
      console.log('students');
    } else if (tabSeleccionado === 'tabTeachers') {
      overview.style.display = 'none';
      students.style.display = 'none';
      teachers.style.display = 'block';
      console.log('teachers');
    }
  };
  var chargePage = function() {
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');
    students.style.display = 'none';
    teachers.style.display = 'none';
    overview.style.display = 'block';
    var elementsTab = document.getElementsByClassName('tab');
    for (var i = 0; i < elementsTab.length;i++) {
      elementsTab[i].addEventListener('click', show);
    }
  };
  chargePage();
/* FIN CODIGO PESTAÑAS*/
});


// para buscar en un array
function searchInArray(array, string) {
  var result;
  for (var m = 0; m < array.length; m++) {
    if (string === array[m]) {
      result = string;
    }
  }
  return result;
}

// para buscar una key en un objeto
function searchInObject(obj, string) {
  var result;
  var keys = Object.keys(obj);
  for (var s = 0; s < keys.length; s++) {
    if (string === keys[s]) {
      result = string;
    }
  }
  return result;
}


// funcion para obtener el valor especifco de una key
function getValueforkey(obj, key) {
  var valueofkey,result;
  var keysofObject = Object.keys(obj);
  for (var i = 0; i < keysofObject.length; i++) {
    keysearch = keysofObject[i];
    if (key === keysofObject[i]) {
      valueofkey = obj[key];
    }
    result = valueofkey;
  }
  return result;
}

// para buscar estudiantes activas
function serchStudentsActive(studentsList) {
  var result = 0;
  for (var k = 0; k < studentsList.length; k++) {
    if (studentsList[k].active === true) {
      result++;
    }
  }
  // console.log(result);
  return result;
}


// para buscar el total de acttivas por prom
function activeforSede(array) {
  /* PARA RECORRER EL ARRAY DEL NUMERO DE ESTUDIANTES ACTIVAS*/
  var sum = 0;
  for (var s = 0; s < array.length; s++) {
    sum += array[s];
  }
  return sum;
}

// para sumar elementos de un array
function sumElementArray(array) {
  var sumTotal = 0;
  for (var u = 0; u < array.length; u++) {
    sumTotal += array[u];
  }
  return sumTotal;
}
