import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, issuseCount, forksCount, avatarUrl, starsCount} =
    repositoryDetails

  return (
    <div className="repository-item-container">
      <div className="img-name-container">
        <img src={avatarUrl} alt={name} className="avatar-img" />
        <h1 className="repository-name">{name}</h1>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        alt="stars"
        className="icon-img"
      />
      <p className="status-text">{starsCount} stars</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        alt="forks"
        className="icon-img"
      />
      <p className="status-text">{forksCount} froks</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        alt="open issues"
        className="icon-img"
      />
      <p className="status-text">{issuseCount} open issues</p>
    </div>
  )
}
export default RepositoryItem
