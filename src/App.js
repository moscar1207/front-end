import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewTask from './components/NewTask';
import TaskPage from './components/TaskPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api/tasks';

function App() {
  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const history=useHistory();
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ taskBody, setTaskBody ] = useState('');
  const [ tasks, setTasks ] = useState([])

  useEffect(() =>{
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data)
      }
      catch (err){
        if(err.response){  
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }

      }
    }
    fetchTasks();
  }, [])

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id= tasks.length ? tasks[tasks.length -1].id + 1 : 1;
    const newTask={ id, title: taskTitle, body: taskBody };
    try{
      const response = await api.post('/tasks/', newTask);
      const allTasks = [...tasks, response.data];
      setTasks(allTasks);
      setTaskTitle('');
      setTaskBody('');
      history.push('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`)
    }
    
  }

  const handleDelete= async (id) => {
    try{
      await api.delete(`tasks/${id}`);
      const tasksList=tasks.filter(post=> post.id !== id);
      setTasks(tasksList);
      history.push('/');
    } catch(err){
      console.log(`Error: ${err.message}`)
    }
  }



  useEffect(() => {
    const filteredResults = tasks.filter(task => 
      ((task.body).toLowerCase()).includes(search.toLowerCase())
      || ((task.title).toLowerCase().includes(search.toLowerCase())));
      setSearchResults(filteredResults.reverse());
    
  },[tasks, search])






  return (
    <div className="App">
      <Header title="Welcome to my app"/>
      <Nav search={search} setSearch={setSearch}/>
      <Switch> 
        <Route exact path="/">
          <Home tasks={searchResults}/>
        </Route>
        <Route exact path="/task">
          <NewTask handleSubmit={handleSubmit} taskTitle={taskTitle} setTaskTitle={setTaskTitle} taskBody={taskBody} setTaskBody={setTaskBody}/>   
        </Route>
        <Route path="/task/:id">
          <TaskPage tasks={tasks} handleDelete={handleDelete}/>
        </Route>
        <Route exact path="/About" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
