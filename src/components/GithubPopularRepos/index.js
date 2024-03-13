import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos'

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    isLoading: true,
    repositoryDataList: [],
  }

  componentDidMount() {
    this.getRepositoryData()
  }

  onLanguageFilterClick = activeId => {
    this.setState({activeId: activeId}, this.getRepositoryData)
  }

  getRepositoryData = async () => {
    const {activeId} = this.state

    const url = `${githubReposApiUrl}?language=${activeId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(data => ({
        id: data.id,
        name: data.name,
        issuseCount: data.issues_count,
        forksCount: data.forks_count,
        starsCount: data.stars_count,
        avatarUrl: data.avatar_url,
      }))
      this.setState({isLoading: false, repositoryDataList: updatedData})
    }
  }

  render() {
    const {isLoading, activeId, repositoryDataList} = this.state

    return (
      <div className="main-contianer">
        <div>
          <h1 className="main-heading">Popular</h1>
          <ul className="repository-list-container">
            {languageFiltersData.map(data => (
              <LanguageFilterItem
                data={data}
                key={data.id}
                activeId={activeId}
                onLanguageFilterClick={this.onLanguageFilterClick}
              />
            ))}
          </ul>
          <div>
            {isLoading ? (
              <div testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0284c7"
                  height={80}
                  width={80}
                />
              </div>
            ) : (
              <div className="repository-data-list-container">
                {repositoryDataList.map(repositoryDetails => (
                  <RepositoryItem
                    repositoryDetails={repositoryDetails}
                    key={repositoryDetails.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
