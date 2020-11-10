import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import VerseList from './VerseList'
import CopyButton from './CopyButton'

class App extends React.Component {
    state = { verses: [], engText: '', korText: '', copyMsgEng: '', copyMsgKor: '' }

    onSearchSubmit = async (term) =>  {
        const response = await axios.get('http://localhost:3001/' + term);
        this.setState({ verses: response.data })

        var eText = '';
        var kText = '';
        this.state.verses.map(v => {
            eText = eText + `${v.book1} ${v.chapter}:${v.verse} ${v.words1}\n` 
            kText = kText + `${v.book2} ${v.chapter}:${v.verse} ${v.words2}\n` 
        })
        this.setState({ engText: eText, korText: kText});
    }

    onButtonClick = (lang) => {
        if (lang === 'eng') {
            this.setState({ copyMsgEng:'copied', copyMsgKor: '' });   
            navigator.clipboard.writeText(this.state.engText); 
        }
        if (lang === 'kor') {
            this.setState({ copyMsgEng:'', copyMsgKor: 'copied' });    
            navigator.clipboard.writeText(this.state.korText); 
        }
        
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}> 
                <SearchBar onSubmit={this.onSearchSubmit} />    

                <div className="ui segment">
                    <VerseList verses={this.state.verses} lang="eng"/>
                    <CopyButton lang='eng' msg={this.state.copyMsgEng} onClick={this.onButtonClick} />
                </div>
                <div className="ui segment">
                    <VerseList verses={this.state.verses} lang="kor"/>
                    <CopyButton lang='kor' msg={this.state.copyMsgKor} onClick={this.onButtonClick} />
                </div>
            </div>
        );
    }
}

export default App;
