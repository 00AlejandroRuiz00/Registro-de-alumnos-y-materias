document.addEventListener('DOMContentLoaded', function() {
    const addStudentForm = document.getElementById('addStudentForm');
    const assignSubjectForm = document.getElementById('assignSubjectForm');
    const studentList = document.getElementById('studentList');
    const selectStudent = document.getElementById('selectStudent');
  
    // Lista de alumnos y sus materias
    let students = [];
  
    // Función para agregar un alumno
    addStudentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const studentName = document.getElementById('studentName').value;
      if (studentName.trim() !== '') {
        const student = {
          id: Date.now(),
          name: studentName,
          subjects: []
        };
        students.push(student);
        renderStudents();
        renderStudentOptions();
        addStudentForm.reset();
      }
    });
  
    // Función para asignar una materia a un alumno
    assignSubjectForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const studentId = parseInt(selectStudent.value);
      const subjectName = document.getElementById('subjectName').value;
      if (subjectName.trim() !== '') {
        const student = students.find(student => student.id === studentId);
        if (student) {
          student.subjects.push(subjectName);
          renderStudents();
          assignSubjectForm.reset();
        }
      }
    });
  
    // Función para renderizar la lista de alumnos
    function renderStudents() {
      studentList.innerHTML = '';
      students.forEach(student => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${student.name}</strong>: ${student.subjects.join(', ')}`;
        studentList.appendChild(li);
      });
    }
  
    // Función para renderizar las opciones de alumnos en el formulario de asignar materia
    function renderStudentOptions() {
      selectStudent.innerHTML = '';
      students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = student.name;
        selectStudent.appendChild(option);
      });
    }
  });
  