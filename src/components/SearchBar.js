import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Bible Search</label>
                    <input 
                        type="text" 
                        placeholder="Gn 1 1 5 => Genesis 1:1~5"
                        value={this.state.term} 
                        onChange={this.onInputChange}
                    >
                    </input>
                    </div>
 
                </form>
            </div>
        )
    }
}

export default SearchBar;