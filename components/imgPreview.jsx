import React from 'react'

class ImgPreview extends React.Component {

    constructor(props) {

        super(props);

        this.state = { file: '', url: props.value };
    }

    onImageChange(e) {
        e.preventDefault();

        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({ file: file, url: reader.result });

            this.props.onChange(this.state.url);
        };

        reader.readAsDataURL(file);
    }

    render() {
        const imgStyle = {
            height: 50
        };

        return (
            <div>
                <div style={{ float: 'left' }}>
                    <input type="file" onChange={this.onImageChange.bind(this)} />
                </div>
                <div style={{ float: 'left' }}>
                    <div>{this.state.url ? (<img src={this.state.url} style={imgStyle} />) : null}</div>
                </div>
            </div>
        )
    }
}

ImgPreview.PropTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
}

export default ImgPreview