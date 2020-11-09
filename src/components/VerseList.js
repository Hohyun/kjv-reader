import React from 'react'

class VerseList extends React.Component {
    renderList = (lang) => {
        return this.props.verses.map(verse => {
            const ref = (this.props.lang === 'eng' ? verse.book1 : verse.book2) + ' ' + verse.chapter + ':' + verse.verse;
            const words = this.props.lang === 'eng' ? (' ' + verse.words1) : (' ' + verse.words2);
            
            return (
                <div key={ref} className="item">
                    <div className="ui horizontal label">{ref}</div>{words}
                </div>
            );
        });
    }

    render() {
        return (
                <div className="ui divided list">
                  {this.renderList()}
                </div>
        );
    }
}

export default VerseList;