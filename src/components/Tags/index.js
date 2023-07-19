import './index.css'

const Tags = props => {
  const {itemDetails, setActiveTag} = props
  const {id, optionId, displayText} = itemDetails

  const onClickTag = () => {
    setActiveTag(id)
  }

  return (
    <li>
      <button type="button" className="tag-btn" onClick={onClickTag}>
        {displayText}
      </button>
    </li>
  )
}

export default Tags
