import './index.css'

const Tasks = props => {
  const {tagDetails, setActiveTag} = props
  const {value, tag, id} = tagDetails

  return (
    <li>
      <div className="list-item">
        <p style={{color: 'white'}}>{value}</p>
        <button type="button" className="tag-button">
          {tag}
        </button>
      </div>
    </li>
  )
}

export default Tasks
