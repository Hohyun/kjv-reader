import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import VerseList from './VerseList'

class App extends React.Component {
    state = { verses: [] }

    onSearchSubmit = async (term) =>  {
        const response = await axios.get('http://localhost:3001/' + term);
        this.setState({ verses: response.data })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                
                        <div className="ui segment">
                            <VerseList verses={this.state.verses} lang="eng"/>
                        </div>
                        <div className="ui segment">
                            <VerseList verses={this.state.verses} lang="kor"/>
                        </div>
    
            </div>
        )
    }
}

export default App;