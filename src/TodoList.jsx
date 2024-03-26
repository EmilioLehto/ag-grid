import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function TodoList(){
    const[desc, setDesc] = useState("");
    const[date, setDate] = useState(null);
    const[priority, setPriority] = useState("");
    const[todos, setTodos] = useState([]);
    const gridRef = useRef();


    const [columnDefs] = useState([
  {field: 'desc', sortable: false, filter: true},
  {field: 'priority', filter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
  {field: 'date', filter: true}

]);

    const handleChange = (event) => {
        setDesc(event.target.value);
        
    };
    
    const handleDateChange = (date) => {
        setDate(date.toISOString());

    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }


    const addTodo = () => {
        setTodos([...todos, {desc, priority, date}]);
        setDate("");
        setDesc("");
        setPriority("");
    };

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
          setTodos(todos.filter((todo, index) => 
            index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
          alert('Select a row first!');
        }
      };
    
    return (
        <>
<div style={{ display: "flex", alignItems: "center" }}>
    <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
            <div>
                
                <TextField 
                    label = "Description:"
                    onChange={handleChange} 
                    value={desc}
                /> 
            </div>

            <div>
                <TextField  
                    label="Priority" 
                    onChange={handlePriorityChange} 
                    value={priority}
                /> 
            </div>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" />
                    </DemoContainer>
                </LocalizationProvider>
                
            </div>
            </Stack>
            </div>
            <Button style={{ marginTop: "10px", marginBottom: "10px" }}onClick={addTodo}>Add</Button>
            <Button onClick={handleDelete}>Delete</Button>

            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                />
            </div> 
        </>
    );
}

export default TodoList