import './index.css'

const languageFilterItem = props => {
  const {data, onLanguageFilterClick} = props
  const {id, language} = data

  const onHandleData = () => {
    onLanguageFilterClick(id)
  }

  return (
    <li className="repository-item-contianer">
      <button type="button" onClick={onHandleData} className="button">
        {language}
      </button>
    </li>
  )
}
export default languageFilterItem
