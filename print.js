const printTodoList = () => {
  const printWindow = window.open('', '_blank');

  let printContent = '<h2>To Do List</h2>'; 
  printContent += '<ul>';
  todos.forEach(todo => {
    printContent += '<li>${todo.text}</li>';
  });
  printContent += '</ul>';



}
