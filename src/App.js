import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: [],
      bgColor: "",
      text: "Done"
    };
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);
  
      this.setState({
        list,
        newItem: "",
      });
    }
  }
  
  deleteItem (id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list:updatedList});
  }
  
  updateInput(input){
    this.setState({newItem: input});
  }

  underlineList = (text) => {
    this.setState({
      text: text
    })
  }

 render(){
   const { text } = this.state
    return (
      <div class="h-screen w-full flex items-center justify-center bg-gray-500 font-sans">
      <div class="bg-purple-100 rounded shadow p-6 h-100 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
                <h1 class="text-blue-500 text-3xl font-bold">Todo List</h1>
                <div class="flex mt-4">
                    <input 
                     class="shadow appearance-none border-2 border-blue-300 rounded w-full py-2 px-3 mr-4 text-grey-darker"
                     placeholder="Add Todo" 
                     value={this.state.newItem}
                     onChange={e => this.updateInput(e.target.value)}
                     />
                    <button 
                     class="flex-no-shrink p-2 border-2 rounded text-green-300  border-green-400 hover:text-white hover:bg-green-300"
                     onClick={() => this.addItem(this.state.newItem)}
                     disabled={!this.state.newItem.length}
                    >Add</button>
                </div>
            </div>
            <div>
                <div class="flex mb-4 items-center pl-4">
                    <ul class = "list-disc list-outside">
                    {this.state.list.map(item => {
                      return(
                        <li 
                        class="w-full text-blue-500 pl-1 text-lg"
                        key={item.id}
                        >
                        {item.value}
                        
                        <button
                         class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-400 hover:bg-green-300"
                         key={item.id}
                         onClick={() => {this.underlineList("NotDone")} }
                         >{text}</button>
                        <button 
                         class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-400"
                         onClick={() => this.deleteItem(item.id)}
                         >Remove</button>
                        </li>
                      )
                    })}
                    </ul>
                </div>
                
            </div>
        </div>
  </div>
  );
}
}

export default App;
