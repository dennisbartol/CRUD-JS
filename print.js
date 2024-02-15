const printTodoList = () => {
  const printWindow = window.open('', '_blank');

  let printContent = '<h2>To Do List</h2>'; 
  printContent += '<ul>';
  todos.forEach(todo => {
    printContent += '<li>${todo.text}</li>';
  });
  printContent += '</ul>';


 printWindow.document.write(
   <html>
  
    <head>
      <style>
        body { font-family: arial, san-serif; }
        ul { list-style-type: square; padding: 2px; }
        li { margin-bottom: 6px }; 
      </style>
    </head>

    <body> 
        ${printContent }
    </body>
      
   </html>
 );

  printWindow.document.close();
  printWindow.print();
};
