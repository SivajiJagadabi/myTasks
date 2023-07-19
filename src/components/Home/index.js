import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tasks from '../Tasks'
import Tags from '../Tags'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    taskList: [],
    inputValue: '',
    inputTag: tagsList[0].optionId,
    activeTag: 'Initial',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onChangeInputTag = event => {
    this.setState({inputTag: event.target.value})
  }

  onClickAdd = () => {
    const {inputValue, inputTag} = this.state
    const addTask = {
      id: uuidv4(),
      value: inputValue,
      tag: inputTag,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, addTask],
      inputValue: '',
      inputTag: '',
    }))
  }

  setActiveTag = optionId => {
    this.setState({inputTag: optionId})
  }

  getFilteredList = () => {
    const {taskList, inputTag} = this.state
    const filterTask = taskList.filter(eachItem => eachItem.tag === inputTag)
    return filterTask
  }

  render() {
    const {taskList, inputValue, inputTag} = this.state
    const filterList = this.getFilteredList()

    console.log(filterList)

    return (
      <div className="app-container">
        <div className="my-tasks-container">
          <form className="task-container">
            <h1 style={{color: '#f3aa4e', fontSize: 25}}>Create a task!</h1>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              placeholder="Enter the task here"
              className="input"
              onChange={this.onChangeInput}
              value={inputValue}
            />
            <label htmlFor="tasksTag">Tags</label>
            <select
              id="tasksTag"
              className="input"
              onChange={this.onChangeInputTag}
              value={inputTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </select>
            <button type="button" className="button" onClick={this.onClickAdd}>
              Add Task
            </button>
          </form>
          <div className="tags-container">
            <h1
              style={{
                color: 'white',
                fontSize: 25,
                alignSelf: 'flex-start',
                marginLeft: 50,
                marginBottom: 0,
              }}
            >
              Tags
            </h1>
            <ul className="tags-cards">
              {tagsList.map(eachTag => (
                <Tags
                  key={eachTag.optionId}
                  itemDetails={eachTag}
                  setActiveTag={this.setActiveTag}
                />
              ))}
            </ul>
            <h1
              style={{
                color: 'white',
                fontSize: 25,
                alignSelf: 'flex-start',
                marginLeft: 50,
                marginTop: 40,
              }}
            >
              Tasks
            </h1>
            {filterList.length > 0 ? (
              <ul className="tags-list-container">
                {filterList.map(eachItem => (
                  <Tasks
                    key={eachItem.id}
                    tagDetails={eachItem}
                    setActiveTag={this.setActiveTag}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-tasks">
                <p style={{color: 'white', fontSize: 30}}>
                  No Tasks Added Yet!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
