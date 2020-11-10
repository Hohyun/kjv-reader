import React from 'react'

class CopyButton extends React.Component {
    onButtonClick = (lang) => {
        this.props.onClick(lang);
    }
    
    render() {
        return (
            <React.Fragment>
                <button  
                    className="ui secondary basic button"
                    onClick={() => this.onButtonClick(this.props.lang)} 
                >
                    <i className="copy icon"></i>
                    Copy
                </button>
                <div className="ui horizontal label">{this.props.msg}</div>
            </React.Fragment>
        );
    }
}

export default CopyButton;

